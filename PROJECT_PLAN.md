# East Lakeview Detour: Project Plan

## Project Overview
**Name**: East Lakeview Stories
**Tagline**: "The Laboratory of Becoming: A Walking Tour of Chicago's Experimental Neighborhood"

**Purpose**: A location-based audio walking tour app for iPhone that guides users through East Lakeview Chicago, centered around Nettelhorst School, telling interconnected stories of geology, immigration, architecture, LGBTQ history, education, and urban transformation.

---

## Central Theme
**"The Laboratory of Becoming: How One Chicago Neighborhood Tested America's Future"**

This neighborhood has been a testing ground for:
- Suburban agricultural innovation (1870s-1880s)
- Urban annexation experiments (1889)
- Fire-safe architecture (post-1871)
- Immigrant integration (German, Swedish 1890s-1920s)
- Sports urbanism (Wrigley Field, 1914)
- LGBTQ civil rights (1970s-2020s)
- Urban education transformation (Nettelhorst, 2001-present)

---

## Technical Architecture

### Technology Stack
- **Platform**: iOS (React Native for cross-platform potential)
- **Language**: TypeScript for type safety
- **Location Services**:
  - Core Location API (GPS)
  - Geofencing for tour stops
  - Background location tracking
- **Audio**:
  - React Native Sound or Expo AV
  - Background audio support
- **State Management**: Redux or Zustand
- **Mapping**: MapKit or React Native Maps
- **Storage**: AsyncStorage + local JSON files
- **Future**: Bluetooth LE for group sync

### Core Features (MVP)

1. **Location-Aware Audio Playback**
   - GPS tracking with accuracy threshold
   - Geofenced tour stops (50-100m radius)
   - Automatic audio triggering on entry
   - Manual play/pause controls
   - Background audio support

2. **Tour Navigation**
   - Interactive map showing route
   - Current location indicator
   - Next stop highlighting
   - Progress tracking (stops completed)
   - Turn-by-turn directions

3. **Content System**
   - 8 tour stops with audio narration
   - Historical images for each location
   - Text transcripts for accessibility
   - Stop metadata (coordinates, radius, duration)

4. **User Interface**
   - Now Playing screen (current stop audio)
   - Map view with tour route
   - Stop detail views with images
   - Tour overview and introduction
   - Settings and permissions

### Future Features (Phase 2)
- Group sync via Bluetooth LE
- AR historical image overlays using device camera
- Offline mode with pre-downloaded content
- Multiple tour options
- User-generated tour content
- Analytics and completion tracking

---

## Tour Route Design

### Tour Statistics
- **Distance**: ~2.5 miles
- **Duration**: 90-120 minutes
- **Stops**: 8 main locations
- **Walking pace**: Leisurely with time for reflection
- **Accessibility**: Sidewalk-based, ADA-compliant route

### Tour Stops

#### Stop 1: Nettelhorst School (3252 N Broadway)
**Coordinates**: 41.9417° N, 87.6448° W
**Duration**: 8-10 minutes
**Theme**: Urban Education Transformation

**Story**: "The School That Saved Itself"
- 1892: Opening as one of Chicago's finest schools
- Named after Louis Nettelhorst Sr., German immigrant board president
- 1950s-2000: Decline and near-closure
- 2001: Parent revolution led by 7 mothers
- Today: Model for community-driven school improvement

**Historical Images**:
- Original 1892 school building
- Louis Nettelhorst Sr. portrait
- 2001 parent organizers
- Before/after playground photos

**Script Hook**: "You're standing in front of a building that almost didn't make it. In 2001, this beautiful red brick school built in 1892 had exactly zero children from the surrounding neighborhood attending..."

---

#### Stop 2: Broadway & Melrose Parkway
**Coordinates**: 41.9420° N, 87.6445° W
**Duration**: 5-7 minutes
**Theme**: Deep Time & Geology

**Story**: "Under the Glacier's Thumb"
- 14,000 years ago: Glacial Lake Chicago
- Sandy soil composition and what it meant for building
- Why this site was chosen for development
- Connection to Lake Michigan visible from here

**Historical Images**:
- Glacial period maps
- Lake Chicago extent illustrations
- Early surveys showing water/land boundaries

**Script Hook**: "Before there were schools, before there were immigrants, before there was Chicago, there was water. You're standing on what was once the bottom of a glacial lake..."

---

#### Stop 3: Halsted Street (Northalsted/Boystown)
**Coordinates**: 41.9430° N, 87.6490° W
**Duration**: 12-15 minutes
**Theme**: LGBTQ Rights & Political Power

**Story**: "From New Town to Boystown to Northalsted"
- 1961: Illinois first state to repeal sodomy law
- 1970: First Chicago Pride parade
- Pioneer bars: Little Jim's, Buck's Saloon, Sidetrack
- 1997: Official recognition as gay village by Mayor Daley
- Political organizing and economic power
- 2020: Name change to Northalsted (racial justice reckoning)

