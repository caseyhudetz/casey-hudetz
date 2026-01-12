/**
 * Audio playback service using Expo AV
 * Handles loading, playing, pausing, and seeking audio files
 */

import { Audio, AVPlaybackStatus } from 'expo-av';
import { TourStop } from '../types/tour';

export class AudioService {
  private sound: Audio.Sound | null = null;
  private currentStopId: string | null = null;
  private isLoaded: boolean = false;
  private onPlaybackStatusUpdate: ((status: AVPlaybackStatus) => void) | null = null;

  constructor() {
    this.initializeAudio();
  }

  /**
   * Initialize audio mode for playback
   */
  private async initializeAudio(): Promise<void> {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  }

  /**
   * Load audio for a tour stop
   */
  async loadAudio(stop: TourStop): Promise<boolean> {
    try {
      // Unload previous audio if any
      await this.unloadAudio();

      // Create and load new sound
      const { sound } = await Audio.Sound.createAsync(
        { uri: stop.audioFile },
        { shouldPlay: false },
        this.handlePlaybackStatusUpdate.bind(this)
      );

      this.sound = sound;
      this.currentStopId = stop.id;
      this.isLoaded = true;

      return true;
    } catch (error) {
      console.error('Error loading audio:', error);
      this.isLoaded = false;
      return false;
    }
  }

  /**
   * Unload current audio
   */
  async unloadAudio(): Promise<void> {
    if (this.sound) {
      try {
        await this.sound.unloadAsync();
      } catch (error) {
        console.error('Error unloading audio:', error);
      }
      this.sound = null;
      this.currentStopId = null;
      this.isLoaded = false;
    }
  }

  /**
   * Play audio
   */
  async play(): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.playAsync();
      return true;
    } catch (error) {
      console.error('Error playing audio:', error);
      return false;
    }
  }

  /**
   * Pause audio
   */
  async pause(): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.pauseAsync();
      return true;
    } catch (error) {
      console.error('Error pausing audio:', error);
      return false;
    }
  }

  /**
   * Stop audio and reset to beginning
   */
  async stop(): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.stopAsync();
      await this.sound.setPositionAsync(0);
      return true;
    } catch (error) {
      console.error('Error stopping audio:', error);
      return false;
    }
  }

  /**
   * Seek to a specific position in milliseconds
   */
  async seekTo(positionMillis: number): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.setPositionAsync(positionMillis);
      return true;
    } catch (error) {
      console.error('Error seeking audio:', error);
      return false;
    }
  }

  /**
   * Get current playback status
   */
  async getStatus(): Promise<AVPlaybackStatus | null> {
    if (!this.sound || !this.isLoaded) {
      return null;
    }

    try {
      return await this.sound.getStatusAsync();
    } catch (error) {
      console.error('Error getting playback status:', error);
      return null;
    }
  }

  /**
   * Set playback rate (1.0 is normal speed)
   */
  async setPlaybackRate(rate: number): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.setRateAsync(rate, true);
      return true;
    } catch (error) {
      console.error('Error setting playback rate:', error);
      return false;
    }
  }

  /**
   * Set volume (0.0 to 1.0)
   */
  async setVolume(volume: number): Promise<boolean> {
    if (!this.sound || !this.isLoaded) {
      return false;
    }

    try {
      await this.sound.setVolumeAsync(volume);
      return true;
    } catch (error) {
      console.error('Error setting volume:', error);
      return false;
    }
  }

  /**
   * Register callback for playback status updates
   */
  setOnPlaybackStatusUpdate(callback: (status: AVPlaybackStatus) => void): void {
    this.onPlaybackStatusUpdate = callback;
  }

  /**
   * Handle playback status updates
   */
  private handlePlaybackStatusUpdate(status: AVPlaybackStatus): void {
    if (this.onPlaybackStatusUpdate) {
      this.onPlaybackStatusUpdate(status);
    }
  }

  /**
   * Format time in milliseconds to MM:SS format
   */
  formatTime(millis: number): string {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Get current stop ID
   */
  getCurrentStopId(): string | null {
    return this.currentStopId;
  }

  /**
   * Check if audio is loaded
   */
  getIsLoaded(): boolean {
    return this.isLoaded;
  }

  /**
   * Clean up resources
   */
  async cleanup(): Promise<void> {
    await this.unloadAudio();
  }
}

// Export singleton instance
export const audioService = new AudioService();
