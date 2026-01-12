/**
 * East Lakeview Stories Tour Data
 * "The Laboratory of Becoming: How One Chicago Neighborhood Tested America's Future"
 */

import { Tour, TourStop, TourTheme } from '../types/tour';

export const EAST_LAKEVIEW_TOUR: Tour = {
  id: 'east-lakeview-main',
  title: 'East Lakeview Stories',
  subtitle: 'The Laboratory of Becoming',
  description: 'Walk through 14,000 years of history in this neighborhood that has tested suburban living, immigrant integration, LGBTQ rights, urban education, and community transformation. Discover how one Chicago neighborhood has repeatedly experimented with what it means to build the future.',
  totalDistance: 2.5,
  estimatedDuration: 105,
  coverImage: 'assets/images/cover-nettelhorst.jpg',
  centralTheme: 'The Laboratory of Becoming: How One Chicago Neighborhood Tested America\'s Future',
  stops: [
    {
      id: 'stop-1-nettelhorst',
      title: 'Nettelhorst School: The School That Saved Itself',
      shortDescription: 'From 1892 elegance to near-closure to community revolution',
      coordinates: {
        latitude: 41.9417,
        longitude: -87.6448,
      },
      geofenceRadius: 75,
      estimatedDuration: 10,
      audioFile: 'assets/audio/stop-1-nettelhorst.mp3',
      transcript: `You're standing in front of a building that almost didn't make it. In 2001, this beautiful red brick school built in 1892 had exactly zero children from the surrounding neighborhood attending. Not one. Parents were sending their kids across the city or paying for private schools rather than walk them to this corner.

But let me take you back to the beginning. This school was named after Louis Nettelhorst Senior, a German immigrant who came to Chicago and worked his way up to head the Chicago Board of Education from 1888 to 1892. When this building opened, it was considered one of the finest schools in Chicago. The craftsmanship, the design, the ambition - it represented what education could be.

Fast forward to 2001. The school was failing. Test scores were low. The building was deteriorating. The neighborhood had changed, and the school hadn't changed with it. It was on the verge of closing.

Then something remarkable happened. Seven mothers - just seven - decided they weren't going to let their neighborhood school die. Led by a woman named Jacqueline Edelberg, they partnered with the principal Susan Kurland, and they started what some people now call "the Nettelhorst revolution."

They didn't wait for the city to fix things. They organized. They fundraised. They painted. They built a playground. They created programs. They showed up, day after day. And slowly, the neighborhood took notice. Parents started enrolling their kids. Test scores started rising. The school transformed from failing to thriving in less than a decade.

Today, Nettelhorst serves 650 to 700 students. It's both a neighborhood school and a magnet school. Families move to this area specifically for this school. The waiting list is long.

This is a story about what happens when a community refuses to accept decline. When people decide that they have the power to build the future they want to see. It's an experiment in community-driven transformation. And like many experiments in this neighborhood, it worked.

As you look at this building, think about the hands that built it in 1892. Think about the German immigrant who gave it his name. Think about those seven mothers in 2001 who refused to give up. Think about the children inside right now, learning, growing, becoming.

This is where our tour begins - with a building that represents both history and hope. Both the past and the future. Both what we inherit and what we choose to create.`,
      images: [
        {
          id: 'img-1-1',
          url: 'assets/images/nettelhorst-1892.jpg',
          caption: 'Nettelhorst School as it appeared when it opened in 1892, one of Chicago\'s finest school buildings',
          credit: 'Chicago History Museum',
          year: '1892',
          type: 'historical',
        },
        {
          id: 'img-1-2',
          url: 'assets/images/louis-nettelhorst.jpg',
          caption: 'Louis Nettelhorst Sr., German immigrant and Chicago Board of Education president (1888-1892)',
          credit: 'Public Domain',
          year: '1890',
          type: 'historical',
        },
        {
          id: 'img-1-3',
          url: 'assets/images/nettelhorst-mothers-2001.jpg',
          caption: 'The seven mothers who led the Nettelhorst revolution starting in 2001',
          credit: 'Chicago Magazine',
          year: '2001',
          type: 'historical',
        },
        {
          id: 'img-1-4',
          url: 'assets/images/nettelhorst-today.jpg',
          caption: 'Nettelhorst School today, a thriving neighborhood anchor serving 650-700 students',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Walk north on Broadway to the corner of Melrose. Stop at the small parkway on the corner.',
      theme: TourTheme.Education,
      order: 1,
    },
    {
      id: 'stop-2-geology',
      title: 'Under the Glacier\'s Thumb: Deep Time',
      shortDescription: '14,000 years ago, you were underwater',
      coordinates: {
        latitude: 41.9420,
        longitude: -87.6445,
      },
      geofenceRadius: 50,
      estimatedDuration: 7,
      audioFile: 'assets/audio/stop-2-geology.mp3',
      transcript: `Before there were schools, before there were immigrants, before there was Chicago, there was water. You're standing on what was once the bottom of a glacial lake.

Fourteen thousand years ago - I want you to really try to imagine this - you would have been standing underwater. Not just a little underwater. You'd be at the bottom of Glacial Lake Chicago, a massive body of water created by melting ice from the Wisconsin Glacier.

The glacier was enormous. Picture ice a mile thick covering everything from here to Canada. As it slowly retreated, it left behind this lake. The water level was about 60 feet higher than Lake Michigan is today. All of this - the school we just left, the streets around us, the homes - all of it would have been beneath the waves.

This explains so much about the neighborhood. The soil here is sandy, deposited by that ancient lake. That sandy soil meant this land drained well, which made it attractive for early agriculture in the 1870s. Celery farms thrived here. Yes, celery. East Lakeview was once famous for celery.

But the sandy soil also meant challenges for building. When they started constructing the neighborhood in the 1880s and 1890s, they had to account for the composition of the ground. The foundations had to be carefully planned.

Look east from here. You can see toward Lake Michigan. That lake is the remnant of the glacial lake you're standing in right now. It's smaller, lower, but it's still here. The glacier shaped this entire landscape - the flat prairie, the lake, the soil composition, everything.

I find it grounding - literally - to remember deep time. We're about to walk through stories of immigration, politics, architecture, civil rights. Human stories. Stories that span 150 years, maybe 200 years. But those stories are happening on top of 14,000 years of geological time. On top of ice and water and rock.

The glacier doesn't care about our experiments. The lake doesn't care about our revolutions. But we build on top of them anyway. We take the sandy soil the glacier left us and we grow celery, then we tear out the celery and build schools, then we save those schools and create communities.

Every human story in this neighborhood - every story we're about to explore - sits on top of this deeper, slower, longer story. The story of ice and water and time. The story of a planet that shapes us even as we try to shape it.

Take a moment. Look around. You're standing on the bottom of a lake that hasn't existed for 14,000 years. And you're about to walk into stories that are still being written today.`,
      images: [
        {
          id: 'img-2-1',
          url: 'assets/images/glacial-lake-chicago-map.jpg',
          caption: 'Map showing the extent of Glacial Lake Chicago 14,000 years ago',
          credit: 'Illinois State Geological Survey',
          year: 'n/a',
          type: 'historical',
        },
        {
          id: 'img-2-2',
          url: 'assets/images/wisconsin-glacier.jpg',
          caption: 'Illustration of the Wisconsin Glacier at its maximum extent',
          credit: 'Public Domain',
          type: 'historical',
        },
        {
          id: 'img-2-3',
          url: 'assets/images/lakeview-celery-farms.jpg',
          caption: 'Celery farms in Lake View Township, 1880s - the sandy glacial soil made excellent farmland',
          credit: 'Chicago Public Library',
          year: '1885',
          type: 'historical',
        },
      ],
      navigationInstructions: 'Walk west on Melrose to Halsted Street. Turn right (north) on Halsted and walk to the heart of Northalsted.',
      theme: TourTheme.Geology,
      order: 2,
    },
    {
      id: 'stop-3-northalsted',
      title: 'From New Town to Boystown to Northalsted',
      shortDescription: 'America\'s first officially recognized gay village',
      coordinates: {
        latitude: 41.9430,
        longitude: -87.6490,
      },
      geofenceRadius: 100,
      estimatedDuration: 15,
      audioFile: 'assets/audio/stop-3-northalsted.mp3',
      transcript: `In 1997, Chicago became the first major American city to officially recognize a neighborhood as gay. Mayor Richard M. Daley stood right here on Halsted Street and declared this area a gay village. But that recognition came after decades - generations - of struggle, organizing, and community building.

Let me take you back further. In 1961, Illinois became the first state in America to repeal its sodomy law. Think about that date. 1961. Before Stonewall. Before pride parades. Before most of America was even willing to talk about homosexuality. Illinois said: these laws are wrong, and we're repealing them.

That legislative change created a crack in the door. And through that crack, a community began to build.

In the 1960s and early 70s, LGBTQ people were concentrated in the Gold Coast, then moved to Old Town, then to an area called New Town - which included parts of what we're standing in now. They were always moving, always being pushed, always finding new places to build community.

The police harassed gay bars. Politicians ignored or actively discriminated against LGBTQ people. The AIDS crisis in the 1980s devastated this neighborhood. People died by the hundreds, by the thousands. And still, the community persisted.

Three pioneer bars invested heavily in this area: Little Jim's, Buck's Saloon, and Sidetrack. They weren't just serving drinks - they were creating safe spaces. Places where people could be themselves without fear. More bars opened. Restaurants followed. Shops. The community grew.

And with that growth came power. Economic power. Political power. Property ownership meant investment. Growing population meant registered voters. The community organized, lobbied, demanded recognition.

The first Chicago Pride Parade happened in 1970, on the anniversary of the Stonewall riots in New York. Eventually, the parade found its home here in the early 1980s. Every June, hundreds of thousands of people march down this very street.

By the 1990s, the community had enough political and economic clout that Daley couldn't ignore it. The 1997 official recognition wasn't a gift - it was earned. Through organizing, through showing up, through decades of persistence.

But this story isn't simple. Over the last 10 to 15 years, this neighborhood has had to confront its own exclusions. In the early 2000s, some bars required multiple forms of ID from Black and brown patrons. In 2011, there was a "Take Back Boystown" campaign that blamed violence on queer youth of color. The neighborhood that fought so hard for its own inclusion had created its own exclusions.

In 2020, as protests against police violence and systemic racism swept the country, the LGBTQ community here began a reckoning. The name "Boystown" - which was never official, just a marketing term - came under scrutiny. Who did that name welcome? Who did it exclude?

The area is now officially called Northalsted. The change was meant to signal that all members of the LGBTQ community are welcome. Trans people. People of color. Women. Not just white gay men.

Look around you. The rainbow pylons on the street corners. The pride flags in windows. The bars and restaurants. This is the visible result of decades of activism and community building. But it's also an ongoing experiment. An ongoing question: Who gets to belong? Who gets to feel safe? Who gets to build the future?

This neighborhood tested whether LGBTQ people could build political power in America. The answer was yes. Now it's testing whether that power can be used inclusively. That experiment is still running.`,
      images: [
        {
          id: 'img-3-1',
          url: 'assets/images/pride-parade-1970.jpg',
          caption: 'The first Chicago Pride Parade, 1970, commemorating the Stonewall riots',
          credit: 'Chicago History Museum',
          year: '1970',
          type: 'historical',
        },
        {
          id: 'img-3-2',
          url: 'assets/images/boystown-bars-1980s.jpg',
          caption: 'Pioneer gay bars along Halsted Street in the 1980s, creating community during the AIDS crisis',
          credit: 'LGBT Chicago History',
          year: '1985',
          type: 'historical',
        },
        {
          id: 'img-3-3',
          url: 'assets/images/daley-boystown-1997.jpg',
          caption: 'Mayor Richard M. Daley at the 1997 ceremony officially recognizing Boystown',
          credit: 'Chicago Tribune',
          year: '1997',
          type: 'historical',
        },
        {
          id: 'img-3-4',
          url: 'assets/images/northalsted-pylons.jpg',
          caption: 'The iconic rainbow pylons installed along Halsted Street',
          credit: 'Contemporary photo',
          year: '2019',
          type: 'contemporary',
        },
        {
          id: 'img-3-5',
          url: 'assets/images/northalsted-sign-2020.jpg',
          caption: 'New Northalsted signage installed in 2020 to signal inclusivity for all LGBTQ people',
          credit: 'Block Club Chicago',
          year: '2020',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Walk north on Halsted to Addison Street. Turn right (east) on Addison and walk toward Wrigley Field.',
      theme: TourTheme.LGBTQ,
      order: 3,
    },
    {
      id: 'stop-4-wrigley',
      title: 'The Seminary Becomes a Stadium',
      shortDescription: 'When theology gave way to baseball, 1914',
      coordinates: {
        latitude: 41.9484,
        longitude: -87.6553,
      },
      geofenceRadius: 100,
      estimatedDuration: 10,
      audioFile: 'assets/audio/stop-4-wrigley.mp3',
      transcript: `In 1914, the students studying to become Lutheran ministers were told to pack up and leave. This entire area - where you're standing right now - was the Chicago Lutheran Theological Seminary. Men came here to study theology, to prepare for lives of religious service.

And then Charles Weeghman showed up with an idea and a lot of money.

Weeghman owned a chain of lunch counters, and he wanted to own a baseball team. The Federal League was challenging the established National and American Leagues, and Weeghman saw an opportunity. He needed a stadium. The seminary needed money. A deal was struck.

The seminary sold the land and moved to Maywood, Illinois. In its place, Weeghman built a baseball stadium. It opened on April 23, 1914 as Weeghman Park, home to the Chicago Whales of the Federal League.

The Federal League folded after just two seasons, but Weeghman had another idea. He bought the Chicago Cubs from the National League and moved them here in 1916. The park was renamed Cubs Park, then in 1927 it became Wrigley Field, named after the chewing gum magnate William Wrigley Jr. who owned the team.

Think about that transformation. Theology to baseball. Prayer to hot dogs and beer. Seminary students to bleacher bums. In the span of a few months, the identity and purpose of this entire area changed.

And that change rippled outward. The neighborhood transformed around the stadium. Bars opened to serve fans. Restaurants followed. Apartment buildings went up, with rooftop views that eventually became famous venues themselves. The neighborhood became known as Wrigleyville, its entire identity tied to this ballpark.

Sports became the anchor of community identity. People who have never lived in this neighborhood call themselves Cubs fans. People who have never been to Chicago have opinions about this field. The Cubs' 108-year World Series drought became part of Chicago mythology. When they finally won in 2016, grown adults wept in these streets.

What the seminary did for spiritual community, the stadium did for civic community. It became a gathering place, a source of shared identity, a reason for people to come together. Different kinds of faith, maybe, but faith nonetheless.

This is another one of those experiments. Can sports anchor urban identity? Can a baseball team create community? Can 81 home games a year give a neighborhood its personality?

Looking at Wrigleyville today, the answer seems to be yes. But it's worth asking: what was lost when the seminary moved? What kind of neighborhood might this have been if those theology students had stayed? What did we gain, and what did we trade away?

The Friendly Confines, they call this place. It's the second-oldest ballpark in Major League Baseball. The ivy on the outfield walls. The manual scoreboard. The rooftop seats across the street. All of it iconic. All of it built on land that was meant for prayer.

Every time the Cubs take the field, they're performing on sacred ground. Not sacred in the way it was meant to be, but sacred nonetheless. Sacred to millions of fans. Sacred to a neighborhood that built its identity around this game.

From seminary to stadium. From theology to baseball. Another transformation in a neighborhood of transformations.`,
      images: [
        {
          id: 'img-4-1',
          url: 'assets/images/lutheran-seminary.jpg',
          caption: 'Chicago Lutheran Theological Seminary on this site before 1914',
          credit: 'Chicago History Museum',
          year: '1910',
          type: 'historical',
        },
        {
          id: 'img-4-2',
          url: 'assets/images/weeghman-park-1914.jpg',
          caption: 'Weeghman Park opening day, April 23, 1914, home of the Federal League Chicago Whales',
          credit: 'Public Domain',
          year: '1914',
          type: 'historical',
        },
        {
          id: 'img-4-3',
          url: 'assets/images/cubs-park-1920s.jpg',
          caption: 'Cubs Park in the 1920s, before it was renamed Wrigley Field in 1927',
          credit: 'MLB Archives',
          year: '1925',
          type: 'historical',
        },
        {
          id: 'img-4-4',
          url: 'assets/images/wrigley-field-aerial.jpg',
          caption: 'Aerial view showing how Wrigley Field anchors the neighborhood',
          credit: 'Contemporary photo',
          year: '2023',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Walk south on Sheffield Avenue, then west on Oakdale Avenue into the historic greystone district.',
      theme: TourTheme.Sports,
      order: 4,
    },
    {
      id: 'stop-5-greystones',
      title: 'Building After the Fire',
      shortDescription: 'Limestone and lessons from 1871',
      coordinates: {
        latitude: 41.9405,
        longitude: -87.6515,
      },
      geofenceRadius: 75,
      estimatedDuration: 12,
      audioFile: 'assets/audio/stop-5-greystones.mp3',
      transcript: `These grey stone facades aren't just beautiful - they're a response to trauma. After Chicago burned in 1871, the city said: never again.

The Great Chicago Fire killed about 300 people and destroyed 3.3 square miles of the city. Seventeen thousand structures burned to the ground. The fire started on the Southwest Side and swept northeast, consuming the downtown and the Near North Side before jumping the Chicago River's main stem.

Lake View - this area - wasn't part of Chicago yet in 1871. It was still a separate township. The fire didn't reach here. But everyone in Lake View watched the sky glow orange. They saw the refugees streaming north. They smelled the smoke. They learned the lesson.

After the fire, Chicago passed ordinances requiring fireproof construction in much of the city. Wooden buildings were banned in the downtown and near areas. But Lake View was still independent, so technically those rules didn't apply here. When Lake View was annexed into Chicago in 1889, the rules came with it.

Look at the building you're standing near. That grey limestone likely came from Bloomington, Indiana. It was shipped by rail to Chicago and hauled here by wagon. Limestone is fireproof. It's also expensive.

These greystones represented status and safety. If you could afford a greystone, you were saying: I have money, and I have sense. I'm not going to let my family burn.

But notice: not every building on this block is a greystone. You'll see wooden workers' cottages mixed in. Some of those wooden buildings were built before annexation, grandfathered in under the old rules. Some were built just outside the city limits. The fire codes created a kind of visible class architecture - stone for the wealthy, wood for workers.

Over 30,000 greystones were built in Chicago between 1880 and 1930. Most of them are still standing. They've lasted because they were built to last. The fire that traumatized the city in 1871 is still shaping the buildings you see today, 155 years later.

This is architecture as memory. Architecture as policy. Architecture as class marker. Every greystone in Chicago is saying: we remember the fire, and we're not going to let it happen again.

But there's something else happening here, too. These buildings are beautiful. The craftsmanship is extraordinary. Look at the stone carving around the doorways, the detail in the window frames, the care in the masonry. These aren't just safe buildings - they're elegant buildings.

The masons who built these were often immigrants. German and Swedish craftsmen who brought old-world skills to new-world projects. They were building safety, yes, but they were also building beauty. They were making art out of necessity.

Walk down any street in this neighborhood and you'll see variations in the greystones. Different styles, different details. Even within the constraint of limestone construction, there was room for creativity, for individuality, for expression.

This is the power of building codes done right. They don't just prevent disaster - they shape aesthetics. They create a visual language for a neighborhood. They turn trauma into something solid and enduring.

The Great Chicago Fire is long gone. Everyone who saw it is long dead. But you're standing in its shadow right now, looking at its legacy in limestone.

Fire taught this city how to build. And this neighborhood took that lesson and made it beautiful.`,
      images: [
        {
          id: 'img-5-1',
          url: 'assets/images/chicago-fire-map.jpg',
          caption: 'Map showing the extent of the Great Chicago Fire destruction in 1871',
          credit: 'Chicago History Museum',
          year: '1871',
          type: 'historical',
        },
        {
          id: 'img-5-2',
          url: 'assets/images/greystone-construction.jpg',
          caption: 'Greystones under construction in Lake View, showing limestone blocks from Indiana',
          credit: 'Chicago Public Library',
          year: '1895',
          type: 'historical',
        },
        {
          id: 'img-5-3',
          url: 'assets/images/workers-cottages.jpg',
          caption: 'Wooden workers\' cottages mixed among greystones, showing class architecture',
          credit: 'Historic photo',
          year: '1900',
          type: 'historical',
        },
        {
          id: 'img-5-4',
          url: 'assets/images/greystone-details.jpg',
          caption: 'Close-up of limestone masonry details showing immigrant craftsmanship',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Continue walking west, then south toward the St. Alphonsus church area on Southport.',
      theme: TourTheme.Architecture,
      order: 5,
    },
    {
      id: 'stop-6-german',
      title: 'Little Germany in Lakeview',
      shortDescription: 'Immigration, integration, and identity',
      coordinates: {
        latitude: 41.9370,
        longitude: -87.6530,
      },
      geofenceRadius: 75,
      estimatedDuration: 12,
      audioFile: 'assets/audio/stop-6-german.mp3',
      transcript: `The German-speaking immigrants who built this neighborhood had a choice: become American or stay German. They chose both.

In the late 1800s and early 1900s, this part of Lake View was heavily German and Swedish. German was spoken in the streets, in the shops, in the churches. Children grew up bilingual. Communities maintained old-world traditions while building new-world lives.

St. Alphonsus parish, founded in 1882, was a German Catholic church. The Athenaeum Theatre, built in 1911, hosted German folk opera and cultural events. German bakeries, German butchers, German beer halls - this was Little Germany within Chicago.

But it was also American. The Germans who came here weren't just replicating their old country - they were building something new. They were experimenting with what it meant to be German AND American. Hyphenated identity. German-American.

World War I changed everything. Suddenly, being German in America was suspect. German language classes were shut down. German names on businesses were changed or covered up. People who had been proud of their heritage learned to hide it.

Some German-Americans anglicized their names. Schmidt became Smith. Müller became Miller. They stopped speaking German in public. They stopped celebrating German holidays. They assimilated, not entirely by choice, but by necessity.

But some things persisted. Look at the architecture around you - German building styles, German craftsmanship. St. Alphonsus is still standing, still operating. Dinkel's Bakery, founded in 1922, is still making German pastries using old family recipes. The Athenaeum Theatre still hosts events.

The Swedish community faced less pressure during the wars, but they also assimilated over time. Swedish was spoken less and less. The Swedish Club moved locations. The identity diluted, generation by generation.

This is the immigrant experiment. How do you maintain who you are while becoming something new? How much do you keep, and how much do you let go? Do you get to choose, or does the broader society choose for you?

Every immigrant community in Chicago - and America - has faced these questions. The Germans and Swedes in Lake View faced them in their own way, in their own time. Some things were lost. Language, mostly. Certain traditions, certain connections to the old country.

But other things were gained. New identities. New communities. New ways of being German or Swedish or American or all three at once.

Look at the buildings around you. Many were built by German masons, German architects. The skill they brought from the old world shaped the new world. Their labor is literally the foundation of this neighborhood.

And their descendants - the third, fourth, fifth generation German-Americans - many of them don't speak German. They might not know where their ancestors came from in Germany. But they're here. They're part of the fabric of this neighborhood, this city, this country.

Immigration is always an experiment. An experiment in identity, in community, in belonging. This neighborhood tested how German you could be while becoming American. The answer turned out to be: both, and neither, and something entirely new.

The experiment is still running. Different immigrants now - Mexican, Polish, Korean, Nigerian. Different languages, different traditions. But the same questions. The same experiment in becoming.`,
      images: [
        {
          id: 'img-6-1',
          url: 'assets/images/st-alphonsus-1882.jpg',
          caption: 'St. Alphonsus Catholic Church, founded in 1882 as a German parish',
          credit: 'Archdiocese of Chicago',
          year: '1885',
          type: 'historical',
        },
        {
          id: 'img-6-2',
          url: 'assets/images/german-shops.jpg',
          caption: 'German-language shop signs in Lake View, early 1900s',
          credit: 'Chicago Public Library',
          year: '1910',
          type: 'historical',
        },
        {
          id: 'img-6-3',
          url: 'assets/images/athenaeum-theatre.jpg',
          caption: 'The Athenaeum Theatre, built in 1911 for German folk opera',
          credit: 'Chicago History Museum',
          year: '1915',
          type: 'historical',
        },
        {
          id: 'img-6-4',
          url: 'assets/images/dinkels-bakery.jpg',
          caption: 'Dinkel\'s Bakery, still operating today with German family recipes',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Walk east toward the lakefront, heading to Belmont Harbor area.',
      theme: TourTheme.Immigration,
      order: 6,
    },
    {
      id: 'stop-7-lakefront',
      title: 'The Annexation of 1889',
      shortDescription: 'When Lake View voted to disappear',
      coordinates: {
        latitude: 41.9410,
        longitude: -87.6380,
      },
      geofenceRadius: 100,
      estimatedDuration: 12,
      audioFile: 'assets/audio/stop-7-lakefront.mp3',
      transcript: `On June 29, 1889, the people of Lake View Township voted to disappear. In one vote, they gave up their independence and became part of Chicago. The vote was close: 2,503 for annexation, 1,999 against. Fifty-two percent to forty-eight percent.

Think about what they were voting on. Lake View Township had been independent since 1857. It had its own government, its own identity. The population had grown from about 2,000 in 1870 to 45,000 by 1887. This was a real community with real autonomy.

But there were problems. Water supply was inadequate. The fire department was understaffed. Schools needed resources. The roads needed paving. Lake View Township was growing fast, but its infrastructure wasn't keeping up.

Chicago promised solutions. Join us, Chicago said, and you'll get our water system. Our police force. Our fire department. Our schools. Our resources. We'll pave your streets. We'll connect you to the city.

But there was a cost. Lake View would lose its independence. No more township government. No more local control. You'll be just another neighborhood in a big city. You'll be absorbed.

Nearly half the voters said no. They wanted to stay independent. They wanted local control. They didn't trust Chicago. They liked being Lake View.

But fifty-two percent said yes. And in a democracy, fifty-two percent is enough.

On June 29, 1889, Lake View Township ceased to exist. It became part of Chicago. The same year, Chicago also annexed Hyde Park Township, Jefferson Township, and the Town of Lake. Chicago grew from 43 square miles to 168 square miles in a single day. The population doubled.

This was the moment Chicago became the "Second City." Not second in ambition or importance, but second in population, surpassing Philadelphia. Only New York was bigger.

Stand here and look east. Lake Michigan. That's the lake that gave Lake View its name. When this was a township, residents could look at that lake and say: this is ours. Our view. Our community. Our independence.

After annexation, it was still beautiful. But it belonged to Chicago now. The view was the same, but the meaning had changed.

What did Lake View gain from annexation? Water. Police. Fire protection. Schools. Infrastructure. Connection to a growing city. Economic opportunity. All the things Chicago promised.

What did Lake View lose? Autonomy. Local identity. The ability to make its own decisions. The name itself - Lake View became just another neighborhood, not a place unto itself.

Was it worth it? That's a question every annexed community has to answer for itself. The people who voted yes thought so. The people who voted no didn't.

But here's the thing about political experiments: they're hard to reverse. Once Lake View joined Chicago, there was no going back. The decision was permanent. That's why the vote was so contested. Everyone knew the stakes.

Democracy is about collective decision-making, but it's also about loss. When fifty-two percent decide for everyone, forty-eight percent lose. Their vision for Lake View - independent, autonomous, separate - died on June 29, 1889.

The people who wanted to join Chicago got what they wanted. Water, police, schools, infrastructure. The experiment in suburban independence ended. The experiment in urban integration began.

Look out at the lake again. Fourteen thousand years ago, this was all underwater. One hundred thirty-five years ago, this was an independent township. Now it's a neighborhood in the third-largest city in America.

Nothing stays the same. Not the glaciers, not the lake level, not the political boundaries. We're always becoming something else. Always experimenting with new forms, new identities, new ways of organizing ourselves.

Lake View disappeared in 1889. But in another sense, it never died. People still call this area Lake View. We still remember. The name persists even after the political entity is gone.

Some things last longer than governments.`,
      images: [
        {
          id: 'img-7-1',
          url: 'assets/images/lake-view-township-map.jpg',
          caption: 'Map of Lake View Township boundaries before 1889 annexation',
          credit: 'Chicago History Museum',
          year: '1887',
          type: 'historical',
        },
        {
          id: 'img-7-2',
          url: 'assets/images/annexation-newspaper.jpg',
          caption: 'Newspaper coverage of the annexation vote: 2,503 for, 1,999 against',
          credit: 'Chicago Tribune Archives',
          year: '1889',
          type: 'historical',
        },
        {
          id: 'img-7-3',
          url: 'assets/images/chicago-annexation-1889.jpg',
          caption: 'Map showing Chicago\'s massive expansion in 1889, including Lake View',
          credit: 'Public Domain',
          year: '1889',
          type: 'historical',
        },
        {
          id: 'img-7-4',
          url: 'assets/images/belmont-harbor-view.jpg',
          caption: 'The view of Lake Michigan that gave Lake View its name',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Walk back west toward Broadway and return to Nettelhorst School where we started.',
      theme: TourTheme.Politics,
      order: 7,
    },
    {
      id: 'stop-8-synthesis',
      title: 'Who Gets to Become?',
      shortDescription: 'Bringing it all together',
      coordinates: {
        latitude: 41.9417,
        longitude: -87.6448,
      },
      geofenceRadius: 75,
      estimatedDuration: 10,
      audioFile: 'assets/audio/stop-8-synthesis.mp3',
      transcript: `We're back where we started, but you're not the same. You've walked through 14,000 years of history in two hours. From glacial ice to celery farms to greystones to pride parades to school revolutions. Now the question is: what does it all mean?

I called this tour "The Laboratory of Becoming" because this neighborhood has repeatedly experimented with what it means to build the future. Let's connect the threads.

Fourteen thousand years ago, glaciers shaped this land. Humans had no say in that. But everything since has been human choice, human experiment, human struggle.

In the 1870s and 1880s, Lake View tested whether you could build suburban agricultural communities near a growing city. Could you farm celery and still be connected to urban markets? For a while, the answer was yes.

In 1889, Lake View tested whether voluntary annexation could bring infrastructure and opportunity without destroying local identity. The vote was close because the stakes were real. Some won. Some lost. The experiment moved forward.

In the 1890s and early 1900s, German and Swedish immigrants tested whether you could maintain old-world identity while building new-world lives. Could you be German AND American? The answer was complicated, especially during the wars. Language was lost. But community persisted.

After 1871, this neighborhood tested whether you could build a city that wouldn't burn again. The greystones around you are the answer: yes, with limestone and skill and money. Fire-safe architecture became beautiful architecture.

In 1914, this area tested whether sports could anchor urban identity. Could a baseball stadium create community? Wrigley Field and Wrigleyville suggest yes, though we traded away a seminary to find out.

From the 1970s through the 1990s, the LGBTQ community tested whether political organizing and economic power could force recognition and safety. In 1997, Chicago said yes, officially recognizing Boystown. But then in the 2000s and 2010s, the community had to test whether its own power could be used inclusively. That test is ongoing.

And in 2001, seven mothers tested whether a failing neighborhood school could be saved through community organizing and persistence. Nettelhorst says yes. The building we're standing in front of is proof.

These experiments have something in common: they're all about becoming. About transformation. About refusing to accept what is and insisting on what could be.

But here's the hard question: who gets to experiment? Who gets to become?

The glaciers didn't care who was here. But every human experiment since has involved choice and exclusion. Lake View annexed over the objections of 48 percent of voters. The greystones were built by people who could afford limestone; workers got wood. German immigrants could assimilate; their language still died. The seminary was displaced by the stadium. LGBTQ people fought for space but then had to confront their own exclusions. Nettelhorst's revival came during a wave of gentrification that displaced other families.

Every transformation has winners and losers. Every experiment in becoming means someone else gets left behind or pushed out.

So when we call this "The Laboratory of Becoming," we have to ask: who owns the laboratory? Who gets to run the experiments? Who benefits from the results? And who pays the costs?

These aren't abstract questions. Right now, this neighborhood is gentrifying. Housing prices are rising. Long-time residents are being pushed out. New residents are moving in. The neighborhood is becoming something new, again. Is that an experiment in progress and prosperity? Or is it displacement and loss?

I don't have answers. But I think the questions matter.

What I do know is this: every generation of people in this neighborhood has faced the same challenge. How do we build the future we want to see? How do we create community? How do we include everyone? How do we become who we want to be, together?

The glacier didn't ask those questions. It just moved, slowly, reshaping everything in its path. But we're not glaciers. We're people. We have choices. We have agency. We have responsibility.

Nettelhorst School is still here because seven mothers refused to let it die. Northalsted exists because LGBTQ people organized for decades. The greystones stand because builders learned from fire. Lake View is part of Chicago because fifty-two percent voted yes.

None of these outcomes were inevitable. They happened because people made them happen. People experimented. People organized. People built. People showed up.

The laboratory is still open. The experiments are still running. The questions are still being asked: Who gets to belong? Who gets to build? Who gets to become?

You've walked through the past for two hours. Now you're standing in the present. The future is ahead of you. What will you build? What experiment will you run? What will you become?

This neighborhood has been a laboratory for 150 years of human experiments. It's your turn now. The work continues. The becoming continues.

Thank you for walking with me.`,
      images: [
        {
          id: 'img-8-1',
          url: 'assets/images/nettelhorst-community-today.jpg',
          caption: 'Nettelhorst community today: diverse families building the future together',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
        {
          id: 'img-8-2',
          url: 'assets/images/lakeview-mural.jpg',
          caption: 'Community mural in East Lakeview representing the neighborhood\'s diverse history',
          credit: 'Contemporary photo',
          year: '2023',
          type: 'contemporary',
        },
        {
          id: 'img-8-3',
          url: 'assets/images/neighborhood-gathering.jpg',
          caption: 'Neighborhood gathering showing ongoing work of community building',
          credit: 'Contemporary photo',
          year: '2024',
          type: 'contemporary',
        },
      ],
      navigationInstructions: 'Tour complete. Thank you for experiencing East Lakeview Stories.',
      theme: TourTheme.Synthesis,
      order: 8,
    },
  ],
};
