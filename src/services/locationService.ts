/**
 * Location tracking service using Expo Location API
 * Handles GPS tracking, geofencing, and location permissions
 */

import * as Location from 'expo-location';
import { Coordinates, TourStop } from '../types/tour';

export class LocationService {
  private watchSubscription: Location.LocationSubscription | null = null;
  private currentLocation: Coordinates | null = null;
  private onLocationUpdate: ((location: Coordinates) => void) | null = null;
  private onStopEntered: ((stopId: string) => void) | null = null;
  private activeGeofences: Map<string, TourStop> = new Map();

  /**
   * Request location permissions from the user
   */
  async requestPermissions(): Promise<boolean> {
    try {
      const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();

      if (foregroundStatus !== 'granted') {
        return false;
      }

      // Also request background permissions for continuous tracking
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();

      return foregroundStatus === 'granted';
    } catch (error) {
      console.error('Error requesting location permissions:', error);
      return false;
    }
  }

  /**
   * Check if location permissions are granted
   */
  async checkPermissions(): Promise<boolean> {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error checking location permissions:', error);
      return false;
    }
  }

  /**
   * Start tracking user location
   */
  async startTracking(
    onUpdate: (location: Coordinates) => void,
    onStopEntered?: (stopId: string) => void
  ): Promise<boolean> {
    try {
      const hasPermission = await this.checkPermissions();
      if (!hasPermission) {
        const granted = await this.requestPermissions();
        if (!granted) {
          return false;
        }
      }

      this.onLocationUpdate = onUpdate;
      this.onStopEntered = onStopEntered || null;

      // Start watching location with high accuracy
      this.watchSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 5000, // Update every 5 seconds
          distanceInterval: 10, // Or when moved 10 meters
        },
        (location) => {
          this.handleLocationUpdate(location);
        }
      );

      return true;
    } catch (error) {
      console.error('Error starting location tracking:', error);
      return false;
    }
  }

  /**
   * Stop tracking user location
   */
  async stopTracking(): Promise<void> {
    if (this.watchSubscription) {
      this.watchSubscription.remove();
      this.watchSubscription = null;
    }
    this.currentLocation = null;
    this.onLocationUpdate = null;
    this.onStopEntered = null;
  }

  /**
   * Get the current user location once
   */
  async getCurrentLocation(): Promise<Coordinates | null> {
    try {
      const hasPermission = await this.checkPermissions();
      if (!hasPermission) {
        return null;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting current location:', error);
      return null;
    }
  }

  /**
   * Set up geofences for tour stops
   */
  setupGeofences(stops: TourStop[]): void {
    this.activeGeofences.clear();
    stops.forEach((stop) => {
      this.activeGeofences.set(stop.id, stop);
    });
  }

  /**
   * Clear all geofences
   */
  clearGeofences(): void {
    this.activeGeofences.clear();
  }

  /**
   * Calculate distance between two coordinates in meters
   * Using Haversine formula
   */
  private calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
    const R = 6371e3; // Earth's radius in meters
    const phi1 = (coord1.latitude * Math.PI) / 180;
    const phi2 = (coord2.latitude * Math.PI) / 180;
    const deltaPhi = ((coord2.latitude - coord1.latitude) * Math.PI) / 180;
    const deltaLambda = ((coord2.longitude - coord1.longitude) * Math.PI) / 180;

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  /**
   * Check if a location is within a geofence
   */
  private isInGeofence(location: Coordinates, stop: TourStop): boolean {
    const distance = this.calculateDistance(location, stop.coordinates);
    return distance <= stop.geofenceRadius;
  }

  /**
   * Handle location updates from the watch subscription
   */
  private handleLocationUpdate(location: Location.LocationObject): void {
    const coords: Coordinates = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    this.currentLocation = coords;

    // Notify listeners of location update
    if (this.onLocationUpdate) {
      this.onLocationUpdate(coords);
    }

    // Check geofences
    this.checkGeofences(coords);
  }

  /**
   * Check if current location has entered any geofences
   */
  private checkGeofences(location: Coordinates): void {
    if (!this.onStopEntered) {
      return;
    }

    for (const [stopId, stop] of this.activeGeofences) {
      if (this.isInGeofence(location, stop)) {
        this.onStopEntered(stopId);
      }
    }
  }

  /**
   * Get distance to a specific stop in meters
   */
  getDistanceToStop(stop: TourStop): number | null {
    if (!this.currentLocation) {
      return null;
    }
    return this.calculateDistance(this.currentLocation, stop.coordinates);
  }

  /**
   * Get the nearest stop from current location
   */
  getNearestStop(stops: TourStop[]): TourStop | null {
    if (!this.currentLocation) {
      return null;
    }

    let nearestStop: TourStop | null = null;
    let minDistance = Infinity;

    stops.forEach((stop) => {
      const distance = this.calculateDistance(this.currentLocation!, stop.coordinates);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStop = stop;
      }
    });

    return nearestStop;
  }

  /**
   * Format distance for display
   */
  formatDistance(meters: number): string {
    if (meters < 1000) {
      return `${Math.round(meters)}m`;
    }
    const miles = meters / 1609.34;
    return `${miles.toFixed(1)} mi`;
  }
}

// Export singleton instance
export const locationService = new LocationService();