**Historical Images**:
- 1970s pride parade photos
- Historic bar facades
- Political organizing moments
- Rainbow pillar installation

**Script Hook**: "In 1997, Chicago became the first major American city to officially recognize a neighborhood as gay. But that recognition came after decades of struggle, organizing, and community building..."

---

#### Stop 4: Wrigley Field (Addison & Clark)
**Coordinates**: 41.9484° N, 87.6553° W
**Duration**: 8-10 minutes
**Theme**: Sports & Urban Identity

**Story**: "The Seminary Becomes a Stadium"
- Pre-1914: Chicago Lutheran Theological Seminary site
- 1914: Opening as Weeghman Park (Federal League)
- 1916: Cubs arrival
- Neighborhood transformation into "Wrigleyville"
- Sports as community anchor

**Historical Images**:
- Lutheran Seminary building
- 1914 Weeghman Park opening
- Early Cubs games
- Aerial views showing neighborhood growth

**Script Hook**: "In 1914, theologians studying for the ministry were replaced by baseball players chasing fly balls. This single change transformed everything around you..."

---

#### Stop 5: Greystone District (W Oakdale Ave)
**Coordinates**: 41.9405° N, 87.6515° W
**Duration**: 10-12 minutes
**Theme**: Architecture & Fire Safety

**Story**: "Building After the Fire"
- 1871 Great Chicago Fire impact
- Limestone from Bloomington, Indiana
- Greystones vs workers cottages (class architecture)
- 30,000 greystones still standing
- Frame houses built outside city limits (wooden building ban)

**Historical Images**:
- Pre/post fire Chicago
- Greystone construction photos
- Workers cottages
- Limestone quarries

**Script Hook**: "These grey stone facades aren't just beautiful - they're a response to trauma. After Chicago burned in 1871, the city said: never again..."

---

#### Stop 6: German Community Landmarks
**Coordinates**: 41.9370° N, 87.6530° W
**Duration**: 10-12 minutes
**Theme**: Immigration & Cultural Integration

**Story**: "Little Germany in Lakeview"
- German and Swedish immigration waves
- St. Alphonsus parish (1882)
- Athenaeum Theatre (German folk opera)
- Monastery Hill Bindery
- Dinkel's Bakery (still operating)
- Language, culture, assimilation

**Historical Images**:
- St. Alphonsus church historical photos
- German shop signs
- Community celebrations
- Immigrant family portraits

**Script Hook**: "The German-speaking immigrants who built this neighborhood had a choice: become American or stay German. They chose both..."

---

#### Stop 7: Lakefront (Belmont Harbor area)
**Coordinates**: 41.9410° N, 87.6380° W
**Duration**: 10-12 minutes
**Theme**: Annexation & Political Transformation

**Story**: "The Annexation of 1889"
- Lake View Township growth: 2,000 to 45,000 (1870-1887)
- Annexation vote: 2,503 for, 1,999 against
- What was promised: police, fire, water, education
- What was lost: autonomy, lower density
- Chicago becomes "Second City"
- View of the lake that gave Lake View its name

**Historical Images**:
- Lake View Township maps
- Annexation newspapers
- Township government buildings
- Lakefront development over time

**Script Hook**: "On June 29, 1889, the people of Lake View Township voted to disappear. In one vote, they gave up their independence and became part of Chicago..."

---

#### Stop 8: Return to Nettelhorst School
**Coordinates**: 41.9417° N, 87.6448° W
**Duration**: 8-10 minutes
**Theme**: Synthesis & Ongoing Becoming

**Story**: "Who Gets to Become?"
- Bringing together all threads
- Who has had access to this "laboratory"?
- Who has been excluded?
- Current tensions: gentrification, diversity, inclusion
- The ongoing work of community building
- What experiments are happening now?

**Historical Images**:
- Modern neighborhood photos
- Diverse community events
- Current development

**Script Hook**: "We're back where we started, but you're not the same. You've walked through 14,000 years of history in 2 hours. Now the question is: what will you build?"

---

## Content Production Requirements

### Audio Narration (per stop)
- **Style**: First-person, conversational, podcast-quality
- **Length**: 5-12 minutes per stop (total ~80 minutes)
- **Narrator**: Local historian or community member with connection to the story
- **Format**: MP3, 128kbps, mono (smaller file size)
- **Tone**: Intimate, reflective, inviting questions

### Historical Images (per stop)
- **Quantity**: 3-6 images per stop (30-40 total)
- **Format**: JPEG, optimized for mobile
- **Sources**:
  - Chicago History Museum
  - Newberry Library
  - University of Chicago Library
  - Public domain sources
  - Contemporary photos for comparison

