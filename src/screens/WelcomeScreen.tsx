/**
 * Welcome/Tour Overview Screen
 * Shows tour details and starts the experience
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/tour';
import { useTourStore } from '../stores/tourStore';
import { EAST_LAKEVIEW_TOUR } from '../data/eastLakeviewTour';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { initializeTour, startTour } = useTourStore();

  const handleStartTour = async () => {
    // Initialize tour
    initializeTour(EAST_LAKEVIEW_TOUR.id);

    // Start tracking and audio
    const started = await startTour();

    if (started) {
      navigation.navigate('ActiveTour', { tourId: EAST_LAKEVIEW_TOUR.id });
    } else {
      // Show error - location permissions denied
      alert('Location permissions are required to start the tour. Please enable location services in your device settings.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../../assets/images/cover-nettelhorst.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>{EAST_LAKEVIEW_TOUR.title}</Text>
            <Text style={styles.heroSubtitle}>{EAST_LAKEVIEW_TOUR.subtitle}</Text>
          </View>
        </View>

        {/* Tour Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.themeTitle}>Central Theme</Text>
          <Text style={styles.themeText}>{EAST_LAKEVIEW_TOUR.centralTheme}</Text>

          <Text style={styles.descriptionTitle}>About This Tour</Text>
          <Text style={styles.description}>{EAST_LAKEVIEW_TOUR.description}</Text>

          {/* Tour Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{EAST_LAKEVIEW_TOUR.stops.length}</Text>
              <Text style={styles.statLabel}>Stops</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{EAST_LAKEVIEW_TOUR.totalDistance} mi</Text>
              <Text style={styles.statLabel}>Distance</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>~{EAST_LAKEVIEW_TOUR.estimatedDuration} min</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
          </View>

          {/* Tour Stops Preview */}
          <Text style={styles.stopsTitle}>Tour Highlights</Text>
          {EAST_LAKEVIEW_TOUR.stops.map((stop, index) => (
            <View key={stop.id} style={styles.stopPreview}>
              <Text style={styles.stopNumber}>{index + 1}</Text>
              <View style={styles.stopInfo}>
                <Text style={styles.stopTitle}>{stop.title}</Text>
                <Text style={styles.stopDescription}>{stop.shortDescription}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStartTour}>
          <Text style={styles.startButtonText}>Begin Your Journey</Text>
        </TouchableOpacity>

        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This tour requires location services and will guide you through East Lakeview Chicago.
          </Text>
          <Text style={styles.footerText}>
            Best experienced with headphones.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
  },
  infoContainer: {
    padding: 20,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  themeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    lineHeight: 28,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 24,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  stopsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  stopPreview: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stopNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2196F3',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: 'bold',
    marginRight: 12,
  },
  stopInfo: {
    flex: 1,
  },
  stopTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  stopDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 8,
  },
});
