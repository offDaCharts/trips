const asset = (path) => `../../../assets/${path}`;
const videoAt = (seconds) => `https://www.youtube.com/watch?v=iBSbD_7bvE8&t=${seconds}s`;
const mapAt = (lat, lon) => `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

const stops = [
  { id: "landmannalaugar", no: 1, name: "Landmannalaugar", chapter: 1, type: "highlands", lat: 63.983, lon: -19.067, image: asset("iceland-ring-road/landmannalaugar.jpg"), seconds: 28, summary: "Ryan’s opening vision: rust, green, and gold rhyolite ridges with hot springs and the start of the Laugavegur trail.", access: "F-road; appropriate 4×4 and live road check", time: "A full separate day; roughly 3½ hours from Reykjavík each way in Ryan’s account", family: "Base-area walks can work; long ridge hikes need a dedicated hiking day", role: "Highland expedition—not part of a normal Ring Road drive" },
  { id: "blahylur", no: 2, name: "Bláhylur / Hnausapollur", chapter: 1, type: "highlands", lat: 64.023, lon: -19.041, image: asset("iceland-ring-road/landmannalaugar.jpg"), seconds: 58, summary: "A vivid blue crater lake on the highland approach, shown as one of the scenic stops that makes the drive part of the experience.", access: "F-road; 4×4 rules and road condition checks apply", time: "Short viewpoint stop, but only inside a Highland day", family: "Easy once parked; exposure and wind matter", role: "Highland add-on near Landmannalaugar" },
  { id: "sigoldugljufur", no: 3, name: "Sigöldugljúfur", chapter: 1, type: "highlands", lat: 64.159, lon: -19.129, image: asset("iceland-ring-road/landmannalaugar.jpg"), seconds: 70, summary: "The blue-water, many-waterfall canyon Ryan calls one of Iceland’s most stunning spots—often nicknamed the Valley of Tears.", access: "Highland road access; verify route and vehicle eligibility", time: "Allow 1–2 hours inside the larger Highland day", family: "Viewpoint terrain rather than a roadside pull-off", role: "Second major Highland destination" },
  { id: "reykjadalur", no: 4, name: "Reykjadalur", chapter: 2, type: "detour", lat: 64.0234, lon: -21.2115, image: asset("iceland-sep-8-12/reykjadalur.jpg"), seconds: 101, summary: "A geothermal valley where the reward is a naturally warm river reached on foot—not a quick commercial spa stop.", access: "Paved access to Hveragerði trailhead, then hiking", time: "Ryan describes about 1 hour uphill; budget 3–4 hours round trip with a soak", family: "Good only if everyone is comfortable with a sustained climb and changing weather", role: "Southwest detour before or after the loop" },
  { id: "thorsmork", no: 5, name: "Þórsmörk", chapter: 3, type: "guided", lat: 63.68, lon: -19.49, image: asset("iceland-ring-road/thorsmork.jpg"), seconds: 134, summary: "A mossy mountain valley behind braided glacial rivers, explored by Ryan with a specialist super-jeep operator.", access: "Book a qualified Highland bus or super-jeep; do not improvise the river crossings", time: "Full guided day from the South Coast", family: "Operator age rules and child-seat availability must be confirmed", role: "Specialist adventure day—not a rental-car stop" },
  { id: "seljalandsfoss", no: 6, name: "Seljalandsfoss", chapter: 4, type: "core", lat: 63.6156, lon: -19.9886, image: asset("iceland-golden-circle-south-coast-days/day-07-transfer-south-via-seljalandsfoss.jpg"), seconds: 199, summary: "The curtain waterfall whose trail can wrap behind the falling water—one of the film’s cleanest Route 1 wins.", access: "Very close to Route 1; paid parking", time: "45–75 minutes including nearby Gljúfrabúi", family: "Wet, slippery path behind the falls; rain gear essential", role: "Core South Coast stop" },
  { id: "skogafoss", no: 7, name: "Skógafoss", chapter: 5, type: "core", lat: 63.5321, lon: -19.5114, image: asset("iceland-golden-circle-south-coast-days/day-08-skogafoss-and-reynisfjara-viewing-day.jpg"), seconds: 224, summary: "A monumental, easily reached waterfall with a staircase to the upper viewpoint and the start of a longer waterfall trail.", access: "Immediate Route 1 access", time: "45 minutes at the base; 90+ with stairs or trail", family: "Excellent base view; stairs are optional", role: "Core South Coast stop" },
  { id: "reynisfjara", no: 8, name: "Reynisfjara", chapter: 5, type: "core", lat: 63.404, lon: -19.044, image: asset("iceland-golden-circle-south-coast-days/day-09-jokulsarlon-decision-or-vik-slow-day.jpg"), seconds: 245, summary: "Black sand, basalt columns, sea stacks, and powerful Atlantic surf—the South Coast image that demands the most discipline.", access: "Paved access near Vík; obey the live beach warning system", time: "45–75 minutes", family: "Keep children well back from the water; sneaker waves are lethal", role: "Core South Coast stop" },
  { id: "fjadrargljufur", no: 9, name: "Fjaðrárgljúfur", chapter: 5, type: "detour", lat: 63.7713, lon: -18.1718, image: asset("iceland-sep-8-12/fjadrargljufur.jpg"), seconds: 271, summary: "A serpentine moss-lined canyon seen from a managed rim trail—the film’s last major South Coast landscape before glacier country.", access: "Short paved/gravel spur from Route 1; respect closures", time: "60–90 minutes", family: "Managed path, but keep close control at exposed viewpoints", role: "Short South Coast spur" },
  { id: "svinafellsjokull", no: 10, name: "Svínafellsjökull", chapter: 6, type: "core", lat: 64.0165, lon: -16.9665, image: asset("iceland-sep-8-12/svinafellsjokull.jpg"), seconds: 307, summary: "A close view into blue, crevassed glacier ice on the edge of Vatnajökull, shown by Ryan as part of Iceland’s otherworldly glacier belt.", access: "Use open, marked viewpoints; never enter glacier terrain without a guide", time: "45–90 minutes depending on current access", family: "Viewing works; any ice walk must be booked and age-appropriate", role: "Core glacier-country stop" },
  { id: "jokulsarlon", no: 11, name: "Jökulsárlón + Diamond Beach", chapter: 6, type: "core", lat: 64.0484, lon: -16.179, image: asset("iceland-golden-circle-south-coast-days/day-10-south-coast-weather-buffer.jpg"), seconds: 329, summary: "Icebergs drift through a lagoon and wash onto black sand across the road—two distinct experiences in one stop.", access: "Directly on Route 1", time: "1½–3 hours; more with a booked boat tour", family: "Easy viewing, but stay off floating ice and supervise at the surf", role: "The eastern anchor of a short South Coast trip" },
  { id: "stokksnes", no: 12, name: "Stokksnes / Vestrahorn", chapter: 7, type: "detour", lat: 64.2446, lon: -14.964, image: asset("iceland-ring-road/stokksnes.jpg"), seconds: 353, summary: "Sharp Vestrahorn peaks rise directly behind black dunes and tidal reflections—Ryan’s defining southeast mountain scene.", access: "Private access road and admission near Höfn", time: "1½–2½ hours if light and tide cooperate", family: "Easy beach wandering; strong wind can make it unpleasant", role: "High-value southeast spur" },
  { id: "eystrahorn", no: 13, name: "Eystrahorn / Hvalnes", chapter: 7, type: "core", lat: 64.416, lon: -14.53, image: asset("iceland-ring-road/stokksnes.jpg"), seconds: 374, summary: "A quieter horn-shaped mountain and black coast northeast of Höfn, paired with Vestrahorn in Ryan’s mountain sequence.", access: "Route 1 coastal pull-offs; park only where safe", time: "30–60 minutes", family: "Easy scenic stop in fair conditions", role: "Core southeast road scenery" },
  { id: "hengifoss", no: 14, name: "Hengifoss + Litlanesfoss", chapter: 8, type: "detour", lat: 65.095, lon: -14.89, image: asset("iceland-ring-road/hengifoss.jpg"), seconds: 396, summary: "A tall waterfall striped by red volcanic layers, with basalt-column Litlanesfoss appearing along the climb.", access: "Paved East Iceland approach, then a steady uphill trail", time: "Ryan says roughly 30 minutes uphill; allow 2–3 hours with stops", family: "A real hike; wind and muddy footing can slow a family", role: "Major East Iceland inland spur" },
  { id: "seydisfjordur", no: 15, name: "Seyðisfjörður", chapter: 8, type: "detour", lat: 65.26, lon: -14.01, image: asset("iceland-ring-road/seydisfjordur.jpg"), seconds: 428, summary: "A compact fjord village reached over a mountain pass, surrounded by waterfalls and remembered for its rainbow street and blue church.", access: "Paved mountain pass from Egilsstaðir; check wind and road status", time: "Half day from the Ring Road hub", family: "Easy in town; the pass is the weather variable", role: "Eastfjord out-and-back" },
  { id: "studlagil", no: 16, name: "Stuðlagil Canyon", chapter: 8, type: "detour", lat: 65.163, lon: -15.307, image: asset("iceland-ring-road/hengifoss.jpg"), seconds: 454, summary: "Turquoise glacial water cuts through towering basalt columns. Ryan preferred the longer east-side approach over the west viewing platform.", access: "Two different access sides; research the current trail and parking before choosing", time: "2–4 hours for the fuller east-side experience", family: "West viewpoint is simpler; east side is the more committing walk", role: "Northeast interior spur" },
  { id: "dettifoss", no: 17, name: "Dettifoss", chapter: 9, type: "detour", lat: 65.8147, lon: -16.384, image: asset("iceland-ring-road/dettifoss.jpg"), seconds: 497, summary: "A thunderous wall of gray glacial water in the Jökulsárgljúfur canyon—Ryan’s headline waterfall of the north.", access: "Choose east or west approach deliberately; road surfaces and seasonal access differ", time: "Ryan notes about a 1 km walk on the west side; allow 1½–2 hours", family: "Hold children close on wet rock and exposed canyon edges", role: "Essential northeast detour" },
  { id: "hafragilsfoss", no: 18, name: "Hafragilsfoss", chapter: 9, type: "detour", lat: 65.833, lon: -16.399, image: asset("iceland-ring-road/dettifoss.jpg"), seconds: 524, summary: "A second broad waterfall and canyon overlook just downstream, included by Ryan as the quieter companion to Dettifoss.", access: "Road and viewpoint access vary by side and conditions", time: "Add 30–60 minutes to a Dettifoss outing", family: "Exposed canyon terrain; close supervision", role: "Companion stop to Dettifoss" },
  { id: "myvatn", no: 19, name: "Lake Mývatn", chapter: 9, type: "core", lat: 65.603, lon: -17.0, image: asset("iceland-ring-road/myvatn.jpg"), seconds: 540, summary: "A volcanic lake district of pseudocraters, lava formations, geothermal color, and birdlife—better treated as a base than one pin.", access: "On the Ring Road; individual sights are spread around the lake", time: "At least half a day; one full day is better", family: "Many short, modular walks make this one of the best family regions", role: "Core North Iceland base" },
  { id: "godafoss", no: 20, name: "Goðafoss", chapter: 9, type: "core", lat: 65.6828, lon: -17.5502, image: asset("iceland-ring-road/godafoss.jpg"), seconds: 555, summary: "A graceful horseshoe cascade that Ryan frames as one of the north’s most beautiful—and one of the easiest major falls to reach.", access: "Directly beside Route 1 with paths on both banks", time: "45–75 minutes", family: "Easy paths, but still supervise near wet edges", role: "Core north stop" },
  { id: "akureyri", no: 21, name: "Eyjafjörður + Akureyri", chapter: 9, type: "core", lat: 65.68, lon: -18.1, image: asset("iceland-ring-road/godafoss.jpg"), seconds: 576, summary: "The long northern fjord and Iceland’s second-largest urban center provide services, food, and a practical pause between wild regions.", access: "On the Ring Road", time: "Half day or overnight base", family: "The easiest reset point on the full loop without sacrificing sightseeing", role: "Core north logistics hub" },
  { id: "kirkjufell", no: 22, name: "Kirkjufell + Kirkjufellsfoss", chapter: 10, type: "detour", lat: 64.927, lon: -23.307, image: asset("iceland-ring-road/kirkjufell.jpg"), seconds: 578, summary: "The arrowhead mountain and its foreground waterfalls form Ryan’s signature west-Iceland composition.", access: "Paved Snæfellsnes roads; designated parking only", time: "45–90 minutes, longer if waiting for light", family: "Easy viewpoint; crossing/parking discipline matters", role: "Far-west peninsula detour" },
  { id: "bjarnarfoss", no: 23, name: "Bjarnarfoss", chapter: 10, type: "detour", lat: 64.84, lon: -23.402, image: asset("iceland-ring-road/kirkjufell.jpg"), seconds: 612, summary: "A tall ribbon waterfall spilling from the mountain wall near Búðir, used in the film to show how dense Snæfellsnes is with scenery.", access: "Paved peninsula route and a short approach", time: "30–60 minutes", family: "Straightforward stop in manageable wind", role: "South Snæfellsnes stop" },
  { id: "arnarstapi", no: 24, name: "Arnarstapi coast", chapter: 10, type: "detour", lat: 64.77, lon: -23.62, image: asset("iceland-golden-circle-south-coast-days/day-12-arnarstapi-and-kirkjufell-coast-day.jpg"), seconds: 630, summary: "Sea arches, lava cliffs, stacks, and a coastal path supply the peninsula’s most rewarding walk and the film’s final wild shoreline.", access: "Paved road; established coastal paths", time: "1½–3 hours depending on how far you walk", family: "Excellent walk, with continuous supervision at cliff edges", role: "Snæfellsnes coastal anchor" }
].map((stop) => ({ ...stop, mapUrl: mapAt(stop.lat, stop.lon), videoUrl: videoAt(stop.seconds) }));

const chapters = [
  { no: 1, title: "The Highlands", time: "00:28", ids: ["landmannalaugar", "blahylur", "sigoldugljufur"], summary: "Three extraordinary interior landscapes that are geographically coherent—but operationally separate from a standard rental-car loop.", verdict: "Best treated as one 4×4 or guided expedition day." },
  { no: 2, title: "Reykjadalur", time: "01:41", ids: ["reykjadalur"], summary: "A southwest hike-and-soak that fits before the South Coast or after completing the circle.", verdict: "A half day, not a roadside warm-up." },
  { no: 3, title: "Þórsmörk", time: "02:14", ids: ["thorsmork"], summary: "Ryan’s super-jeep chapter reaches one of Iceland’s finest hiking valleys across serious glacial rivers.", verdict: "Book a specialist; do not make it a DIY rental-car detour." },
  { no: 4, title: "Seljalandsfoss", time: "03:19", ids: ["seljalandsfoss"], summary: "The clean transition from southwest Iceland to the waterfall-rich South Coast.", verdict: "A genuine Route 1 core stop." },
  { no: 5, title: "Southern Iceland", time: "03:44", ids: ["skogafoss", "reynisfjara", "fjadrargljufur"], summary: "Waterfall, black beach, and green canyon—the compact chapter that gives a short Iceland trip its strongest visual return.", verdict: "The best region for four nights." },
  { no: 6, title: "Glacier country", time: "05:07", ids: ["svinafellsjokull", "jokulsarlon"], summary: "Blue glacier texture and iceberg lagoons extend the South Coast from Vík into a much longer eastward drive.", verdict: "Keep both on a full loop; Jökulsárlón is the priority on a short trip." },
  { no: 7, title: "Stokksnes", time: "05:53", ids: ["stokksnes", "eystrahorn"], summary: "The southeast horns are a landscape-photography chapter built around tide, reflection, black sand, and sharp peaks.", verdict: "Stay near Höfn so this does not become another rushed pull-off." },
  { no: 8, title: "Eastern Iceland", time: "06:36", ids: ["hengifoss", "seydisfjordur", "studlagil"], summary: "Three excellent places that pull in different directions from Egilsstaðir: south, east over the pass, and north toward the canyon.", verdict: "This chapter alone deserves two nights; choose two stops if moving fast." },
  { no: 9, title: "Northern Iceland", time: "08:17", ids: ["dettifoss", "hafragilsfoss", "myvatn", "godafoss", "akureyri"], summary: "The largest chapter combines a major canyon detour, a volcanic-lake base, an easy waterfall, and the north’s logistical hub.", verdict: "Give Mývatn and Akureyri separate nights." },
  { no: 10, title: "Snæfellsnes", time: "09:38", ids: ["kirkjufell", "bjarnarfoss", "arnarstapi"], summary: "A peninsula-sized finale west of the Ring Road: iconic mountain, waterfalls, lava coast, and cliff walks.", verdict: "A full extra day—and preferably two nights—not a closing-hour detour." }
];

const commons = (title) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(title.replaceAll(" ", "_"))}`;
const deepDives = [
  {
    stopId: "landmannalaugar", label: "The full Highland experience", verdict: "Spectacular—but it consumes one of four Iceland days by itself.",
    experience: "The base area combines the Laugahraun lava field, steaming ground, a bathing river, and close-up views of rhyolite mountains. The most realistic family visit is a short lava-field loop plus the hot pool; Bláhnúkur or Brennisteinsalda turns it into a proper mountain hike.",
    plan: ["Treat the drive, the crater stops, and the base hike as one complete day.", "Use a Highland bus or a rental specifically approved for the roads you choose.", "A parking reservation may be required during the managed summer period; re-check the 2026 system."],
    facts: { "Visit time": "6–10 hours from a South Iceland base", "Effort": "Easy base wandering to strenuous summit hikes", "With children": "Best with the short lava-field walk and soak", "September": "Fully condition-dependent; never assume F-road access" },
    official: "https://www.south.is/en/destinations/nature/national-parks-and-nature-reserves/national-parks/landmannalaugar-nature-reserve",
    photos: [
      { src: asset("iceland-ring-road/landmannalaugar.jpg"), caption: "The colored mountains that make the detour worthwhile" },
      { src: asset("iceland-ring-road/deep-dives/landmannalaugar-2.jpg"), caption: "Lava, pale ridges, and the broad base valley", source: commons("Landmannalaugar 02.jpg") },
      { src: asset("iceland-ring-road/deep-dives/landmannalaugar-3.jpg"), caption: "The landscape changes color with every ridge", source: commons("Iceland 2022 08 04 Landmannalaugar landscape.jpg") }
    ]
  },
  {
    stopId: "blahylur", label: "The crater-lake interruption", verdict: "Keep it only when already driving to Landmannalaugar.",
    experience: "Hnausapollur—also called Bláhylur—is a water-filled explosion crater beside the Highland route. The payoff is immediate: climb from the parking area to see blue water contained by dark and rust-colored walls, with open Fjallabak country behind it.",
    plan: ["Stop on the Landmannalaugar approach; it is not worth a standalone day.", "Walk only the safe, obvious rim section rather than chasing a full circuit.", "Expect stronger wind on the exposed lip than at the parking area."],
    facts: { "Visit time": "30–60 minutes", "Effort": "Short, uneven uphill viewpoint walk", "With children": "Carrier or firm hand-holding at the exposed rim", "September": "Same F-road decision as the larger Highland day" },
    official: "https://www.south.is/en/destinations/nature/the-highlands/fishing-in-landmannaafrettur",
    photos: [
      { src: asset("iceland-ring-road/deep-dives/blahylur-2.jpg"), caption: "The entire crater reads clearly from the rim", source: commons("F208 Hnausapollur Crater panoramic.JPG") },
      { src: asset("iceland-ring-road/deep-dives/blahylur-3.jpg"), caption: "Blue water against rust-red volcanic slopes", source: commons("Bláhylur - Hnausapollur - Flickr - fabsit.jpg") },
      { src: asset("iceland-ring-road/landmannalaugar.jpg"), caption: "The broader Fjallabak landscape beyond the crater" }
    ]
  },
  {
    stopId: "sigoldugljufur", label: "The Valley of Tears", verdict: "The strongest second stop in a dedicated Highland day.",
    experience: "A surprisingly vivid canyon where multiple springs and falls drop through mossy walls into clear blue water. Unlike the immense South Coast waterfalls, the appeal is the density of small cascades and the elevated view along the gorge.",
    plan: ["Combine it with Hnausapollur and Landmannalaugar—not with a packed Route 1 day.", "Allow time for the unpaved approach and the walk from the parking area.", "Stay on established ground; the canyon edge is fragile and exposed."],
    facts: { "Visit time": "60–90 minutes", "Effort": "Short exposed walk on rough ground", "With children": "Good with close supervision well back from edges", "September": "Road and wind checks decide whether it stays in the plan" },
    official: "https://umferdin.is/en",
    photos: [
      { src: asset("iceland-ring-road/deep-dives/sigoldugljufur-2.jpg"), caption: "Spring-fed cascades lining the canyon wall", source: commons("View of Sigöldugljúfur.jpg") },
      { src: asset("iceland-ring-road/deep-dives/sigoldugljufur-3.jpg"), caption: "The long blue channel through Highland rock", source: commons("View of Sigöldugljúfur and canyon.jpg") },
      { src: asset("iceland-ring-road/landmannalaugar.jpg"), caption: "A reminder that this is part of a larger Highland expedition" }
    ]
  },
  {
    stopId: "reykjadalur", label: "The hike-to-a-hot-river day", verdict: "A compelling half day if the family wants the hike as much as the soak.",
    experience: "This is not a roadside hot spring. The trail climbs above Hveragerði past steaming ground, mud pots, and open valley views before reaching a boardwalk beside the bathing section of the river. Water temperature changes along the channel, so you choose your spot.",
    plan: ["Carry swimwear, towels, dry layers, water, and a bag for wet gear.", "There are no conventional changing rooms at the river; arrive ready to manage outside.", "Check the trail status and stay on the path—the geothermal ground and vegetation are fragile."],
    facts: { "Visit time": "3–4 hours including a soak", "Effort": "About an hour uphill each way at a family pace", "With children": "Carrier for a small child; exposed in poor weather", "September": "Excellent in calm weather, miserable in wind-driven rain" },
    official: "https://www.south.is/en/destinations/nature/nature/reykjadalur-valley",
    photos: [
      { src: asset("iceland-sep-8-12/reykjadalur.jpg"), caption: "The open geothermal valley above Hveragerði" },
      { src: asset("iceland-ring-road/deep-dives/reykjadalur-2.jpg"), caption: "The trail follows steam and green slopes into the valley", source: commons("Reykjadalur Valley, Iceland, 20230502 1407 4227.jpg") },
      { src: asset("iceland-ring-road/deep-dives/reykjadalur-3.jpg"), caption: "Geothermal color is part of the walk—not just the river", source: commons("Hot spring, Reykjadalur Valley, Iceland, 20230502 1415 4240.jpg") }
    ]
  },
  {
    stopId: "thorsmork", label: "The guided glacial-river adventure", verdict: "Choose this instead of Landmannalaugar—not in addition—on a short trip.",
    experience: "Þórsmörk is a protected green valley between glaciers, full of birch, ravines, braided rivers, and elevated viewpoints. The journey is part of the activity: large buses and super-jeeps cross changing glacial channels that ordinary rentals should never attempt.",
    plan: ["Book transport that explicitly enters Þórsmörk and confirm the exact drop-off area.", "Choose one short viewpoint hike rather than attempting the long Laugavegur or Fimmvörðuháls routes.", "Confirm child-seat, minimum-age, pickup, and cancellation rules with the operator."],
    facts: { "Visit time": "A full guided day", "Effort": "Flexible once inside; short overlooks to major hikes", "With children": "Potentially excellent with the right operator and short trail", "September": "River levels and weather control access—even for specialists" },
    official: "https://www.south.is/en/destinations/nature/recreation-areas/thorsmork",
    photos: [
      { src: asset("iceland-ring-road/thorsmork.jpg"), caption: "Green ridges divided by braided glacial water" },
      { src: asset("iceland-ring-road/deep-dives/thorsmork-2.jpg"), caption: "The sheltered valley feels unusually lush for Iceland", source: commons("Þórsmörk.jpeg") },
      { src: asset("iceland-ring-road/deep-dives/thorsmork-3.jpg"), caption: "Higher trails reveal the glaciers surrounding the reserve", source: commons("Trail between Thorsmork and Fimmvorduhals, Iceland 03.jpg") }
    ]
  },
  {
    stopId: "seljalandsfoss", label: "The waterfall you walk behind", verdict: "Absolutely keep it—it is the cleanest high-impact stop from Reykjavík.",
    experience: "The defining experience is the loop behind the 60-metre curtain, where the coastal plain appears through falling water. The visit becomes more complete by continuing roughly 500 metres toward Gljúfrabúi, a second waterfall tucked inside a narrow cleft.",
    plan: ["Wear full rain gear and shoes with grip; the loop is wet even on a sunny day.", "Walk the behind-the-falls path only if it is open and comfortable for everyone.", "Add Gljúfrabúi, but expect wet feet if entering the narrow gorge."],
    facts: { "Visit time": "60–90 minutes with Gljúfrabúi", "Effort": "Short walk; slippery and uneven behind the falls", "With children": "Base view is easy; carry or firmly hold on the loop", "September": "Usually straightforward, but spray and wind magnify the cold" },
    official: "https://www.south.is/en/destinations/travel-routes/the-south-coast",
    photos: [
      { src: asset("iceland-golden-circle-south-coast-days/day-07-transfer-south-via-seljalandsfoss.jpg"), caption: "The full drop from the former sea cliff" },
      { src: asset("iceland-ring-road/deep-dives/seljalandsfoss-2.jpg"), caption: "The narrow curtain and green amphitheater up close", source: commons("Seljalandsfoss Waterfall, Iceland, 20240720 1455 3078.jpg") },
      { src: asset("iceland-ring-road/deep-dives/seljalandsfoss-3.jpg"), caption: "The coastal plain opens beyond the falls", source: commons("Seljalandsfoss Waterfall, Iceland, 20240720 1522 3138.jpg") }
    ]
  },
  {
    stopId: "skogafoss", label: "The power-and-staircase stop", verdict: "Keep the base view; choose the stairs according to energy and weather.",
    experience: "Skógafoss is unusually direct: from the car park, you walk across flat ground until a 60-metre wall of water fills the view. A long staircase climbs beside it to the upper platform, where the Skógá River begins the waterfall-rich trail inland.",
    plan: ["Start at the base before the staircase—the scale and rainbow spray are the main event.", "The official tourism guide counts 428 steps; budget more time than the map suggests.", "If crowds are heavy, nearby Kvernufoss offers a quieter short walk."],
    facts: { "Visit time": "45 minutes at the base; 90–120 with the top", "Effort": "Flat base or a steep 428-step climb", "With children": "Excellent at the base; use judgment on the stairs", "September": "Reliable, but the top can be extremely windy" },
    official: "https://www.south.is/en/travel-info/newsblog/best-waterfalls-in-south-iceland",
    photos: [
      { src: asset("iceland-golden-circle-south-coast-days/day-08-skogafoss-and-reynisfjara-viewing-day.jpg"), caption: "The classic ground-level encounter" },
      { src: asset("iceland-ring-road/deep-dives/skogafoss-2.jpg"), caption: "A broad view shows the falls against the old sea cliffs", source: commons("Skógafoss July 2014.JPG") },
      { src: asset("iceland-ring-road/deep-dives/skogafoss-3.jpg"), caption: "The upper river and viewing route begin above the drop", source: commons("Skógafoss Waterfall, Iceland, 20240720 1318 2975.jpg") }
    ]
  },
  {
    stopId: "reynisfjara", label: "The black-beach landscape", verdict: "Visually essential, but visit it as a viewpoint—not a beach day.",
    experience: "Reynisfjara compresses black sand, geometric basalt columns, a shallow cave, and the Reynisdrangar sea stacks into one frame. The attraction is the geology and the stormy Atlantic atmosphere; the water is the hazard, not the activity.",
    plan: ["Read the warning sign and live warning light before walking onto the beach.", "Stay far back from the water regardless of what other visitors are doing.", "Do not linger inside the cave under unstable rock, and never climb the basalt in bad conditions."],
    facts: { "Visit time": "45–75 minutes", "Effort": "Easy sand and pebble walking", "With children": "Hand-holding distance from the car onward", "September": "Open year-round; surf warnings can make the safe area very small" },
    official: "https://www.visiticeland.com/article/reynisfjara-black-sand-beach-is-dangerous/",
    photos: [
      { src: asset("iceland-golden-circle-south-coast-days/day-09-jokulsarlon-decision-or-vik-slow-day.jpg"), caption: "Basalt columns and Atlantic surf at the cliff line" },
      { src: asset("iceland-ring-road/deep-dives/reynisfjara-2.jpg"), caption: "The beach and Reynisdrangar sea stacks", source: commons("Reynisfjara and Reynisdrangar, Iceland.jpg") },
      { src: asset("iceland-ring-road/deep-dives/reynisfjara-3.jpg"), caption: "Dark sand, textured cliffs, and shifting surf", source: commons("Reynisfjara, Iceland, 20230501 1641 4049.jpg") }
    ]
  },
  {
    stopId: "fjadrargljufur", label: "The canyon-rim walk", verdict: "A strong turnaround for a short South Coast trip; Jökulsárlón requires going much farther.",
    experience: "A managed trail follows the upper edge of a winding, moss-covered gorge toward several progressively stronger views. Visit South Iceland describes the canyon as roughly two kilometres long and up to 100 metres deep, carved into palagonite rock.",
    plan: ["Follow the signed upper path and use the formal viewing platforms.", "Do not descend into closed areas or cross barriers for a photo.", "Because it is about six kilometres off Route 1, it works neatly between Vík and Kirkjubæjarklaustur."],
    facts: { "Visit time": "60–90 minutes", "Effort": "Moderate uphill rim path", "With children": "Good with close edge awareness or a carrier", "September": "Generally accessible by ordinary car; closures still override the plan" },
    official: "https://www.south.is/en/destinations/nature/geopark/fjadrargljufur-canyon",
    photos: [
      { src: asset("iceland-sep-8-12/fjadrargljufur.jpg"), caption: "The serpentine river and moss-covered walls" },
      { src: asset("iceland-ring-road/deep-dives/fjadrargljufur-2.jpg"), caption: "The upper trail reveals the full canyon geometry", source: commons("Fjaðrárgljúfur (Unsplash).jpg") },
      { src: asset("iceland-ring-road/deep-dives/fjadrargljufur-3.jpg"), caption: "A closer look at the narrow gorge and rim", source: commons("Fjaðrárgljúfur 01.jpg") }
    ]
  }
];

