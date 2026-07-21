const asset = (path) => `../../../assets/${path}`;

const images = {
  flight: asset("austria-days/day-01-delta-atl-muc.jpg"),
  airport: asset("austria-days/day-02-munich-airport.jpg"),
  zurich: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/A_Portrait_of_Zurich_%2849760690567%29.jpg/1920px-A_Portrait_of_Zurich_%2849760690567%29.jpg",
  swissVideo: "https://i.ytimg.com/vi/pfdb6u4HDoQ/maxresdefault.jpg",
  appenzellSquare: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Appenzell_Landsgemeindeplatz_20210528.jpg/1920px-Appenzell_Landsgemeindeplatz_20210528.jpg",
  appenzellHouses: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Appenzell_houses_20210528.jpg/1920px-Appenzell_houses_20210528.jpg",
  vaduzCastle: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Liechtenstein_asv2022-10_img01_Vaduz_Schloss.jpg/1920px-Liechtenstein_asv2022-10_img01_Vaduz_Schloss.jpg",
  vaduzView: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Liechtenstein_asv2022-10_img02_Vaduz_Aussicht_beim_Schloss.jpg/1920px-Liechtenstein_asv2022-10_img02_Vaduz_Aussicht_beim_Schloss.jpg",
  lunersee: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/L%C3%BCnersee_vom_Saulakopf_1.JPG/1920px-L%C3%BCnersee_vom_Saulakopf_1.JPG",
  lunerDam: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Staudammkrone_L%C3%BCnersee_2.JPG/1920px-Staudammkrone_L%C3%BCnersee_2.JPG",
  lunerAerial: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Vandans_L%C3%BCnersee_Vogelperspektive_W.jpg/1920px-Vandans_L%C3%BCnersee_Vogelperspektive_W.jpg",
  innsbruck: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Innsbruck_Panorama_Nordkette_3.jpg/1920px-Innsbruck_Panorama_Nordkette_3.jpg",
  innsbruckValley: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Innsbruck_seen_from_LSG_Nordkette_in_Innsbruck-Arzl_2023-09-23_04.jpg/1920px-Innsbruck_seen_from_LSG_Nordkette_in_Innsbruck-Arzl_2023-09-23_04.jpg",
  kaiser: asset("austria-days/day-03-wilder-kaiser.jpg"),
  gosausee: asset("austria-days/day-07-gosausee-real.jpg"),
  gosauseeAlt: asset("austria-days/day-07-gosausee.jpg"),
  hallstatt: asset("austria-days/day-08-hallstatt-real.jpg"),
  hallstattAlt: asset("austria-days/day-08-hallstatt.jpg"),
  dachstein: asset("austria-days/day-09-dachstein.jpg"),
  schafberg: asset("austria-days/day-10-schafberg.jpg"),
  wolfgang: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sankt_Gilgen%2C_Wolfgangsee_and_Schafberg%2C_Salzkammergut%2C_Austria_from_Zw%C3%B6lferhorn.jpg/1920px-Sankt_Gilgen%2C_Wolfgangsee_and_Schafberg%2C_Salzkammergut%2C_Austria_from_Zw%C3%B6lferhorn.jpg",
  schafTrain: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wolfgangsee_Schafbergbahn_Schafberg_Austria_-_panoramio.jpg/1920px-Wolfgangsee_Schafbergbahn_Schafberg_Austria_-_panoramio.jpg",
  salzburg: asset("austria-days/day-13-salzburg-real.jpg"),
  salzburgAlt: asset("austria-days/day-13-salzburg.jpg"),
  salzburgRiver: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Old_Town_Salzburg_across_the_Salzach_river.jpg/1920px-Old_Town_Salzburg_across_the_Salzach_river.jpg",
  salzburgView: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/View_of_Salzburg_town_from_Salzburg_Fortress.jpg/1920px-View_of_Salzburg_town_from_Salzburg_Fortress.jpg",
  jasna: asset("slovenia-julian-alps-venice-days/day-07-kranjska-gora-and-lake-jasna-alpine-picnic.jpg"),
  jasnaWide: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lake_Jasna_%28Kranjska_Gora%29.jpg/1920px-Lake_Jasna_%28Kranjska_Gora%29.jpg",
  kranjska: asset("slovenia-julian-alps-venice-days/day-07-kranjska-gora-and-lake-jasna-alpine-picnic.jpg"),
  vrsic: asset("slovenia-julian-alps-venice-days/day-08-vrsic-pass-to-soca-valley-and-bovec.jpg"),
  soca: asset("slovenia-julian-alps-venice-days/day-09-soca-river-kobarid-and-kozjak-waterfall.jpg"),
  bovec: asset("slovenia-julian-alps-venice-days/day-10-bovec-slow-day-and-optional-kanin-lift-views.jpg"),
  bled: asset("slovenia-julian-alps-venice-days/day-03-lake-bled-island-castle-views-and-cream-cake.jpg"),
  vintgar: asset("slovenia-julian-alps-venice-days/day-04-vintgar-gorge-and-radovljica-honey-town.jpg"),
  bohinj: asset("slovenia-julian-alps-venice-days/day-05-transfer-to-bohinj-and-vogel-mountain-views.jpg"),
  bohinjShore: asset("slovenia-julian-alps-venice-days/day-06-lake-bohinj-slow-shore-and-farm-country-day.jpg"),
  veniceBuffer: asset("slovenia-julian-alps-venice-days/day-13-trieste-coast-or-venice-airport-buffer.jpg"),
  veniceFlight: asset("slovenia-julian-alps-venice-days/day-14-fly-venice-to-atlanta.jpg")
};

const photo = (src, caption, alt, credit = "Trip research image") => ({ src, caption, alt, credit });
const facts = (duration, effort, mode, overnight) => [
  ["Time commitment", duration], ["Effort", effort], ["Best mode", mode], ["Overnight", overnight]
];
const practical = (effort, baby, transport, food, weather, booking, link) => [
  ["Effort + terrain", effort], ["With a little traveler", baby], ["Getting there", transport],
  ["Food rhythm", food], ["Weather pivot", weather], ["Book ahead", booking, link]
];

window.detailOrder = [
  "atl-zurich", "zurich-reset", "appenzell-vaduz", "lunersee", "innsbruck-transfer",
  "wilder-kaiser", "gosau-base", "hallstatt", "gosausee", "wolfgangsee-schafberg",
  "dachstein", "salzburg", "salzburg-kranjska", "jasna-zelenci", "vrsic-soca",
  "lake-bled", "bled-bohinj", "bohinj-venice", "venice-flight", "munich-flight"
];

