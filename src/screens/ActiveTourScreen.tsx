/**
 * Active Tour Screen
 * Main screen during the tour - shows current stop, audio player, and navigation
 */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/tour';
import { useTourStore } from '../stores/tourStore';
import { audioService } from '../services/audioService';
import { locationService } from '../services/locationService';

type Props = NativeStackScreenProps<RootStackParamList, 'ActiveTour'>;

export const ActiveTourScreen: React.FC<Props> = ({ navigation, route }) => {
  const {
    currentStop,
    currentTour,
    audio,
    location,
    progress,
    playAudio,
    pauseAudio,
    seekAudio,
    markStopCompleted,
    goToStop,
  } = useTourStore();

  useEffect(() => {
    // Mark stop as completed when audio finishes
    if (audio.currentPosition > 0 && audio.duration > 0) {
      const percentComplete = (audio.currentPosition / audio.duration) * 100;
      if (percentComplete > 90 && currentStop) {
        markStopCompleted(currentStop.id);
      }
    }
  }, [audio.currentPosition, audio.duration, currentStop, markStopCompleted]);

  const handlePlayPause = () => {
    if (audio.isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleNext = () => {
    if (!currentTour || !currentStop) return;

    const currentIndex = currentTour.stops.findIndex((s) => s.id === currentStop.id);
    if (currentIndex < currentTour.stops.length - 1) {
      goToStop(currentTour.stops[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (!currentTour || !currentStop) return;

    const currentIndex = currentTour.stops.findIndex((s) => s.id === currentStop.id);
    if (currentIndex > 0) {
      goToStop(currentTour.stops[currentIndex - 1].id);
    }
  };

  const formatTime = (millis: number): string => {
    return audioService.formatTime(millis);
  };

  const getDistanceToStop = (): string => {
    if (!currentStop) return '';
    const distance = locationService.getDistanceToStop(currentStop);
    if (distance === null) return '';
    return locationService.formatDistance(distance);
  };

  const getCurrentStopNumber = (): number => {
    if (!currentTour || !currentStop) return 1;
    return currentTour.stops.findIndex((s) => s.id === currentStop.id) + 1;
  };

  const getProgressPercent = (): number => {
    if (!progress || !currentTour) return 0;
    return (progress.completedStops.length / currentTour.stops.length) * 100;
  };

  if (!currentStop || !currentTour) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading tour...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Stop {getCurrentStopNumber()} of {currentTour.stops.length}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map', { tourId: currentTour.id })}>
          <Text style={styles.headerButton}>🗺️</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${getProgressPercent()}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {progress?.completedStops.length || 0} of {currentTour.stops.length} stops completed
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Current Stop Info */}
        <View style={styles.stopContainer}>
          <Text style={styles.stopTheme}>{currentStop.theme.toUpperCase()}</Text>
          <Text style={styles.stopTitle}>{currentStop.title}</Text>
          <Text style={styles.stopDescription}>{currentStop.shortDescription}</Text>

          {/* Distance indicator */}
          {location.currentLocation && (
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceIcon}>📍</Text>
              <Text style={styles.distanceText}>{getDistanceToStop()} away</Text>
            </View>
          )}
        </View>

        {/* Audio Player */}
        <View style={styles.playerContainer}>
          {/* Time Display */}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(audio.currentPosition)}</Text>
            <Text style={styles.timeText}>{formatTime(audio.duration)}</Text>
          </View>

          {/* Progress Slider - simplified visual */}
          <View style={styles.audioProgressContainer}>
            <View style={styles.audioProgressBar}>
              <View
                style={[
                  styles.audioProgressFill,
                  {
                    width: audio.duration > 0
                      ? `${(audio.currentPosition / audio.duration) * 100}%`
                      : '0%',
                  },
                ]}
              />
            </View>
          </View>

          {/* Playback Controls */}
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={handlePrevious}
              disabled={getCurrentStopNumber() === 1}
            >
              <Text style={styles.controlIcon}>⏮️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.playButton, !audio.isLoaded && styles.playButtonDisabled]}
              onPress={handlePlayPause}
              disabled={!audio.isLoaded}
            >
              <Text style={styles.playIcon}>{audio.isPlaying ? '⏸️' : '▶️'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={handleNext}
              disabled={getCurrentStopNumber() === currentTour.stops.length}
            >
              <Text style={styles.controlIcon}>⏭️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transcript */}
        <View style={styles.transcriptContainer}>
          <Text style={styles.transcriptTitle}>Transcript</Text>
          <Text style={styles.transcriptText}>{currentStop.transcript}</Text>
        </View>

        {/* Navigation Instructions */}
        {currentStop.navigationInstructions && (
          <View style={styles.navigationContainer}>
            <Text style={styles.navigationTitle}>Next Stop</Text>
            <Text style={styles.navigationText}>{currentStop.navigationInstructions}</Text>
          </View>
        )}

        {/* View Images Button */}
        <TouchableOpacity
          style={styles.imagesButton}
          onPress={() =>
            navigation.navigate('StopDetail', {
              tourId: currentTour.id,
              stopId: currentStop.id,
            })
          }
        >
          <Text style={styles.imagesButtonText}>
            View Historical Images ({currentStop.images.length})
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerButton: {
    fontSize: 24,
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  progressContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  stopContainer: {
    padding: 20,
  },
  stopTheme: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 8,
    letterSpacing: 1,
  },
  stopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  stopDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  distanceText: {
    fontSize: 14,
    color: '#666',
  },
  playerContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  timeText: {
    fontSize: 14,
    color: '#666',
  },
  audioProgressContainer: {
    marginBottom: 24,
  },
  audioProgressBar: {
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    overflow: 'hidden',
  },
  audioProgressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  controlButton: {
    padding: 12,
  },
  controlIcon: {
    fontSize: 28,
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playButtonDisabled: {
    backgroundColor: '#ccc',
  },
  playIcon: {
    fontSize: 32,
  },
  transcriptContainer: {
    padding: 20,
  },
  transcriptTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  transcriptText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  navigationContainer: {
    padding: 20,
    backgroundColor: '#E3F2FD',
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  navigationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  navigationText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  imagesButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  imagesButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