### Text Content
- Full transcripts for accessibility
- Stop descriptions (100-150 words)
- Navigation instructions between stops
- Fun facts and optional deep dives

---

## Development Phases

### Phase 1: MVP (Weeks 1-4)
- [ ] Set up React Native project with TypeScript
- [ ] Implement basic location tracking
- [ ] Build audio playback system
- [ ] Create tour data structure
- [ ] Design basic UI (map, now playing, stop list)
- [ ] Add first 2 tour stops with content
- [ ] Test location accuracy in field

### Phase 2: Complete Tour (Weeks 5-8)
- [ ] Add remaining 6 tour stops
- [ ] Write and record all narration
- [ ] Gather all historical images
- [ ] Implement image gallery for each stop
- [ ] Add turn-by-turn navigation
- [ ] Polish UI/UX
- [ ] Beta testing with local users

### Phase 3: Enhanced Features (Weeks 9-12)
- [ ] Group sync via Bluetooth
- [ ] Offline mode
- [ ] Historical image AR overlays
- [ ] Analytics and completion tracking
- [ ] Share/social features
- [ ] App Store submission

---

## Technical Specifications

### Location Accuracy Requirements
- **GPS accuracy threshold**: ≤20 meters
- **Geofence radius**: 50-100 meters per stop
- **Update frequency**: Every 5-10 seconds while touring
- **Background tracking**: Yes, with user permission
- **Battery optimization**: Significant location changes only when not touring

### Audio Requirements
- **Format**: MP3 or AAC
- **Bitrate**: 128kbps (good quality, reasonable size)
- **Background playback**: Yes
- **Auto-pause**: On phone call, other audio
- **Resume**: From last position
- **Scrubbing**: Allow user to replay sections

### Data Storage
- **Tour data**: Local JSON files
- **Audio files**: Bundled with app or downloadable
- **Images**: Bundled with app or cached
- **User progress**: AsyncStorage
- **Total app size**: Target <200MB with all content

### Permissions Required
- Location Services (Always or When In Use)
- Bluetooth (for group sync)
- Camera (for AR features, Phase 3)
- Microphone (for user notes, future feature)

---

## Success Metrics

### User Engagement
- Tour completion rate >60%
- Average stop duration within 80-120% of expected
- Return visitor rate >20%
- Shared tour rate >10%

### Technical Performance
- Location accuracy >90% within threshold
- Audio playback success rate >99%
- App crash rate <1%
- Battery drain <20% per tour

### Educational Impact
- User knowledge increase (pre/post survey)
- Community engagement at Nettelhorst
- Partnership with local schools/organizations

---

## Budget Considerations

### Development
- Solo developer: 12 weeks (can be compressed with focus)
- React Native experience helpful
- iOS deployment requires Apple Developer account ($99/year)

### Content Production
- Historical image licensing: $0-500 (many public domain)
- Audio narration: $0-2000 (can start with generated voice)
- Photo permissions: Mostly public domain
- Fact-checking/historical consultation: $500-1000

### Deployment
- Apple Developer: $99/year
- No backend servers needed (local content)
- Optional: Domain for marketing site ($15/year)

**Total estimated cost**: $600-3,600 for MVP

---

## Future Expansion Ideas

### More Tours
- Wicker Park/Bucktown: Immigration & gentrification
- Bronzeville: Great Migration & Black cultural renaissance
- Pilsen: Mexican-American community & murals
- Hyde Park: University & Obama connection

### Platform Expansion
- Android version
- Web preview version
- Shareable virtual tours

### Monetization
- Freemium: First tour free, others $4.99
- Local partnerships: Dinkel's Bakery discount code, etc.
- Educational licenses for schools
- Custom tour creation platform

---

## Next Steps

1. Set up development environment
2. Create React Native project structure
3. Implement core location tracking
4. Build audio playback system
5. Design UI mockups
6. Write first tour stop script
7. Gather initial historical images
8. Field test at Nettelhorst School

---

## Resources & Sources

All research compiled from:
- [Detour App Technical Details](https://techcrunch.com/2014/07/30/detour/)
- [Nettelhorst School History](https://www.chicagomag.com/Chicago-Magazine/January-2011/Nettelhorst-Elementary-Schools-Remarkable-Turnaround/)
- [Lakeview Architecture History](https://lakeviewcollection.com/history-architecture-lakeview-wrigleyville/)
- [Boystown/Northalsted History](https://interactive.wbez.org/curiouscity/makingboystown/)
- [Lake View Township Annexation](https://en.wikipedia.org/wiki/Lake_View,_Chicago)
- [Chicago Greystones](https://moss-design.com/greystone/)
- [Wrigley Field History](https://www.mlb.com/cubs/ballpark/information/history)

---

*Last Updated: January 11, 2026*