const typeNames = { core: "Ring Road core", detour: "Major detour", highlands: "4×4 / F-road", guided: "Guided access" };
const markers = new Map();
const map = L.map("ring-map", { scrollWheelZoom: false, zoomControl: false }).setView([64.86, -18.6], 6);
L.control.zoom({ position: "topright" }).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);

const ringRoad = [
  [64.1466,-21.9426],[63.999,-21.19],[63.6156,-19.9886],[63.5321,-19.5114],[63.42,-18.99],[63.77,-18.17],[64.016,-16.966],[64.048,-16.179],[64.254,-15.208],[64.416,-14.53],[65.267,-14.395],[65.52,-14.5],[65.603,-17.0],[65.683,-17.55],[65.68,-18.1],[65.66,-20.28],[64.544,-21.91],[64.1466,-21.9426]
];
L.polyline(ringRoad, { color: "#173035", weight: 5, opacity: .75 }).addTo(map);
const spurStyle = { color: "#d66d47", weight: 2.5, opacity: .75, dashArray: "7 7" };
[
  [[64.544,-21.91],[64.84,-23.402],[64.77,-23.62],[64.927,-23.307],[64.544,-21.91]],
  [[65.267,-14.395],[65.26,-14.01]], [[65.267,-14.395],[65.095,-14.89]], [[65.267,-14.395],[65.163,-15.307]],
  [[65.603,-17.0],[65.8147,-16.384],[65.833,-16.399]],
  [[63.6156,-19.9886],[63.68,-19.49]], [[63.999,-21.19],[64.0234,-21.2115]],
  [[63.82,-20.0],[64.159,-19.129],[64.023,-19.041],[63.983,-19.067]]
].forEach((line) => L.polyline(line, spurStyle).addTo(map));