window.detailData = {
  "atl-zurich": {
    eyebrow: "Day 01 · Travel day", title: "ATL → Zürich", dek: "The least glamorous day has one job: land with enough energy left to enjoy the first lakefront evening.",
    tags: ["Open-jaw flight", "Infant-in-lap", "Sleep strategy"],
    hero: photo(images.flight, "Overnight flight into the Alps", "Delta aircraft preparing for an overnight transatlantic flight"),
    facts: facts("Overnight", "Low movement / high logistics", "Nonstop if available", "In flight"),
    whyTitle: "Make the flight serve the route.",
    why: ["Starting in Zürich removes a western-Europe connection and places the family exactly where the eastbound road trip should begin.", "Treat this as a sleep-and-arrival setup, not a day to squeeze value from. The trip pays off only if everyone reaches the first alpine drive with some reserve."],
    note: ["The smart move", "Choose the schedule before optimizing the fare.", "A usable arrival time and simple first night matter more than saving a little on a difficult connection."],
    gallery: [photo(images.flight,"Cabin strategy","Long-haul aircraft at the gate"),photo(images.zurich,"The reward on arrival","Zürich and its lake","Wikimedia Commons"),photo(images.swissVideo,"The Swiss handoff","Eastern Switzerland landscape inspiration","Ryan Shirley / YouTube")],
    planIntro: "The timeline is built backward from sleep: move, feed, settle, then arrive with as few decisions as possible.",
    schedule: [["3:00 PM","Arrive at ATL","Leave time for bags, stroller tagging, infant paperwork, and an unhurried meal."],["Boarding","Set the sleep zone","Change into pajamas, organize one small overnight pouch, and keep bottles or snacks accessible."],["Overnight","Protect the longest sleep block","Dim screens, use the carrier if helpful, and skip any service that wakes the baby unnecessarily."],["Morning","Land and simplify","Collect the car only if everyone is alert; otherwise use the Zürich reset night exactly as intended."]],
    practical: practical("Airport walking and a long seated stretch.","Gate-check stroller; carry a compact change kit rather than the whole diaper bag into the lavatory.","ATL to ZRH; keep the first hotel easy to reach.","Eat before boarding, then treat airline service as optional.","Flight disruption: preserve Zürich arrival even if the exact carrier changes.","Seats, bassinet request, infant ticket, and first hotel.","https://www.delta.com/"),
    tips: ["Pack one complete outfit change for each adult as well as the baby.","Keep medication and one full day of baby food in the cabin.","Do not schedule a mountain drive immediately after landing.","Photograph passports and baggage tags before departure."],
    related: ["zurich-reset","appenzell-vaduz","lunersee"]
  },
  "zurich-reset": {
    eyebrow: "Day 02 · Switzerland", title: "Zürich, softly", dek: "A lake-and-old-town reset that begins the trip without pretending an overnight flight is a normal morning.",
    tags: ["Stroller-friendly", "Lakefront", "Arrival city day"], hero: photo(images.zurich,"Zürich lakefront and old town","Panorama of Zürich beside the lake","Wikimedia Commons"),
    facts: facts("Half day", "Easy", "Walk + tram", "Zürich · 1 night"),
    whyTitle: "A city day designed around recovery.",
    why: ["Zürich earns its place because it is beautiful at very low effort. The Limmat, lake promenade, shaded squares, and reliable transit create a real sense of arrival without demanding a major attraction.", "Keep the radius small: old town, lake, early dinner, hotel. Tomorrow is the first scenic transfer, so today should restore rather than impress."],
    note: ["Best version", "One lovely loop, then stop.", "The mistake would be turning this into a museum-and-shopping marathon after the overnight flight."],
    gallery: [photo(images.zurich,"Lakefront arrival","Zürich skyline and water","Wikimedia Commons"),photo(images.swissVideo,"Eastern Switzerland preview","Swiss mountain and lake scenery","Ryan Shirley / YouTube"),photo(images.appenzellHouses,"Tomorrow's painted villages","Colorful traditional houses in Appenzell","Wikimedia Commons")],
    planIntro: "Everything can compress or expand depending on sleep. The essential experience is water, old streets, and an early night.",
    schedule: [["Late morning","Check in or drop bags","Request the crib, reset clothing, and let the baby move before sightseeing."],["1:00 PM","Limmat and old town","Walk a short river loop through pedestrian lanes; use the stroller and stop whenever needed."],["3:30 PM","Lake promenade","Find shade near the water, coffee for the adults, and open space for a crawl break."],["5:30 PM","Early dinner + bed","Eat before peak hours and protect the first full night in Europe."]],
    practical: practical("Mostly level city walking; cobbles in the old town.","Stroller works well; carrier is optional for narrow lanes.","Use tram or train from ZRH and avoid collecting the rental car until departure day if rates allow.","Choose a casual lakefront or neighborhood meal near the hotel.","Rain: shorten the loop and use a café, hotel, or a small indoor stop.","Flexible hotel with crib and early bag storage.","https://www.zuerich.com/en"),
    tips: ["Stay near the lake or a direct tram line, not for a luxury address.","Avoid a long afternoon nap that destroys the first night.","Buy road snacks before leaving Zürich the next morning.","Keep the first dinner close enough to walk home."],
    related: ["atl-zurich","appenzell-vaduz","lunersee"]
  },
  "appenzell-vaduz": {
    eyebrow: "Day 03 · Switzerland + Liechtenstein", title: "Appenzell → Vaduz", dek: "Painted Swiss facades, pasture country, and a tiny-capital lunch break turn a transfer into a real day.",
    tags: ["Scenic transfer", "Village walk", "Two countries"], hero: photo(images.appenzellHouses,"Painted houses of Appenzell","Colorful houses in Appenzell","Wikimedia Commons"),
    facts: facts("5–6 hours with stops", "Easy", "Rental car", "Brand · night 1 of 2"),
    whyTitle: "The transfer day that never feels like one.",
    why: ["Appenzell supplies the pastoral Switzerland image—bright facades, cheese country, and steep green ridges—without detouring west into the famous Bernese Oberland.", "Vaduz adds a clean mid-drive reset. The castle is best treated as a viewpoint and geographic marker, not a full sightseeing agenda."],
    note: ["Pacing rule", "Pick one long stop and one short stop.", "Appenzell gets the walk and lunch; Vaduz gets the viewpoint, stretch, and onward drive."],
    gallery: [photo(images.appenzellSquare,"Village center","Appenzell's central square","Wikimedia Commons"),photo(images.vaduzCastle,"Vaduz Castle","Castle above Liechtenstein's capital","Wikimedia Commons"),photo(images.vaduzView,"Rhine Valley view","View from the castle road above Vaduz","Wikimedia Commons")],
    planIntro: "Leave Zürich after breakfast and protect the afternoon arrival in Brand; the route is prettier when nobody is rushing it.",
    schedule: [["9:00 AM","Depart Zürich","Collect the car, install the child seat carefully, and leave the city after commuter traffic."],["10:30 AM","Appenzell walk","Circle the painted center, browse a food shop, and have an early lunch."],["1:30 PM","Vaduz reset","Walk the compact center or drive to the castle-road viewpoint; give the baby open time."],["3:00 PM","Continue to Brand","Cross into Austria, stop once for groceries, and settle before dinner."]],
    practical: practical("Short village walks with cobbles; otherwise a driving day.","Stroller in Appenzell; carrier optional at the castle viewpoint.","Roughly 3 hours of total driving before stops.","Lunch in Appenzell; grocery stop before the mountain valley.","Rain: keep Appenzell lunch, shorten both walks, and arrive early.","Rental cross-border permission and Austrian motorway vignette.","https://www.appenzell.ch/en.html"),
    tips: ["Do not add Säntis unless you are willing to arrive late in Brand.","Use Vaduz as the nap bridge if the baby sleeps in the car.","Confirm the rental includes Switzerland, Liechtenstein, Austria, Slovenia, and Italy.","Buy picnic supplies before entering the quieter Brand valley."], related: ["zurich-reset","lunersee","innsbruck-transfer"]
  },
  "lunersee": {
    eyebrow: "Day 04 · Vorarlberg", title: "Lünersee", dek: "A cable-car reveal, a high turquoise basin, and the first day that feels unmistakably alpine.",
    tags: ["Cable car", "Lakeshore walk", "Carrier recommended"], hero: photo(images.lunersee,"Lünersee beneath the Rätikon","High alpine Lünersee lake in Austria","Wikimedia Commons"),
    facts: facts("4–6 hours", "Easy to moderate", "Cable car + walk", "Brand · night 2 of 2"),
    whyTitle: "The western-Austria detour earns itself here.",
    why: ["Lünersee offers the drama of a high-alpine hike without requiring the family to climb into the basin. The lift does the elevation work; the shoreline lets you choose the distance.", "This is also a useful test day. You learn how the baby handles lifts, wind, carriers, and alpine timing before the busier middle of the trip."],
    note: ["Best choice", "Do less than the map tempts you to do.", "Walk the most scenic portion, have a hut lunch, and turn back while the day still feels easy."],
    gallery: [photo(images.lunerAerial,"The full basin","Aerial view of Lünersee","Wikimedia Commons"),photo(images.lunerDam,"Dam-top path","Walkway across the Lünersee dam","Wikimedia Commons"),photo(images.lunersee,"Rätikon walls","Mountain basin around Lünersee","Wikimedia Commons")],
    planIntro: "Go early for parking, calmer air, and clear reflections. The family does not need the complete circuit to get the complete experience.",
    schedule: [["8:15 AM","Drive to the lift","Eat breakfast first; arrive with layers, carrier, and a compact picnic."],["9:00 AM","Ride into the basin","Pause at the top station for everyone to adjust to elevation and temperature."],["9:30 AM","Choose the shoreline segment","Walk toward the quiet side of the lake, stopping often rather than chasing mileage."],["12:00 PM","Hut lunch + descent","Eat before queues, ride down, and keep the rest of the afternoon open in Brand."]],
    practical: practical("Gravel and mountain trail; choose an out-and-back distance.","Carrier strongly preferred. Wind and sun exposure can change quickly.","Short valley drive from Brand, then Lünerseebahn.","Picnic plus hut lunch; carry water even when dining at the top.","Cloud or high wind: valley walk, pool, or an easy Brand day.","Reserve lift time if offered and verify operating status that morning.","https://www.luenerseebahn.at/en"),
    tips: ["Take the first practical lift, not necessarily the literal first departure.","Pack a warm layer even on a hot valley day.","Turn around before nap disruption becomes the story.","Check the final descent time when you arrive."], related: ["appenzell-vaduz","innsbruck-transfer","gosau-base"]
  },
  "innsbruck-transfer": {
    eyebrow: "Day 05 · Tyrol", title: "Innsbruck, in transit", dek: "A mountain city breaks the long eastbound drive and adds one clean dose of Tyrolean architecture.",
    tags: ["Transfer day", "Old town", "Optional Nordkette"], hero: photo(images.innsbruck,"Innsbruck beneath the Nordkette","Panorama of Innsbruck and the Nordkette","Wikimedia Commons"),
    facts: facts("7–8 hours door to door", "Moderate travel day", "Car + short walk", "Gosau · night 1 of 4"),
    whyTitle: "Use Innsbruck as punctuation, not another base.",
    why: ["The city sits naturally on the eastbound line and gives the adults a meaningful stop between mountain valleys. A compact old-town loop is enough to feel the place.", "Nordkette is optional. If the sky is crystal clear and energy is high, ride up. If not, protect the arrival in Gosau—the four-night lake chapter matters more."],
    note: ["Decision point", "The lift is a bonus, not the plan.", "By lunch, choose between a summit view and an early arrival at the next base."],
    gallery: [photo(images.innsbruck,"City under rock walls","Innsbruck and the Nordkette","Wikimedia Commons"),photo(images.innsbruckValley,"Inn Valley scale","Wide view over Innsbruck","Wikimedia Commons"),photo(images.kaiser,"Tyrolean countryside","Wilder Kaiser mountains","Trip research image")],
    planIntro: "Start early, park once, eat a real lunch, and make the onward decision before everyone is tired.",
    schedule: [["8:30 AM","Leave Brand","Use the first drive for the main car nap if that rhythm works."],["11:00 AM","Old town loop","Golden Roof, river edge, coffee, and a stroller-friendly stretch."],["12:30 PM","Lunch + weather decision","Ride Nordkette only with clear views and comfortable timing."],["2:00 PM","Continue east","Drive toward Gosau with one playground or service-area break."]],
    practical: practical("Level city walking; total day has substantial car time.","Stroller works in the center. Keep the carrier available if using Nordkette.","Use a central garage; do not hunt for street parking.","Sit-down lunch in Innsbruck, groceries closer to Gosau.","Rain: old town arcades and lunch, then leave early.","Only prebook Nordkette if the ticket remains flexible.","https://www.innsbruck.info/en/"),
    tips: ["Set a hard departure time before leaving the car.","Skip shopping if it cuts into the Gosau arrival.","Use the city stop for a proper meal rather than roadside food.","Keep one adult free to supervise the car-seat reset before the second drive."], related: ["lunersee","gosau-base","hallstatt"]
  },
  "wilder-kaiser": {
    eyebrow: "Austria-only route · Tyrol", title: "Wilder Kaiser reset", dek: "Meadow paths, horses, pool time, and a deliberately slow day beneath the limestone crown.",
    tags: ["Farm stay", "Wellness", "Easy pacing"], hero: photo(images.kaiser,"Wilder Kaiser range","The Wilder Kaiser mountains above green meadows"),
    facts: facts("Full slow day", "Easy", "Walk + hotel time", "Wilder Kaiser · night 2"),
    whyTitle: "A slower farm day with real payoff.", why: ["This is the best reason to choose the Austria-only variation: it creates space for a farm-and-spa experience instead of another geographic move.","The scenery comes to the hotel and village paths, so nobody has to earn the view with a big excursion."],
    note: ["Who should choose it", "Families craving comfort over another border.", "Keep this day if the Slovenia chapter feels like one move too many."],
    gallery: [photo(images.kaiser,"Limestone skyline","Wilder Kaiser range"),photo(asset("austria-days/day-04-stanglwirt-horses.jpg"),"Horses and farm rhythm","Horses at the alpine farm resort"),photo(asset("austria-days/day-04-stanglwirt.jpg"),"Wellness base","Alpine farm and spa lodging")],
    planIntro: "Do one short outing in the morning and let the hotel or farm grounds carry the afternoon.",
    schedule: [["Morning","Meadow walk","Choose a short village or farm loop after breakfast."],["Late morning","Animal time","Visit horses or the children's farm without a strict program."],["Afternoon","Pool + nap","Trade off spa time while the baby resets."],["Evening","Early farm-to-table dinner","Eat on property and avoid putting everyone back in the car."]],
    practical: practical("Gentle paths and hotel grounds.","Ideal crawl-and-reset day; stroller usually works.","No major driving once settled.","Breakfast and dinner on property; light lunch.","Rain improves the spa-and-pool logic.","Book the lodging and crib early; verify children's pool access.","https://www.wilderkaiser.info/en"),
    tips: ["Resist adding a major gondola day.","Use the morning for outdoor photos before clouds build.","Schedule adult spa time in shifts.","Do laundry here if the room or hotel supports it."], related: ["innsbruck-transfer","gosau-base","hallstatt"]
  },
  "gosau-base": {
    eyebrow: "Salzkammergut · Base guide", title: "Why Gosau", dek: "The quieter valley that makes four headline excursions feel like one unhurried alpine stay.",
    tags: ["Four-night base", "Meadow space", "Low bustle"], hero: photo(images.gosausee,"Gosau valley's mountain backdrop","Gosausee and the Dachstein range"),
    facts: facts("4 nights", "Restorative", "Short day drives", "Gosau"),
    whyTitle: "Sleep near the scenery, not inside the crowd.", why: ["Hallstatt is the famous photograph; Gosau is the better home. It offers earlier access to Gosausee, roomier lodging, meadow views, easier parking, and a calmer evening rhythm.","From one base, the family can reach Hallstatt, Dachstein viewpoints, Wolfgangsee, and Salzburg while returning to the same crib, grocery setup, and familiar room."],
    note: ["Base strategy", "Four nights is the sweet spot.", "It creates three weather-dependent excursion slots plus one true flex day."],
    gallery: [photo(images.gosausee,"The headline lake","Gosausee and Dachstein"),photo(images.hallstatt,"The dawn excursion","Hallstatt lakefront"),photo(images.dachstein,"The high-country option","Dachstein mountain terrain")],
    planIntro: "Arrival night is for groceries and orientation. Then alternate high-output mornings with slow valley afternoons.",
    schedule: [["Arrival","Settle + stock","Request crib, identify breakfast timing, and buy picnic basics."],["Morning rhythm","Leave before day-trip traffic","Use the location advantage for Hallstatt and Gosausee."],["Afternoon rhythm","Return to the valley","Protect naps, meadow time, and an easy dinner."],["Flex slot","Follow the clearest forecast","Assign Dachstein or Schafberg to the best visibility day."]],
    practical: practical("Base itself is easy; excursion terrain varies.","Best room to reset, crawl, and repeat a familiar bedtime.","A car is the most flexible choice for this route.","Choose breakfast included; keep picnic food and simple dinner backup.","Use Bad Ischl or Salzburg for a wet-weather culture day.","Book a family room with crib, parking, and cancellation flexibility.","https://dachstein.salzkammergut.at/en"),
    tips: ["Choose lodging for space and quiet rather than lakefront prestige.","Confirm whether dinner requires reservations.","Keep one no-drive afternoon intact.","Use the clearest day for the highest elevation outing."], related: ["hallstatt","gosausee","wolfgangsee-schafberg"]
  },
  "hallstatt": {
    eyebrow: "Salzkammergut · Day 06", title: "Hallstatt at first light", dek: "The famous village is worth seeing—especially when you treat it as a beautiful morning rather than an all-day obligation.",
    tags: ["Early start", "Stroller possible", "Historic waterfront"], hero: photo(images.hallstatt,"Hallstatt on Hallstättersee","Hallstatt village reflected in its alpine lake"),
    facts: facts("3–5 hours", "Easy", "Walk + optional boat", "Gosau"),
    whyTitle: "See the icon without letting the crowd define it.", why: ["The village's position between steep rock and dark water is genuinely singular. Arriving early preserves the atmosphere that made the image famous in the first place.","A short waterfront loop, church lanes, viewpoint, and optional boat are enough. The route works because you leave before fatigue and crowd pressure accumulate."],
    note: ["Timing matters", "Arrive before breakfast buses.", "The earlier start is more valuable than adding another paid attraction."],
    gallery: [photo(images.hallstatt,"Waterfront classic","Hallstatt village and lake"),photo(images.hallstattAlt,"Lake-level perspective","Hallstatt beside Hallstättersee"),photo(images.dachstein,"Mountains above the village","Dachstein high country")],
    planIntro: "Use the first ninety minutes for the village itself, then decide between a boat, lakeside lunch, or an early retreat.",
    schedule: [["7:15 AM","Leave Gosau","Bring breakfast snacks so the departure does not depend on restaurant timing."],["7:45 AM","Waterfront walk","Start at the classic viewpoint, then move slowly through the village lanes."],["9:30 AM","Boat or quiet café","Choose water if conditions are calm; choose a café if the baby needs a longer reset."],["11:00 AM","Exit before peak","Return toward Gosau or continue to a quiet Hallstättersee picnic stop."]],
    practical: practical("Cobbles, slopes, and some steps; waterfront itself is manageable.","Compact stroller works; carrier is better for upper lanes and viewpoints.","Use designated parking and follow current signs; do not plan on village street access.","Early snack, then brunch away from the tightest tourist core.","Rain: museum, short church stop, and café; skip exposed viewpoints.","Boat or salt-mine tickets only if they fit the chosen version.","https://www.hallstatt.net/"),
    tips: ["Photograph the waterfront first; light and crowds change quickly.","Do not carry the stroller up unnecessary stair lanes.","Skip the salt mine on this version unless it is a top priority.","Leave while the visit still feels magical."], related: ["gosau-base","gosausee","dachstein"]
  },
  "gosausee": {
    eyebrow: "Salzkammergut · Day 07", title: "Gosausee, unhurried", dek: "Glacier reflections, an easy shoreline, and the rare alpine day where doing less produces the better memory.",
    tags: ["Essential", "Lake loop", "Picnic day"], hero: photo(images.gosausee,"Dachstein reflected in Gosausee","Gosausee lake beneath the Dachstein massif"),
    facts: facts("4–6 hours", "Easy to moderate", "Walk", "Gosau"),
    whyTitle: "The purest lake day of the route.", why: ["Gosausee compresses the visual language of the Alps into one frame: dark forest, clear water, limestone walls, and the Dachstein glacier at the end of the valley.","The accessible first-lake shoreline makes it adaptable. Walk the full loop when energy is good, or simply move between reflection points, picnic, and the water's edge."],
    note: ["My priority", "Give this day the calmest morning forecast.", "Still water and early light matter more than checking every trail."],
    gallery: [photo(images.gosausee,"Dachstein reflection","Gosausee and mountain reflection"),photo(images.gosauseeAlt,"Shoreline path","Walking beside Gosausee"),photo(images.dachstein,"The massif above","Dachstein mountain scenery")],
    planIntro: "Arrive before the main flow, walk only as far as the family is enjoying it, then settle into a long picnic rather than racing onward.",
    schedule: [["8:00 AM","Arrive at Vorderer Gosausee","Use the first clear water for photos and a quiet shoreline start."],["8:30 AM","Walk the lake","Take the flatter loop at conversation pace; pause at accessible shore points."],["11:00 AM","Picnic under the massif","Let the baby move on a safe blanket away from the path edge."],["12:30 PM","Optional lift or early finish","Only add elevation if visibility, energy, and timing all line up."]],
    practical: practical("Broad gravel sections with uneven patches; the core loop is approachable.","All-terrain stroller may work on main sections; carrier gives more freedom.","Short drive from Gosau; arrive early for the easiest parking.","Pack picnic food, then use the lakeside inn for a warm drink or dessert.","Low cloud: enjoy the lake anyway; heavy rain: pivot to Bad Ischl or Salzburg.","No booking for the shoreline; verify lift operations separately.","https://dachstein.salzkammergut.at/en/oesterreich-poi/detail/430001095/lake-gosau.html"),
    tips: ["Put the camera away for one complete shoreline stretch.","Bring a blanket and a warm baby layer.","Do not confuse the optional longer lake system with the essential front-lake loop.","Leave the afternoon open for naps and hotel time."], related: ["hallstatt","wolfgangsee-schafberg","dachstein"]
  },
  "wolfgangsee-schafberg": {
    eyebrow: "Salzkammergut · Day 08", title: "Wolfgangsee + Schafberg", dek: "A historic cog railway lifts the family from polished lake villages to a summit panorama in about thirty-five minutes.",
    tags: ["Cog railway", "Lake cruise", "Clear-sky day"], hero: photo(images.wolfgang,"Wolfgangsee beneath Schafberg","Wolfgangsee and Schafberg from above","Wikimedia Commons"),
    facts: facts("6–8 hours", "Easy with exposed summit", "Train + boat", "Gosau"),
    whyTitle: "The biggest view for the least hiking.", why: ["Schafberg turns a family-friendly rail ride into a genuine summit experience. From the top, a quilt of Salzkammergut lakes makes the geography of the whole trip suddenly visible.","The lake below gives the day a second texture: boat, swim, café, or village stroll. It can be ambitious in clear weather and gentle on the descent."],
    note: ["Weather rule", "Book the view, not just the train.", "If the summit is socked in, move this excursion to the clearest remaining day."],
    gallery: [photo(images.wolfgang,"The lake district revealed","Wolfgangsee and surrounding mountains","Wikimedia Commons"),photo(images.schafTrain,"Historic mountain railway","Schafbergbahn climbing above Wolfgangsee","Wikimedia Commons"),photo(images.schafberg,"Summit panorama","View from Schafberg")],
    planIntro: "Use a reserved morning train, leave time at the summit without a long hike, then let the lake determine the afternoon pace.",
    schedule: [["8:30 AM","Arrive in St. Wolfgang","Park, organize layers, and check the summit camera before boarding."],["9:15 AM","Ride the Schafbergbahn","Sit where the child is protected from direct sun and keep one warm layer accessible."],["10:00 AM","Summit viewpoints","Stay on the easiest paths and step back from exposed edges in wind."],["12:30 PM","Lake-level afternoon","Choose lunch, a ferry segment, a swim, or an early return to Gosau."]],
    practical: practical("Minimal walking required; summit paths are uneven and exposed.","Carrier at the summit; stroller can remain below or be used in town.","Drive to St. Wolfgang, then railway; optional lake ferry.","Reserve a practical lunch time or carry substantial snacks.","Cloud: Wolfgangsee boat and villages; rain: Salzburg or Bad Ischl.","Reserve Schafbergbahn seats and verify the 2026 timetable.","https://www.5schaetze.at/en/schafbergbahn.html"),
    tips: ["Check the live summit camera before leaving Gosau.","Bring wind protection even when the lake is warm.","Do not pair the summit with another major attraction.","A one-way ferry segment can be more fun than a full cruise."], related: ["gosausee","salzburg","dachstein"]
  },
  "dachstein": {
    eyebrow: "Salzkammergut · Flex day", title: "Dachstein—or culture", dek: "A visibility-dependent high-country day with caves and viewpoints, backed by a genuinely good low-cloud alternative.",
    tags: ["Cable car", "Caves", "Weather-dependent"], hero: photo(images.dachstein,"Dachstein high country","Rocky Dachstein mountain landscape"),
    facts: facts("5–7 hours", "Moderate", "Cable car + walk", "Gosau"),
    whyTitle: "Keep one day flexible enough to chase the sky.", why: ["Krippenstein supplies the route's most otherworldly terrain: high limestone plateau, deep views, and the option of giant ice and mammoth caves.","It is also the excursion most damaged by cloud. The itinerary works because Salzburg or Bad Ischl remains a satisfying alternative rather than a consolation prize."],
    note: ["Go / no-go", "Only commit when the upper mountain is visible.", "Use the official live conditions and do not let prepaid-ticket logic override the forecast."],
    gallery: [photo(images.dachstein,"High limestone terrain","Dachstein plateau"),photo(images.hallstattAlt,"Hallstättersee below","Hallstatt lake near the Dachstein"),photo(images.salzburgRiver,"Culture-day alternative","Salzburg across the Salzach","Wikimedia Commons")],
    planIntro: "Choose the version at breakfast. Clear sky means elevation; low cloud means culture, cafés, and a shorter day.",
    schedule: [["7:30 AM","Conditions check","Review mountain cameras, wind, cave operation, and the baby's energy."],["9:00 AM","Cable car ascent","Layer before boarding and acclimate slowly at the upper station."],["10:00 AM","One major objective","Choose viewpoints or one cave experience; do not force both."],["1:00 PM","Descend + recover","Lunch below, then keep the later afternoon unstructured."]],
    practical: practical("Uneven mountain paths, steps, cold cave interiors, and exposure.","Carrier required; caves may be too cold or long for the child on a marginal day.","Drive toward Obertraun and use the signed lift parking.","Carry snacks; eat a full lunch after descending.","Primary pivot: Bad Ischl or Salzburg culture day.","Reserve only flexible products and check current operating times.","https://www.dachstein-salzkammergut.com/en"),
    tips: ["Pick viewpoints or caves as the primary goal.","Pack gloves and a hat for the cave even in summer.","Keep the baby away from exposed edges and strong summit wind.","Use cloud as permission for a slower cultural day."], related: ["hallstatt","gosausee","salzburg"]
  },
  "salzburg": {
    eyebrow: "Austria · Culture stop", title: "Salzburg", dek: "Fortress views, river light, garden paths, and an elegant indoor-outdoor counterpoint to the lake days.",
    tags: ["Old town", "Rain-friendly", "Stroller possible"], hero: photo(images.salzburgRiver,"Salzburg across the Salzach","Old Town Salzburg and fortress across the river","Wikimedia Commons"),
    facts: facts("5–8 hours", "Easy", "Walk + funicular", "Gosau or Salzburg"),
    whyTitle: "The cultural day that never breaks the alpine mood.", why: ["Salzburg is compact enough to work as a weather pivot but rich enough to deserve the day even in sunshine. Fortress, domes, river, and mountain horizon keep it visually connected to the route.","Use gardens and riverside paths for movement, then select one major interior or elevated viewpoint instead of stacking museums."],
    note: ["Best balance", "One landmark, one long walk, one good meal.", "The city rewards rhythm more than an attraction checklist."],
    gallery: [photo(images.salzburgRiver,"Riverfront panorama","Salzburg old town from across the Salzach","Wikimedia Commons"),photo(images.salzburgView,"Fortress perspective","View over Salzburg from Hohensalzburg Fortress","Wikimedia Commons"),photo(images.salzburg,"Old town detail","Salzburg skyline")],
    planIntro: "Park once, cross the river on foot, and let weather determine whether the fortress or gardens come first.",
    schedule: [["9:00 AM","Mirabell + river","Start with open space and a stroller-friendly walk."],["10:30 AM","Old town lanes","Cross the Salzach, see the cathedral quarter, and pause for coffee."],["12:00 PM","Fortress or indoor anchor","Ride the funicular for views or choose a museum in rain."],["2:30 PM","Late lunch + return","Eat after the peak and leave before city fatigue builds."]],
    practical: practical("Mostly level walking with cobbles; funicular avoids the fortress climb.","Stroller works well in the core; carrier useful inside tight attractions.","Use a garage and walk; avoid moving the car between sights.","Plan one memorable sit-down lunch and flexible snacks.","Excellent rain option with museums, churches, cafés, and covered passages.","Fortress/funicular time if visiting in peak hours.","https://www.salzburg.info/en"),
    tips: ["Cross the river for the best skyline view.","Use Mirabell as the baby's movement reset.","Avoid combining fortress, palace, and multiple museums.","If this is the final Austria night, stay walkable to dinner."], related: ["wolfgangsee-schafberg","salzburg-kranjska","hallstatt"]
  },
  "salzburg-kranjska": {
    eyebrow: "Day 09 · Austria → Slovenia", title: "Salzburg → Kranjska Gora", dek: "A clean border-crossing drive that trades polished Austrian lakes for the sharper limestone of the Julian Alps.",
    tags: ["Scenic transfer", "Border day", "Village arrival"], hero: photo(images.jasnaWide,"Julian Alps above Lake Jasna","Lake Jasna near Kranjska Gora","Wikimedia Commons"),
    facts: facts("4–6 hours with stops", "Easy", "Rental car", "Kranjska Gora · night 1 of 2"),
    whyTitle: "The landscape changes before the distance feels long.", why: ["The route south is short enough to preserve a real afternoon in Slovenia. Approaching Kranjska Gora, the peaks narrow and sharpen, making the border feel like a genuine new chapter.","Keep the day simple. A final Salzburg morning or relaxed departure, one service stop, then Lake Jasna at golden hour is enough."],
    note: ["Arrival target", "Reach Kranjska before dinner.", "The next two days are stronger when groceries, parking, and the room are already sorted."],
    gallery: [photo(images.salzburg,"Austrian departure","Salzburg skyline"),photo(images.jasnaWide,"Slovenian arrival","Lake Jasna and Julian Alps","Wikimedia Commons"),photo(images.kranjska,"Village mountain setting","Kranjska Gora area")],
    planIntro: "The day should feel like a handoff: one final Austria moment, one well-timed drive, and one easy Slovenian reveal.",
    schedule: [["Morning","Slow Salzburg departure","Breakfast, short river walk, and load the car without rushing."],["11:00 AM","Drive south","Use the motorway section for nap timing and a single service stop."],["2:00 PM","Check in Kranjska Gora","Unload before sightseeing and identify dinner and grocery options."],["4:30 PM","Lake Jasna preview","Take a short shoreline walk and save the full excursion for tomorrow."]],
    practical: practical("Mainly driving with easy village walking.","Excellent car-nap day; schedule movement before and after the drive.","Confirm Slovenian vignette and cross-border rental coverage.","Breakfast in Salzburg; carry lunch backup; early dinner in Kranjska.","Rain: arrive early and use hotel/pool/café time.","Nothing beyond lodging and rental permissions.","https://www.kranjska-gora.si/en"),
    tips: ["Buy the Slovenian vignette through an official channel.","Do not add a long detour through Villach.","Save Vršič Pass for a fresh morning.","Check pass conditions for the next day at arrival."], related: ["salzburg","jasna-zelenci","vrsic-soca"]
  },
  "jasna-zelenci": {
    eyebrow: "Day 10 · Julian Alps", title: "Jasna + Zelenci", dek: "A clear-water day with mountain drama, boardwalks, picnic space, and almost no pressure to perform.",
    tags: ["Easy day", "Boardwalk", "Picnic-friendly"], hero: photo(images.jasnaWide,"Lake Jasna and the Julian Alps","Clear Lake Jasna beneath mountains","Wikimedia Commons"),
    facts: facts("4–6 hours", "Easy", "Short drives + walks", "Kranjska Gora"),
    whyTitle: "A gentle day with full-scale scenery.", why: ["Lake Jasna is immediately beautiful and easy to use: shoreline, views, café, and open space all sit close together. Zelenci adds a vivid spring and short boardwalk experience without demanding a hike.","Together they create the best reset before Vršič Pass—plenty to see, very little that can go wrong."],
    note: ["Family sweet spot", "This is the route's easiest outdoor day.", "Use it for laundry, groceries, naps, and an early night as well as scenery."],
    gallery: [photo(images.jasnaWide,"Mountain mirror","Lake Jasna and Julian Alps","Wikimedia Commons"),photo(images.jasna,"Picnic shoreline","Lake Jasna alpine picnic area"),photo(images.kranjska,"Kranjska Gora setting","Julian Alps near Kranjska Gora")],
    planIntro: "Visit Zelenci while the light is soft, then give Lake Jasna the long middle of the day without a rigid endpoint.",
    schedule: [["8:30 AM","Zelenci boardwalk","Use the short walk for quiet spring color before tour traffic."],["10:30 AM","Lake Jasna shoreline","Settle into an easy loop with photo and play stops."],["12:00 PM","Picnic + reset","Eat beside the lake and give the baby real ground time."],["2:00 PM","Village afternoon","Nap, groceries, laundry, and preparation for the pass day."]],
    practical: practical("Short boardwalk and easy shoreline surfaces.","Stroller-friendly in key areas; supervise closely beside water.","Very short drives from Kranjska Gora.","Picnic is ideal; cafés provide an easy backup.","Rain: shorten both stops and use the village/hotel.","No major booking; check parking and current reserve access.","https://www.kranjska-gora.si/en/attractions/zelenci-nature-reserve"),
    tips: ["Visit Zelenci before the main lake stop so the day expands naturally.","Bring a picnic blanket and water shoes only if useful.","Avoid turning the afternoon into another hike.","Pack the next day's pass bag before dinner."], related: ["salzburg-kranjska","vrsic-soca","lake-bled"]
  },
  "vrsic-soca": {
    eyebrow: "Day 11 · Julian Alps", title: "Vršič → Soča", dek: "The road crests through limestone switchbacks, then follows an almost unreal turquoise river toward Bovec and Bled.",
    tags: ["Scenic drive", "Carrier stops", "Route highlight"], hero: photo(images.soca,"The turquoise Soča River","Soča River flowing through a forested gorge"),
    facts: facts("7–9 hours with stops", "Moderate travel day", "Car + short walks", "Bled · night 1 of 2"),
    whyTitle: "The wildest line on the map.", why: ["Vršič Pass and the Soča Valley make the Slovenia extension feel essential rather than optional. The route shifts from high limestone road to emerald river, and every stop reveals a different scale.","It is a long scenic day, so restraint matters. Choose two river stops and one real meal; skip the urge to investigate every pullout."],
    note: ["Non-negotiable", "Only drive the pass in safe conditions.", "Rain, fog, closure, or car sickness are valid reasons to use the lower route."],
    gallery: [photo(images.vrsic,"Vršič switchbacks","Mountain road over Vršič Pass"),photo(images.soca,"Soča color","Turquoise Soča River"),photo(images.bovec,"Bovec valley","Mountain landscape near Bovec")],
    planIntro: "Leave early, stop selectively, and build the day around a long midday pause before the final drive to Bled.",
    schedule: [["8:00 AM","Begin Vršič Pass","Drive slowly, use signed pullouts, and avoid unnecessary roadside stops."],["10:00 AM","Upper Soča walk","Choose one safe, short river-access path with the carrier."],["12:00 PM","Bovec lunch","Take a real seated break and reassess everyone's energy."],["2:00 PM","Continue to Bled","Choose one final river stop, then prioritize arriving before dinner."]],
    practical: practical("Many short uneven paths; the driving itself can be tiring.","Carrier required at gorge stops. Plan for motion sickness and frequent safe breaks.","Mountain pass plus valley roads; verify seasonal conditions.","Carry snacks but protect a proper lunch in Bovec.","Bad weather: use the lower route via highways and save Soča for another trip.","No fixed activity booking; road conditions are the key check.","https://www.soca-valley.com/en/"),
    tips: ["Choose stops before departure so roadside temptation does not control the day.","Never stop outside marked pullouts on the pass.","Keep the final hour to Bled free of extra goals.","Carry spare clothes for river-edge mud and spray."], related: ["jasna-zelenci","lake-bled","bled-bohinj"]
  },
  "lake-bled": {
    eyebrow: "Day 12 · Slovenia", title: "Lake Bled", dek: "The icon works best as a slow lake day: island boat, castle angle, long shoreline, and cream cake without hurry.",
    tags: ["Lake loop", "Boat option", "Stroller-friendly"], hero: photo(images.bled,"Lake Bled and island church","Lake Bled with its island church and mountains"),
    facts: facts("5–7 hours", "Easy", "Walk + boat", "Bled · night 2 of 2"),
    whyTitle: "See the postcard, then stay for the rhythm.", why: ["Bled is famous for one view, but the full lake is what makes the day satisfying. Each shoreline angle changes the island, castle, and mountain backdrop.","A pletna boat is memorable but optional. The essential pieces are the loop, one elevated or castle view, and enough unplanned time for the lakeshore to feel like a holiday."],
    note: ["Best pace", "Do the lake before the attractions.", "Once the shoreline experience is complete, choose boat or castle based on energy—not obligation."],
    gallery: [photo(images.bled,"Island church","Lake Bled's island and church"),photo(images.vintgar,"Nearby gorge option","Vintgar Gorge boardwalk"),photo(images.bohinj,"The quieter companion lake","Lake Bohinj and Julian Alps")],
    planIntro: "Start on the quiet side of the lake, walk toward the classic viewpoints, and let lunch determine whether the afternoon includes a boat or castle.",
    schedule: [["8:30 AM","Begin the shoreline loop","Use the calm morning for reflections and the easiest stroller movement."],["10:30 AM","Boat or castle decision","Choose one paid centerpiece, not both by default."],["12:30 PM","Lunch + cream cake","Sit down, recharge, and give the baby time out of the stroller."],["2:30 PM","Slow final shore","Swim, park, or return for a hotel nap without another agenda."]],
    practical: practical("Mostly level lake path with some imperfect surfaces.","Stroller works well; carrier for steeper castle approaches.","Walk from lodging if possible; parking is the friction point.","Reserve a calm lunch and share cream cake later.","Rain: castle/museum, café, and short shoreline windows.","Boat only if desired; castle tickets can usually remain flexible.","https://www.bled.si/en/"),
    tips: ["Stay close enough to walk to the lake.","Carry a light blanket for a shore-side reset.","Do not pair Bled with a full Vintgar day after the long transfer.","See sunset only if it does not compromise bedtime."], related: ["vrsic-soca","bled-bohinj","bohinj-venice"]
  },
  "bled-bohinj": {
    eyebrow: "Slovenia · Lake pairing", title: "Bled + Bohinj", dek: "One lake gives the icon; the other gives the exhale. Together they create the strongest two-day finale.",
    tags: ["Two-day pairing", "Icon + quiet", "Flexible"], hero: photo(images.bohinj,"Lake Bohinj and the Julian Alps","Lake Bohinj below the Julian Alps"),
    facts: facts("2 days", "Easy", "Walk + short drive", "Bled / Bohinj"),
    whyTitle: "Do not make the two lakes compete.", why: ["Bled is polished, composed, and immediately recognizable. Bohinj is broader, quieter, and more natural. The route improves when each gets a different kind of day.","Use Bled for the boat, castle, and food ritual. Use Bohinj for shoreline time, a swim or ferry, and the sense that there is nowhere else to be."],
    note: ["The pairing", "Bled first, Bohinj second.", "The sequence moves from icon to calm and sets up the Venice transfer naturally."],
    gallery: [photo(images.bled,"The icon","Lake Bled island church"),photo(images.bohinj,"The exhale","Lake Bohinj and mountain views"),photo(images.bohinjShore,"Slow shoreline","Quiet Lake Bohinj shore")],
    planIntro: "Give each lake its own mood. Avoid crossing back and forth repeatedly or stacking the highlights into one rushed day.",
    schedule: [["Day 1 morning","Bled lake loop","Walk the shoreline before peak traffic."],["Day 1 afternoon","One Bled centerpiece","Choose island boat or castle, then stop."],["Day 2 morning","Bohinj shore","Move slowly beside the quieter water."],["Day 2 afternoon","Ferry, swim, or picnic","Pick the gentlest option before the airport transfer."]],
    practical: practical("Both support easy lake time; some trails become uneven.","Stroller at Bled; carrier adds flexibility at Bohinj.","About 30–40 minutes between lake areas depending on traffic.","Use Bled for restaurants, Bohinj for picnic simplicity.","Cloud is still atmospheric; heavy rain favors Bled indoor options.","Lodging first; activities can remain weather-flexible.","https://www.bohinj.si/en/"),
    tips: ["Do not visit Bohinj as a rushed add-on after a full Bled day.","Keep the second day lighter because Venice follows.","Choose lodging parking carefully.","Let water temperature and weather decide the swim."], related: ["lake-bled","bohinj-venice","vrsic-soca"]
  },
  "bohinj-venice": {
    eyebrow: "Day 13 · Slovenia → Italy", title: "Bohinj → Venice", dek: "A quiet final lake morning followed by the trip's longest practical move—and a deliberately boring airport night.",
    tags: ["Lake morning", "Border transfer", "Airport buffer"], hero: photo(images.bohinj,"Morning at Lake Bohinj","Lake Bohinj and the Julian Alps"),
    facts: facts("7–9 hours with stops", "Moderate travel day", "Car", "VCE airport · 1 night"),
    whyTitle: "Finish the scenery before solving the flight.", why: ["Bohinj gives the trip a calm emotional finish. A short shoreline morning feels complete without exhausting anyone before the drive.","Sleeping near Venice airport separates the beautiful trip from departure logistics. It removes the temptation to gamble on border traffic, fuel, rental return, and a transatlantic check-in in one morning."],
    note: ["Protect this choice", "The airport night is not wasted.", "It buys a calm final dinner, organized bags, and a safer departure morning."],
    gallery: [photo(images.bohinj,"Final alpine morning","Lake Bohinj and peaks"),photo(images.bohinjShore,"Quiet shore","Lake Bohinj shoreline"),photo(images.veniceBuffer,"Italian buffer","Coast and airport-buffer landscape near Venice")],
    planIntro: "Keep Bohinj short and beautiful, leave before lunch, and complete every car-return task before bedtime.",
    schedule: [["8:00 AM","Bohinj shoreline","One final walk, coffee, and family photo without a major excursion."],["10:30 AM","Depart Slovenia","Fuel the family and start the border drive before the day gets long."],["2:30 PM","Reach Venice area","Fuel the car, unload at the hotel, and complete the rental return if practical."],["5:30 PM","Airport-area dinner","Repack, confirm documents, and go to bed early."]],
    practical: practical("Easy morning plus several hours in the car.","Build one movement break into the drive and keep the last hotel uncluttered.","Bohinj to VCE; allow border, fuel, and rental-return margin.","Early picnic or lunch before the longest drive segment.","Rain: leave earlier and use the margin at the airport hotel.","Airport hotel, rental return plan, and any child-seat return instructions.","https://www.veneziaairport.it/en/"),
    tips: ["Photograph the rental car before return.","Keep pajamas and departure clothes outside the main suitcase.","Choose an airport hotel with a reliable shuttle or walkable terminal access.","Do not add Venice sightseeing to this version."], related: ["lake-bled","bled-bohinj","venice-flight"]
  },
  "venice-flight": {
    eyebrow: "Day 14 · Open-jaw home", title: "Venice → ATL", dek: "The payoff of the buffer night: a clean departure morning with no mountain road, border, or rental deadline left to solve.",
    tags: ["Departure day", "Airport buffer", "Open-jaw"], hero: photo(images.veniceFlight,"Departure from Venice","Aircraft departing Venice for the transatlantic flight"),
    facts: facts("Travel day", "Easy logistics", "Shuttle + flight", "Home"),
    whyTitle: "A calm exit validates the whole route.", why: ["Open-jaw planning prevents a full day of backtracking to Zürich or Munich. Venice converts the eastbound road line into a coherent journey.","The airport hotel means departure morning is only about people and bags. The car, border, and navigation tasks are already finished."],
    note: ["Success metric", "Reach the gate without needing the buffer.", "Extra time is the point; it should feel almost boring."],
    gallery: [photo(images.veniceBuffer,"Airport-area buffer","Venice-area landscape before departure"),photo(images.veniceFlight,"Flight home","Transatlantic departure aircraft"),photo(images.soca,"The route remembered","Turquoise Soča River from the journey")],
    planIntro: "Wake near the airport, use the simplest transfer, and keep documents and baby supplies separated from checked luggage.",
    schedule: [["Morning","Breakfast + final check","Confirm passports, infant document, boarding passes, and gate information."],["3 hours before","Reach terminal","Allow time for family security, stroller handling, and any desk-issued infant document."],["Boarding","Reset the cabin kit","Refill water, change the baby, and reorganize the first four hours of supplies."],["Flight","Reverse the sleep strategy","Use light, food, and naps to ease the return toward Eastern Time."]],
    practical: practical("Airport walking and a long seated flight.","Stroller through the terminal if permitted; keep carrier accessible.","Hotel shuttle or terminal walk—no rental car today.","Breakfast before security; carry dependable baby food.","Disruption: the airport location maximizes rebooking options.","Seats, infant ticket, and any bassinet request.","https://www.veneziaairport.it/en/"),
    tips: ["Keep one clean baby outfit for boarding.","Use the stroller until the last allowed handoff point.","Put house keys and arrival essentials in the cabin bag.","Do not check medication or critical baby food."], related: ["bohinj-venice","bled-bohinj","atl-zurich"]
  },
  "munich-flight": {
    eyebrow: "Austria-only route · Departure", title: "Salzburg → Munich", dek: "The practical Austria-only exit: a short westward transfer to a strong transatlantic gateway.",
    tags: ["Departure transfer", "Nonstop option", "Car return"], hero: photo(images.airport,"Munich Airport departure","Terminal exterior at Munich Airport"),
    facts: facts("4–6 hours before flight", "Moderate logistics", "Car", "Home"),
    whyTitle: "The sensible ending if Slovenia drops out.", why: ["Munich is close enough to Salzburg to preserve the eastbound Austria route without forcing a return to Zürich.","It is still safer with a later departure or airport night. A family should not pair the drive, fuel, rental return, and a very early long-haul check-in."],
    note: ["Flight rule", "Choose schedule margin over a perfect hotel night.", "If the nonstop is early, sleep at MUC."],
    gallery: [photo(images.salzburg,"Salzburg departure","Salzburg skyline"),photo(images.kaiser,"Bavarian-Tyrolean approach","Alpine mountains west of Salzburg"),photo(images.airport,"Munich gateway","Munich Airport terminal")],
    planIntro: "Match the transfer to the flight: same-day only for a comfortably late departure, airport hotel for anything early.",
    schedule: [["Option A","Airport night","Drive from Salzburg the afternoon before and return the car unhurried."],["Option B","Late flight","Leave Salzburg with at least two hours of road contingency."],["At MUC","Fuel + return","Complete the car return before entering the terminal."],["Terminal","Family buffer","Allow extra time for infant documents and stroller handling."]],
    practical: practical("Driving plus airport walking.","Use one deliberate movement stop before MUC.","Salzburg to Munich Airport, typically under two hours without disruption.","Eat before the airport if timing allows.","Traffic: airport night is the real backup.","Flight, airport hotel if needed, and rental return location.","https://www.munich-airport.com/"),
    tips: ["Do not book an early flight after a same-morning drive.","Verify whether the rental return requires terminal transfer.","Keep Austrian/German road charges resolved.","Refuel before the final airport approach."], related: ["salzburg","gosau-base","atl-zurich"]
  }
};
