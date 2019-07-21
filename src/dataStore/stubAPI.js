import _ from "lodash";

class StubAPI {
  constructor() {
    this.islands = [
      {
        id: 1,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Downhill",
        latitude: "55.16721802",
        longitude: -6.81917323,
        description: "Downhill C753-362 There is public access at the extreme E end of Benone Beach at a point called Downhill Strand. The Downhill Hotel was closed and demolished. An apartment block now fills the gap. Parking and toilets are beside the apartments and access is by a stream through an archway under the railway. This spot is popular with anglers. The rocky area to the E of the prominent Mussenden Temple at C758-363 is loose basalt, eroded to provide caves and arches. Fulmar and Kittiwake thrive on the sewerage outfall. There is good access and parking at Castlerock village itself at C766-365, where there is parking and toilets at the beach access point. County Antrim Tidal overview On the north coast, the tide generally turns west at Belfast HW and east at Belfast LW. The tides are complex, particularly around Rathlin and should be studied carefully. Tides flow strongly at the headlands but there are usable eddies between.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 2,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "River-Bann",
        latitude: "55.17124307",
        longitude: -6.77197253,
        description: "River Bann C783-367 To the E of Castlerock village is the Bar Mouth, where the River Bann flows into the sea. Turbulent water can be experienced quite a distance offshore. The flood at the mouth is weak by comparison to the ebb. Especially when the river is up, the ebb and the flow of the river combine to produce mighty standing waves. The flow of the river is controlled by floodgates well upstream. Powerful rip currents either side of the mouth are dangerous enough. The mouth artificially narrows the stream and this projects the fresh water out with great force. The fresh water is easily distinguished in the sea water and gives a good guide as to tide direction and strength off the beaches. The river is marked as far up as Coleraine. The area is a noted birding spot in winter.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 3,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Portstewart",
        latitude: "55.18778894",
        longitude: -6.72122191,
        description: "Portstewart C815-386 The area behind Portstewart Strand to the W of the town is part golf course and part National Trust. There is fee-paying access to the NT section, where there are toilets and parking. There is a powerful rip each end of the strand. When the strand is dumping, it is better to launch off a slip at Portnahapple at C813-376, which is usable in most conditions, but be aware that access is difficult from car parks in the area.. The harbour at C815-386 can be difficult to enter or exit in heavy seas, with multi-directional reflected waves. The slip is exposed to surge. There is good parking and this is the access of choice in calm conditions. There is some interesting rock hopping locally, clapotis almost always and some small caves and a blowhole that performs well in good swell. The tide can run fast around Portstewart Point.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 4,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Portstewart-to-Portrush",
        latitude: "55.18778894",
        longitude: -6.72122191,
        description: "Portstewart to Portrush C815-386 to C856-407 The coastline here is basalt and reasonably interesting, low lying at first. Rinagree Point at C833-397 is the halfway point. To its W is Black Rock and just off it lies Lawson’s Rock, which breaks even in a moderate swell. It is possible to shelter in the lee of Black Rock. There is a tiny storm beach accessible from landward just E of Rinagree Point. Boomers may be expected hereabouts. Rock hopping and narrow channels are best enjoyed in calmer conditions and at . Tides An eddy runs west on the flood tide between Ramore Head to the Bann Barmouth from 2 hours before Belfast HW.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 5,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Portrush",
        latitude: "55.20595449",
        longitude: -6.65623781,
        description: "Portrush C856-407 Portrush West Bay is easily accessed under the railway line. The slipway in the harbour is awkward in swell, being quite close to the entrance and is quite busy. Consider using Portandoo Harbour at C857-412 instead, though the parking is a little more remote. There is also good parking at the W end of Curran Strand with parking at C863-406. Ramore Head is interesting exploring in calm conditions. Skerries Sound often kicks up and is best avoided by the inexperienced. The ebb sets up powerful standing waves.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 6,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "The-Skerries-–-Portrush",
        latitude: "55.22358133",
        longitude: -6.62578557,
        description: "The Skerries – Portrush C875-427 These rocky islands lie km NE of Portrush. The islands are basalt and the N side is ‘steep to’ and usually has unsettled sea conditions as the tide and swell often work in opposition. They are mostly grassy and low on the S side. Strong tide races set between the islands and associated rocks to their N. The sheltered S side is usually settled, and the best landing on the large skerry is towards the E end where there is almost a gap in the island. The Skerries are privately owned so get permission to land from Mr Metson in Portrush at 028 70857412, especially if intending to camp. There is a small brackish lake on the large skerry. Large numbers of birds nest and some rabbits survive. The best embarkation point is at Portandoo Harbour at C857-412 on the NE part of the headland, which is well sheltered. The rocks S of the harbour are a nature reserve and of interest to the geologist for its ammonite exposures. There are Grey Seal and a small colony of Common Seal. The Storks at C897-425 are rocks lying 2km ESE of the Skerries, and 1km NNW of Dunluce Castle. They are marked by a tall, unlit red beacon. Fishing is good hereabouts. Tidestable>tbody>tr>td colspan=\"2\" width=\"251\">Skerries Soundtd>tr>tr>td width=\"81\">Directiontd>td width=\"170\">Timetd>tr>tr>td width=\"81\">Etd>td width=\"170\">6:00 before Belfast HWtd>tr>tr>td width=\"81\">Wtd>td width=\"170\">1:00 after Belfast HWtd>tr>tbody>table>On the east-going flood, there is an eddy between Curran Point at C875-411 to Reviggerly at C855-415. HW Portrush is 4:40 before Belfast HW.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 7,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Portrush-to-Portballintrae",
        latitude: "55.20595449",
        longitude: -6.65623781,
        description: "Portrush to Portballintrae C856-407 – C930-424 White Rocks Beach at C899-411 is accessible from the road and there are good toilet and day time parking facilities. Calm conditions are necessary as the surf can be quite powerful with large dumping waves in heavy seas. The rips are strong and the tide flows strongly just beyond the break line. The rips are easily read from above on the road. It is mainly cliffs eastwards to Portballintrae. There are a number of interesting caves in the first section along under prominent Dunluce Castle at C905-415. One such cave is directly under the castle. Exploration of some of the other caves hereabouts requires a torch. There is good rock hopping eastwards to Portballintrae, with at least one good sheltered deep water landing in a channel e halfway mark. Another cave just W of Binbane Cove is 40 to 50m long. Beware of a choke point halfway in, where the surge can catch the unwary. In Portballintrae Harbour, there is a public slipway at C926-423. There are toilets and a car park which can become quite congested in summer. Local surfers prefer the larger car park at C930-424 overlooking Bushfoot Strand to the E of the town. Access to the beach is just W of the car park. Kayakers always prefer the harbour.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 8,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Portballintrae-to-Dunseverick",
        latitude: "55.21988365",
        longitude: -6.53948915,
        description: "Portballintrae to Dunseverick C930-424 to C999-447 The rocks between the harbour and Bushfoot Strand can be fun at HW. On passage however, give them plenty of clearance. Stay at least 200m clear of the E harbour entrance to avoid a boomer called the Blind Rock. Bushfoot is named for the River Bush which flows in here at the SW corner. Upriver 2km is the town of Bushmills, famed globally for its Black Bush whiskey. The beach tends to surf and should be used with caution. After rain, a brown tongue of water enters the sea and what happens to it is a good guide to what the tide is doing just then. The E part of the beach is irregularly rocky and not a good place for small boats. There is a small slip below Runkerry House at C934-435. The coastline eastwards is the Giant’s Causeway section. It is committing and there are no easy landing places. It is also one of the most beautiful sections of the entire Northern Ireland coastline. Just SE of the off-lying rock, the Mile Stone at C934-440, is the massive and beautiful Runkerry Cave at C935-439, complete with boulder beach and long dry passage. There are other caves hereabouts, most notably in a small cove 0.5km E of Runkerry called locally Portcoon, with a dry side entrance. There is a slip in Portnaboe, the last cove before the Causeway proper. Visitors once walked from this point, before the access from above was organised. The Causeway section itself is 5km around Benbane Head (C965-461). There are many exposures of geological features; dykes, sills and the various layers of volcanic activity are easily seen. The Causeway itself and all the related geology are far better seen from seaward. In strong offshore winds there are vicious down draughts and each of the bays can funnel the wind to strong gusts. Formidable tides run off Benbane Head and great seas can build up off it and off Bengore Head 1km E. The Spanish Armada The tragedy of the Girona, wrecked at Lacada Point C952-455, was that it was the most seaworthy of several ships that sailed on 16sup>thsup> October 1588 from Killybegs for Scotland. 1300 were drowned, including members of most of the noblest families in Spain. The remains of the wreck were discovered c1967 by a team of divers and a great number of artifacts including many many trinkets and jewellery did survive in the cracks and crevices off the Point, as well as cannons, cannonballs and other memorabilia which are now in The Ulster Museum in Belfast. Port Moon Port Moon at C979-451 on the E side of Contham Head C978-4456 is a natural small boat harbour among low rocks at the base of a 60m cliff. A bothy with a rusty roof marks the spot to the passerby, as do the salmon net poles around it, when close in. The bothy is presently the subject of a renovation programme which should be finished by summer 2011. The gut is 100m by 8m and there are rings on either side for shorelines. The port enjoys 1.5m LWS at the outer end. Landing is possible onto a sheltered but rough and stony shore/slip. Camping is nearby on grass, and there is even a stream. It has the remote feel of an island, despite a steep zig-zag path up the cliff to the public Causeway Coast Path. The coastline eastwards towards Dunseverick Castle falls away, but is bouldery. There is a small, well-sheltered harbour near Dunseverick at C999-447, km E of the castle ruin, with a small maritime museum and good enough parking. Camping is possible here but forbidden, except in emergency. There are some lovely rock pools just W of the harbour, suitable for swimming and diving. This carpark has saved many a kayaker a long trip (E/W) if the weather breaks. Leaving a car at Dunserevick on a coastal passage is recommended.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 9,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Dunseverick-to-Ballintoy",
        latitude: "55.23918918",
        longitude: -6.43030485,
        description: "Dunseverick to Ballintoy C999-447 – D039-456The rocky area immediately E of Dunseverick is cliffy with caves hidden from view by raised beaches. White Park Bay to the E is particularly beautiful. Portbraddan is a small harbour at the W end of the beach at D008-444. It boasts the smallest church in Ireland. Access and parking are poor. It is possible to launch off a boulder beach. Very pretty. The salmon fishery, as with all those on the N coast, is closed. Wild salmon numbers in the Atlantic generally dropped alarmingly in the late twentieth century. Great controversy still persists as to the causation. Over fishing, global warming, diseases affecting the wild stock caused by sea lice endemic with farmed stock, all are blamed. Stocks of similarly depleted wild Sea Trout have shown some signs of recovery recently, and perhaps wild salmon may someday be plentiful again? There is a youth hostel set high above the beach itself, behind the official car park. It is a long carry to the beach and not in any way normally suitable for kayak launching. The beach gives good surf though. Boulders and a dyke called the Long Causeway obstruct the E end. The rocky islets E of the beach towards Islandoo at D038-457 are NT and give good sport in the right conditions.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 10,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Ballintoy-–-Ballycastle",
        latitude: "55.24644505",
        longitude: -6.36712167,
        description: "Ballintoy – Ballycastle D039-456 – D121-415Inside Islandoo lies the wonderful Ballintoy harbour at D039-456, a splendid embarkation place for this area generally, or for just a lunch stop. The tides are really powerful through the channels, even right outside the harbour mouth. The harbour has a strand for landing, two slips, toilets and even a coffee shop, but be aware that the owner has a great dislike of kayakers who use the public carpark near the cafe. It gets congested in summer. Take care towing a trailer down to the harbour, as the road is steep and twisty. Good facilities, great views. Lovely. The tides set so strongly and eddy so fiercely in the main offshore current that it is possible to surf the deep water eddies in Boheeshane Bay eastwards towards Larry Bane Head at D049-452. Tides The tides set so strongly and eddy so fiercely in the main offshore current that it is possible to surf the deep water eddies in Boheeshane Bay eastwards towards Larry Bane Head at D049-452.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 11,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Sheep-Island",
        latitude: "55.24805065",
        longitude: -6.35290332,
        description: "Sheep Island D048-458 Sheep Island lies ENE of Ballintoy Harbour and was bought by the National Trust in 1967. The rats on the island were exterminated by 1970 and it again became an important nesting site for Puffin and Cormorant. The large numbers of the latter indicate healthy fish stocks in the rivers of the NE coast. The island is flat topped with steep cliffs on all sides, essentially a large sea stack. There is a strong eddy between the island and Larry Bane Head at D049-452. The power of the eddy gives only a hint of the strength of the tide races in the main current on the N side. Landing Landing can be made at two points. On the N of the island is an obvious bay. A boulder beach at the head of the bay gives access to a corrie-shaped area whose southern side is a narrow ridge linking the higher points of the SW and NE sides. The climb from the boulder beach is firstly on easy grassy slopes but then onto steeper rock. An exposed climb leads onto high grassy slopes. The climb should not be underestimated as the rock is loose and the slope steep. A second landing, with easier access and support holds, is located on the SE corner. SPA Cormorant",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      },
      {
        id: 12,
        addedBy: "->accounts.Admin",
        modifiedBy: "->accounts.Admin",
        name: "Carrickarede-Island",
        latitude: "55.23967118",
        longitude: -6.33123925,
        description: "Carrickarede Island D062-449 Carrickarede Island is km E of Ballintoy Harbour and anyone visiting the area will be directed here. It is owned by the National Trust. It can be visited by land across its famous rope bridge, in place throughout the year, once used to serve salmon fishermen. Great bravery is required. Far easier sometimes to visit by sea. The tide race off the NW corner is powerful, but can often be avoided by going under the rope bridge. The sand bar here is covered on the top two thirds of the tide. The rock strata is interesting, giving good nest sites for Kittiwake, Razorbill and Guillemot. There is a wonderful cave on the outside, visible only from the sea. Carrickarede to Ballycastle The cliff scenery now becomes quite majestic. The small wooded area at Port More is very unusual. Buzzards are common hereabouts. Landing may be had by an old winch on the W side of a forest. It is possible to escape here, but it is a long scramble to the nearest road. Watch for the splendid through-cave in Kinbane Head at D088-438. Tides set strongly at the head, and a very defined line separates the eddy from the flow. This is an excellent teaching area. Landing is possible on the W side of the head. A long steep path leads up the cliff to a car park on the E side. Nice cliffs join Kinbane Head to Ballycastle, with dramatic caves. The cliff structure hereabouts is liable to rock fall, the slips evident by lack of vegetation. One such is directly above an inviting cave entrance, so do take care. Ballycastle has a number of options for landing. The large breakwater has a concrete slip. The old pier has a slipway beside it. Car parking abounds, except in summer congestion. There is also a car park at the E end of the beach at D132-416 by Pans Rocks. Rathlin Island Chart 2798 covers the general area, as does OSNI The information in the Pilot and the Sailing Directions is essential on this challenging section of coastline. Rathlin lies just over 10km N of Ballycastle, where there is a good embarkation place at the pier at D122-415. The island is served by regular ferry, and boasts a stable population. Most of the habitation and services are at Church Bay. Camping with water and toilets is possible amongst old caravans at D148-506, just S of the harbour. There is a hostel in the Old Manor House at the harbour, and some guest houses, the most convenient of which is just beside the large pier at D147-510. More remote camping spots can be had along the shore by Rue Point at D151-473 and along the E coast in the many secluded bays. Camping is convenient at Portawillin at D161-512 where there is a small pier with steps. The rest of the island is generally steep with cliffs towering above boulder beaches and landing is impossible or uninviting except in an emergency. The island, steeped in history, has a distinct character all its own. Wallace Clark’s book ‘Rathlin – Disputed Island’ gives a lot of information s history from the earliest settlers to modern times. In earliest times porcellainite, or flint (as in stone age axes) was mined here and exported. The island was successively conquered and reconquered by the Vikings, Scots, Normans and the English. Most famously, it was litigated over between Ireland and Scotland, and found to be Irish because there were no snakes (Saint Patrick is said to have banished all snakes from Ireland in the 5sup>thsup> Century). Circumnavigation For the sea canoeist, this is one of the most committing of paddles, which is best done clockwise as the shape of the island sets up eddies to one’s advantage. The E side is the only part where progress could be made against the tide. The island is ‘L’ shaped and at each of the headlands there are major tide races, which are always active except at slack water, though it is generally possible to stay inshore and avoid their full force. The MacDonnell Race at the NE corner is particularly fearsome. The cliffs on the N side are high and dark and the feeling of exposure is greatest here. There are caves in the NE corner near the E lighthouse, the most famous of which is said to have been used by Robert the Bruce, where he met his spider. The S facing cliffs W of Church Bay are chalk overlaid with basalt, and very picturesque. There are some interesting shapes and stacks as one nears the W end of the island. There is an old pier at D102-509 in Cooraghy Bay, which gives a chance of a rest before tackling the committing part of the paddle. SPA Peregrine, Guillemot, Razorbill. The island, and the NE corner of Ireland generally, is splendidly situated for passage migrants in spring and autumn. Puffin, Buzzard and Eider are amongst the birds abounding in summer. A large colony of Common Seal may be found in Mill Bay, just S of the main harbour. Rathlin mice are the biggest in Ireland. Tides and embarkation The most obvious embarkation place is from Ballycastle. The tides in Rathlin Sound reach 6kns so the only time to make the crossing is on slack water (HW/LW Belfast). Start half an hour to an hour beforehand. Read the Irish Coast Pilot and study the hour-by-hour tidal chartlets the Sailing Directions of the Irish Cruising Club, North and EastCoasts volume. Refer also to the Admiralty Tidal Stream Atlas for the Firth of Clyde and Approaches, NP222. Southwest of Rue Point at D152-473, the overfall Slough-na-more is most dangerous for an hour from 1:30 after Belfast HW. The flow on the north side of the island is always easterly due to an eddy on the ebb. An alternative is to embark from Dunseverick Harbour at D000-445 or Ballintoy Harbour at D038-456 on the last couple of hours of the flood and to come back six hours later on the last of the ebb.table>tbody>tr>td colspan=\"3\" width=\"308\">Rathlin Soundtd>tr>tr>td width=\"78\">Directiontd>td width=\"173\">Timetd>td width=\"57\">Speedtd>tr>tr>td width=\"78\">Etd>td width=\"173\">5:30 before Belfast HWtd>td width=\"57\">6kntd>tr>tr>td width=\"78\">Wtd>td width=\"173\">0:30 before Belfast HWtd>td width=\"57\">6kntd>tr>tbody>table>HW Rathlin and Ballycastle is 4:45 before Belfast in springs and 2 hours before in neaps. This large variation is due to the proximity of an amphidromic point at Port Ellen, Islay. Eddies On a coastal trip, the eddies from Fair Head at D280-438 to Kilbane Head at D088-438 can be used as follows:table width=\"563\">tbody>tr>td colspan=\"5\" width=\"563\">Fair Head to Kinbane Head eddytd>tr>tr>td width=\"53\">MainFlowtd>td width=\"85\">EddyDirectiontd>td width=\"170\">Start Timetd>td width=\"161\">End Timetd>td width=\"94\">Strongest at…td>tr>tr>td width=\"53\">Etd>td width=\"85\">Wtd>td width=\"170\">5:00 before Belfast HWtd>td width=\"161\">1:00 before Belfast HWtd>td width=\"94\">3:00 beforetd>tr>tr>td width=\"53\">Wtd>td width=\"85\">Etd>td width=\"170\">1:00 after Belfast HWtd>td width=\"161\">5:00 after Belfast HWtd>td width=\"94\">3:00 aftertd>tr>tbody>table>Rathlin is a challenging paddle even for the experienced, and careful planning is required.",
        category: "NorthEast",
        picture: 'https://via.placeholder.com/150',
        upvotes: 34
      }
    ];
  }

  getAll() {
    return this.islands;
  }

  add(name, category) {
    let id = 1;
    let last = _.last(this.islands);
    if (last) {
      id = last.id + 1;
    }
    let len = this.islands.length;
    let newLen = this.islands.push({
      id,
      name,
      category,
      upvotes: 0
    });
    return newLen > len;
  }

  upvote(id) {
    let index = _.findIndex(this.islands, island => island.id === id);
    if (index !== -1) {
      this.islands[index].upvotes += 1;
      return true;
    }
    return false;
  }

  find(id) {
    let index = _.findIndex(
      this.islands,
      island => `${island.name}${island.category}` === id
    );
    if (index !== -1) {
      return this.islands[index];
    }
    return null;
  }

  delete(k) {
    let elements = _.remove(this.islands, island => island.name === k);
    return elements;
  }

  initialize(islands) {
    this.islands = islands;
  }



  update(key, name, category) {
    let index = _.findIndex(this.islands, island => island.phone === key);
    if (index !== -1) {
      this.islands[index].name = name;
      this.islands[index].category = category;
      return true;
    }
    return false;
  }
}

export default new StubAPI();