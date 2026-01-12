# East Lakeview Stories

A location-based audio walking tour app for iPhone, rebuilt in the spirit of the original Detour app (2015-2018). This app guides users through East Lakeview Chicago, centered around Nettelhorst School, with immersive audio stories about the neighborhood's history, culture, and transformation.

## Central Theme

**"The Laboratory of Becoming: How One Chicago Neighborhood Tested America's Future"**

East Lakeview has been a testing ground for:
- Suburban agricultural innovation (1870s-1880s)  
- Urban annexation experiments (1889)  
- Fire-safe architecture (post-1871)  
- Immigrant integration (German, Swedish 1890s-1920s)  
- Sports urbanism (Wrigley Field, 1914)  
- LGBTQ civil rights (1970s-2020s)  
- Urban education transformation (Nettelhorst, 2001-present)

## Tour Features

- **8 Tour Stops** covering 2.5 miles, approximately 90-120 minutes
- **GPS-triggered audio** that automatically plays as you reach each location
- **Historical images** for each stop (30-40 images total)
- **Full transcripts** for accessibility
- **Turn-by-turn navigation** between stops
- **Progress tracking** to save your place

## Tour Stops

1. **Nettelhorst School** - Urban education transformation (10 min)
2. **Broadway & Melrose** - Glacial geology and deep time (7 min)
3. **Northalsted/Boystown** - LGBTQ rights and political power (15 min)
4. **Wrigley Field** - Sports and urban identity (10 min)
5. **Greystone District** - Fire-safe architecture (12 min)
6. **German Community** - Immigration and cultural integration (12 min)
7. **Lakefront** - The 1889 annexation (12 min)
8. **Return to Nettelhorst** - Synthesis and reflection (10 min)

## Technical Stack

- **Platform**: iOS (React Native/Expo)
- **Language**: TypeScript
- **Location**: Expo Location API (GPS + geofencing)
- **Audio**: Expo AV (background audio support)
- **State Management**: Zustand
- **Navigation**: React Navigation
- **Maps**: React Native Maps

## Project Structure

```
detour/
├── src/
│   ├── data/
│   │   └── eastLakeviewTour.ts      # Complete tour data with all 8 stops
│   ├── screens/
│   │   ├── WelcomeScreen.tsx        # Tour overview and start
│   │   └── ActiveTourScreen.tsx     # Main tour experience
│   ├── services/
│   │   ├── locationService.ts       # GPS tracking and geofencing
│   │   └── audioService.ts          # Audio playback
│   ├── stores/
│   │   └── tourStore.ts             # Global state management
│   └── types/
│       └── tour.ts                  # TypeScript type definitions
├── App.tsx                           # Main app component
├── package.json
├── tsconfig.json
└── PROJECT_PLAN.md                   # Detailed implementation plan
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Xcode) or physical iPhone
- Apple Developer account ($99/year for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd detour
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

## Development Status

### ✅ Completed (Phase 1)

- [x] Project architecture and technology stack
- [x] TypeScript type definitions
- [x] Complete tour data structure with all 8 stops and full narration scripts
- [x] Location tracking service with GPS and geofencing
- [x] Audio playback service with background support
- [x] Global state management with Zustand
- [x] Welcome/Tour Overview screen
- [x] Active Tour screen with audio player and navigation
- [x] React Navigation setup

### 🚧 In Progress (Phase 2)

- [ ] Map view screen with tour route
- [ ] Stop detail screen with image gallery
- [ ] Historical image assets (gathering and licensing)
- [ ] Audio narration recording/production
- [ ] UI/UX polish and animations
- [ ] Field testing for location accuracy

### 📋 Planned (Phase 3)

- [ ] Group sync feature (Bluetooth LE)
- [ ] Offline mode with pre-downloaded content
- [ ] Historical image AR overlays
- [ ] Analytics and completion tracking
- [ ] App Store submission

## Required Assets

### Audio Files (to be created)

- 8 audio narration files (5-12 minutes each, ~80 minutes total)
- Format: MP3, 128kbps mono
- Total size: ~60-80 MB

### Historical Images (to be gathered)

- 30-40 historical images from:
  - Chicago History Museum
  - Newberry Library
  - University of Chicago Library
  - Public domain sources
- Format: JPEG, optimized for mobile
- Rights clearance required for each image

## Permissions Required

The app requires the following iOS permissions:

- **Location (Always/When In Use)**: For GPS-based tour navigation
- **Background Location**: For continuous tracking during tour
- **Audio**: For audio playback in background
- **Bluetooth** (Phase 3): For group sync feature

## Research Sources

All historical research compiled from:

- [Nettelhorst School Turnaround](https://www.chicagomag.com/Chicago-Magazine/January-2011/Nettelhorst-Elementary-Schools-Remarkable-Turnaround/)
- [Making Chicago's Boystown](https://interactive.wbez.org/curiouscity/makingboystown/)
- [Lake View Township Annexation](https://en.wikipedia.org/wiki/Lake_View,_Chicago)
- [Chicago Greystones History](https://moss-design.com/greystone/)
- [Great Chicago Fire](https://www.architecture.org/online-resources/architecture-encyclopedia/the-great-chicago-fire-of-1871)
- [Wrigley Field History](https://www.mlb.com/cubs/ballpark/information/history)

## Contributing

This is a personal project, but suggestions and contributions are welcome!

## License

MIT License - see LICENSE file for details

## About the Original Detour App

Detour was a groundbreaking location-based audio tour app created by Groupon founder Andrew Mason (2015-2018). It used GPS and iBeacon technology to deliver podcast-quality audio tours that adapted to your exact location. The app was acquired by Bose in 2018 and unfortunately discontinued. This project is an homage to that innovative app, rebuilt for a specific neighborhood with deep local stories.

## Contact

Casey Hudetz
[Your contact information]

---

**Status**: Active Development  
**Last Updated**: January 12, 2026  
**Version**: 1.0.0-alpha