function markerIcon(stop) {
  return L.divIcon({ className: "", html: `<div class="map-pin ${stop.type}"><span>${String(stop.no).padStart(2, "0")}</span></div>`, iconSize: [31,31], iconAnchor: [15,28] });
}

function detailMarkup(stop) {
  const deepLink = deepDives.some((item) => item.stopId === stop.id) ? `<a href="#deep-${stop.id}">More photos + full detail ↓</a>` : "";
  return `<img class="detail-image" src="${stop.image}" alt="${stop.name} landscape" />
    <div class="detail-body">
      <div class="detail-topline"><span class="type-badge ${stop.type}">${typeNames[stop.type]}</span><span class="chapter-time">${String(stop.no).padStart(2,"0")} · ${formatTime(stop.seconds)}</span></div>
      <h3>${stop.name}</h3><p class="detail-summary">${stop.summary}</p>
      <dl class="detail-facts"><div><dt>Access</dt><dd>${stop.access}</dd></div><div><dt>Time</dt><dd>${stop.time}</dd></div><div><dt>With kids</dt><dd>${stop.family}</dd></div><div><dt>Route role</dt><dd>${stop.role}</dd></div></dl>
      <div class="detail-links"><a href="${stop.mapUrl}" target="_blank" rel="noreferrer">Open in Google Maps ↗</a><a href="${stop.videoUrl}" target="_blank" rel="noreferrer">Watch this chapter ↗</a>${deepLink}</div>
    </div>`;
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;
}

