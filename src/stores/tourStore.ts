/**
 * Global state management for the tour app using Zustand
 */

import { create } from 'zustand';
import {
  Tour,
  TourStop,
  UserProgress,
  LocationState,
  AudioState,
  Coordinates,
} from '../types/tour';
import { locationService } from '../services/locationService';
import { audioService } from '../services/audioService';
import { EAST_LAKEVIEW_TOUR } from '../data/eastLakeviewTour';

interface TourStore {
  // Tour data
  currentTour: Tour | null;
  currentStop: TourStop | null;

  // Location state
  location: LocationState;

  // Audio state
  audio: AudioState;

  // User progress
  progress: UserProgress | null;

  // Actions
  initializeTour: (tourId: string) => void;
  startTour: () => Promise<boolean>;
  stopTour: () => Promise<void>;
  goToStop: (stopId: string) => Promise<void>;
  updateLocation: (location: Coordinates) => void;
  updateAudioPlayback: (isPlaying: boolean, position: number, duration: number) => void;
  markStopCompleted: (stopId: string) => void;
  playAudio: () => Promise<void>;
  pauseAudio: () => Promise<void>;
  seekAudio: (positionMillis: number) => Promise<void>;
}

export const useTourStore = create<TourStore>((set, get) => ({
  // Initial state
  currentTour: null,
  currentStop: null,

  location: {
    currentLocation: null,
    accuracy: null,
    isEnabled: false,
    isTracking: false,
    error: null,
  },

  audio: {
    isPlaying: false,
    currentPosition: 0,
    duration: 0,
    isLoaded: false,
    currentStopId: null,
    error: null,
  },

  progress: null,

  // Initialize tour
  initializeTour: (tourId: string) => {
    // For now, we only have one tour
    const tour = EAST_LAKEVIEW_TOUR;

    set({
      currentTour: tour,
      currentStop: tour.stops[0],
      progress: {
        tourId: tour.id,
        completedStops: [],
        currentStopId: tour.stops[0].id,
        currentAudioPosition: 0,
        isActive: false,
        lastUpdated: new Date(),
        totalTimeSpent: 0,
      },
    });

    // Set up geofences for all stops
    locationService.setupGeofences(tour.stops);
  },

  // Start the tour
  startTour: async () => {
    const { currentTour, progress } = get();

    if (!currentTour) {
      return false;
    }

    // Start location tracking
    const locationStarted = await locationService.startTracking(
      (location) => {
        get().updateLocation(location);
      },
      (stopId) => {
        // Auto-advance to stop when entered
        get().goToStop(stopId);
      }
    );

    if (!locationStarted) {
      set({
        location: {
          ...get().location,
          error: 'Failed to start location tracking. Please enable location services.',
        },
      });
      return false;
    }

    // Load audio for first stop
    if (currentTour.stops[0]) {
      await audioService.loadAudio(currentTour.stops[0]);

      // Set up playback status callback
      audioService.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          get().updateAudioPlayback(
            status.isPlaying || false,
            status.positionMillis || 0,
            status.durationMillis || 0
          );
        }
      });
    }

    set({
      location: {
        ...get().location,
        isTracking: true,
        error: null,
      },
      progress: progress
        ? {
            ...progress,
            isActive: true,
            lastUpdated: new Date(),
          }
        : null,
    });

    return true;
  },

  // Stop the tour
  stopTour: async () => {
    await locationService.stopTracking();
    await audioService.pause();

    set({
      location: {
        ...get().location,
        isTracking: false,
      },
      progress: get().progress
        ? {
            ...get().progress!,
            isActive: false,
            lastUpdated: new Date(),
          }
        : null,
    });
  },

  // Go to a specific stop
  goToStop: async (stopId: string) => {
    const { currentTour, progress } = get();

    if (!currentTour) {
      return;
    }

    const stop = currentTour.stops.find((s) => s.id === stopId);

    if (!stop) {
      return;
    }

    // Pause current audio
    await audioService.pause();

    // Load new audio
    const loaded = await audioService.loadAudio(stop);

    set({
      currentStop: stop,
      audio: {
        ...get().audio,
        isLoaded: loaded,
        currentStopId: stop.id,
        currentPosition: 0,
        duration: 0,
        isPlaying: false,
      },
      progress: progress
        ? {
            ...progress,
            currentStopId: stop.id,
            currentAudioPosition: 0,
            lastUpdated: new Date(),
          }
        : null,
    });

    // Auto-play when arriving at stop
    if (loaded) {
      await get().playAudio();
    }
  },

  // Update location
  updateLocation: (location: Coordinates) => {
    set({
      location: {
        ...get().location,
        currentLocation: location,
        isEnabled: true,
      },
    });
  },

  // Update audio playback state
  updateAudioPlayback: (isPlaying: boolean, position: number, duration: number) => {
    const { progress } = get();

    set({
      audio: {
        ...get().audio,
        isPlaying,
        currentPosition: position,
        duration,
      },
      progress: progress
        ? {
            ...progress,
            currentAudioPosition: position / 1000, // Convert to seconds
            lastUpdated: new Date(),
          }
        : null,
    });
  },

  // Mark stop as completed
  markStopCompleted: (stopId: string) => {
    const { progress, currentTour } = get();

    if (!progress || !currentTour) {
      return;
    }

    const alreadyCompleted = progress.completedStops.includes(stopId);

    if (alreadyCompleted) {
      return;
    }

    const updatedCompletedStops = [...progress.completedStops, stopId];

    // Check if this was the last stop
    const allCompleted = updatedCompletedStops.length === currentTour.stops.length;

    set({
      progress: {
        ...progress,
        completedStops: updatedCompletedStops,
        lastUpdated: new Date(),
      },
    });

    // If all stops completed, we could show a completion screen
    if (allCompleted) {
      // TODO: Show completion celebration
      console.log('Tour completed!');
    }
  },

  // Play audio
  playAudio: async () => {
    const success = await audioService.play();

    if (!success) {
      set({
        audio: {
          ...get().audio,
          error: 'Failed to play audio',
        },
      });
    }
  },

  // Pause audio
  pauseAudio: async () => {
    await audioService.pause();
  },

  // Seek audio
  seekAudio: async (positionMillis: number) => {
    await audioService.seekTo(positionMillis);
  },
}));
