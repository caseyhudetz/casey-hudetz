/**
 * Core type definitions for the East Lakeview Stories tour app
 */

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface TourStop {
  id: string;
  title: string;
  shortDescription: string;
  coordinates: Coordinates;
  /**
   * Geofence radius in meters
   */
  geofenceRadius: number;
  /**
   * Expected duration in minutes
   */
  estimatedDuration: number;
  /**
   * Audio file path (local or remote)
   */
  audioFile: string;
  /**
   * Full transcript of audio narration
   */
  transcript: string;
  /**
   * Historical images for this stop
   */
  images: TourImage[];
  /**
   * Navigation instructions to next stop
   */
  navigationInstructions?: string;
  /**
   * Theme category
   */
  theme: TourTheme;
  /**
   * Order in the tour sequence
   */
  order: number;
}

export interface TourImage {
  id: string;
  url: string;
  caption: string;
  credit: string;
  year?: string;
  /**
   * Whether this is a historical or contemporary image
   */
  type: 'historical' | 'contemporary';
}

export enum TourTheme {
  Education = 'education',
  Geology = 'geology',
  LGBTQ = 'lgbtq',
  Sports = 'sports',
  Architecture = 'architecture',
  Immigration = 'immigration',
  Politics = 'politics',
  Synthesis = 'synthesis',
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /**
   * Total distance in miles
   */
  totalDistance: number;
  /**
   * Estimated total duration in minutes
   */
  estimatedDuration: number;
  stops: TourStop[];
  /**
   * Cover image for tour
   */
  coverImage: string;
  /**
   * Central theme description
   */
  centralTheme: string;
}

export interface UserProgress {
  tourId: string;
  /**
   * IDs of completed stops
   */
  completedStops: string[];
  /**
   * Current active stop ID
   */
  currentStopId: string | null;
  /**
   * Audio playback position in seconds for current stop
   */
  currentAudioPosition: number;
  /**
   * Whether the tour is currently active
   */
  isActive: boolean;
  /**
   * Timestamp of last activity
   */
  lastUpdated: Date;
  /**
   * Total time spent on tour in seconds
   */
  totalTimeSpent: number;
}

export interface LocationState {
  /**
   * Current user coordinates
   */
  currentLocation: Coordinates | null;
  /**
   * Location accuracy in meters
   */
  accuracy: number | null;
  /**
   * Whether location services are enabled
   */
  isEnabled: boolean;
  /**
   * Whether we're currently tracking location
   */
  isTracking: boolean;
  /**
   * Error message if any
   */
  error: string | null;
}

export interface AudioState {
  /**
   * Whether audio is currently playing
   */
  isPlaying: boolean;
  /**
   * Current playback position in seconds
   */
  currentPosition: number;
  /**
   * Total duration in seconds
   */
  duration: number;
  /**
   * Whether audio is loaded and ready
   */
  isLoaded: boolean;
  /**
   * Current stop ID being played
   */
  currentStopId: string | null;
  /**
   * Error message if any
   */
  error: string | null;
}

export interface AppPermissions {
  location: 'granted' | 'denied' | 'not-requested';
  bluetooth: 'granted' | 'denied' | 'not-requested';
  notifications: 'granted' | 'denied' | 'not-requested';
}

/**
 * Navigation types for React Navigation
 */
export type RootStackParamList = {
  Welcome: undefined;
  TourOverview: { tourId: string };
  ActiveTour: { tourId: string };
  StopDetail: { tourId: string; stopId: string };
  Map: { tourId: string };
  Settings: undefined;
};