function selectStop(stop, pan = true) {
  document.getElementById("pin-detail").innerHTML = detailMarkup(stop);
  document.querySelectorAll("#region-rail button").forEach((button) => button.classList.toggle("active", button.dataset.id === stop.id));
  if (pan) map.flyTo([stop.lat, stop.lon], Math.max(map.getZoom(), 8), { duration: .65 });
}

function buildMarkers(visibleStops = stops, fit = true) {
  markers.forEach((marker) => map.removeLayer(marker));
  markers.clear();
  visibleStops.forEach((stop) => {
    const marker = L.marker([stop.lat, stop.lon], { icon: markerIcon(stop), title: stop.name }).addTo(map);
    marker.on("click", () => selectStop(stop, false));
    markers.set(stop.id, marker);
  });
  if (fit && visibleStops.length) {
    const bounds = L.latLngBounds(visibleStops.map((stop) => [stop.lat, stop.lon]));
    map.fitBounds(bounds, { padding: [35,35], maxZoom: visibleStops.length === 1 ? 9 : 8 });
  }
}

function setFilter(type) {
  const visible = type === "all" ? stops : stops.filter((stop) => stop.type === type);
  document.querySelectorAll(".filter-row button").forEach((button) => {
    const active = button.dataset.filter === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  buildMarkers(visible);
  if (visible.length) selectStop(visible[0], false);
}

function showChapter(chapter) {
  const visible = chapter.ids.map((id) => stops.find((stop) => stop.id === id));
  document.querySelectorAll(".filter-row button").forEach((button) => { button.classList.remove("active"); button.setAttribute("aria-pressed", "false"); });
  buildMarkers(visible);
  selectStop(visible[0], false);
  document.getElementById("atlas").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("region-rail").innerHTML = stops.map((stop) => `<button type="button" data-id="${stop.id}"><span>${String(stop.no).padStart(2,"0")} · ${typeNames[stop.type]}</span><strong>${stop.name}</strong></button>`).join("");
document.querySelectorAll("#region-rail button").forEach((button) => button.addEventListener("click", () => {
  const stop = stops.find((candidate) => candidate.id === button.dataset.id);
  if (!markers.has(stop.id)) buildMarkers(stops, false);
  selectStop(stop);
}));

document.getElementById("chapter-list").innerHTML = chapters.map((chapter) => {
  const names = chapter.ids.map((id) => stops.find((stop) => stop.id === id).name);
  return `<article class="chapter-card"><span class="chapter-number">${String(chapter.no).padStart(2,"0")}</span><div><h3>${chapter.title}</h3><span class="timestamp">${chapter.time} in the film</span></div><div class="chapter-copy"><p>${chapter.summary}</p><div class="stop-list">${names.map((name) => `<span>${name}</span>`).join("")}</div><p class="chapter-verdict">Route verdict · ${chapter.verdict}</p></div><button class="show-chapter" type="button" data-chapter="${chapter.no}">Show on map ↑</button></article>`;
}).join("");
document.querySelectorAll(".show-chapter").forEach((button) => button.addEventListener("click", () => showChapter(chapters.find((chapter) => chapter.no === Number(button.dataset.chapter)))));
document.querySelectorAll(".filter-row button").forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));

document.getElementById("deep-dive-index").innerHTML = deepDives.map((item) => {
  const stop = stops.find((candidate) => candidate.id === item.stopId);
  return `<a href="#deep-${stop.id}"><span>${String(stop.no).padStart(2, "0")}</span>${stop.name}</a>`;
}).join("");

document.getElementById("deep-dive-list").innerHTML = deepDives.map((item, index) => {
  const stop = stops.find((candidate) => candidate.id === item.stopId);
  const facts = Object.entries(item.facts).map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const photos = item.photos.map((photo, photoIndex) => {
    const image = `<img src="${photo.src}" alt="${stop.name}: ${photo.caption}" loading="lazy" />`;
    const linkedImage = photo.source ? `<a href="${photo.source}" target="_blank" rel="noreferrer" aria-label="Open source for ${stop.name} photograph">${image}</a>` : image;
    return `<figure class="${photoIndex === 0 ? "photo-lead" : ""}">${linkedImage}<figcaption><span>0${photoIndex + 1}</span>${photo.caption}${photo.source ? " · Source ↗" : ""}</figcaption></figure>`;
  }).join("");
  return `<article class="deep-dive" id="deep-${stop.id}">
    <div class="section-shell deep-dive-top"><div class="deep-dive-title"><span>${String(stop.no).padStart(2,"0")} / ${typeNames[stop.type]}</span><h3>${stop.name}</h3><p>${item.label}</p></div><aside><span>Route verdict</span><strong>${item.verdict}</strong></aside></div>
    <div class="deep-gallery">${photos}</div>
    <div class="section-shell deep-dive-content"><div class="deep-experience"><span>What the visit actually is</span><p>${item.experience}</p></div><div class="deep-plan"><span>Plan it correctly</span><ol>${item.plan.map((point) => `<li>${point}</li>`).join("")}</ol></div><dl class="deep-facts">${facts}</dl></div>
    <div class="section-shell deep-actions"><a href="${item.official}" target="_blank" rel="noreferrer">Official visitor information ↗</a><a href="${stop.mapUrl}" target="_blank" rel="noreferrer">Open in Google Maps ↗</a><a href="#atlas">Back to the map ↑</a></div>
  </article>`;
}).join("");

buildMarkers(stops);
selectStop(stops[0], false);
window.addEventListener("resize", () => map.invalidateSize());
