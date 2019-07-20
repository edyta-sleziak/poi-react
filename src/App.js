import React, { Component } from 'react';
import List from './components/list';
import Form from './components/form';
import Header from './components/header';
import Searchbar from './components/searchbar';

export default class App extends Component {
  render() {
    const islands = [
      {  id: 1 ,
        name: "Inishinny",
        latitude: "55.0104251",
        longitude: -8.45089243,
        description: "Inishinny B712-182 1km N of Cloch Ghlas, this medium sized island is reachable on foot from mid-tide, and is well grazed by sheep and even a donkey, especially at its E end. Short cropped grass gives excellent camping. Lazybeds. Little bays and big bays yield lots of exploration. That N facing inside Bent Island at the NE is a natural sheltered harbour for smaller boats. The W facing harbour in the W is less sheltered altogether. Common Sandpiper. Ringed Plover. Ruin in mid-island. Aran Sound South The South Sound of Aran on the E side of Aran is a fearsome place with a high swell, particularly if the swell is from the N. The safest N/S passage goes approximately 200m east of Aileen Reef. Aileen Reef extends SE for 1km from Cloghcor Point at the SE corner of Aran. Boomers may be experienced over the shallows on the E side of the sound at a point E of Cloghcor Pt., off the beach on Rutland. You may also encounter boomers immediately west of the Carrickbealatroha Upper rocks beacon B695-147, which is shown but not named on the 1:50,000 OS map. If you plan to paddle from the village (Leabgarrow) on Aranmore to Burtonport via the S end of Rutland, with swell about, it is best to follow the channel S to Clutch beacon, marking the S end of Aileen Reef and then turn E, aiming for the beacon on the S end of Rutland. This should avoid any of the breaks on the E side of the Sound. Aran Sound North A large swell runs through the Sound of Aran in strong NorthWesterlies. At the N end, Blind Rocks at B686-166 and Ballagh Rocks at B693-170 are places to be avoided. Blind Rocks are just E of Calf Island and Ballagh Rocks (marked on the 1:50,000 OS map) are 0.6km NW of Eighter Island. In these conditions, the North Sound is virtually closed. Waves frequently break over the Ballagh rock light (10m high). This lighthouse was built in the autumn of 1875 and was originally known as Black Rock. It was converted to electric batteries in 1983. Waves also break over the Black Rock beacon (red) just off Leabgarrow pier. If in doubt, follow the ferry route around the N end of the beacon and then down to the beach and the landing described in the Aranmore section.",
        category: "North West",
        picture: 'https://via.placeholder.com/150',
        upvotes : 10
      },
      {
        id: 2,
        name: "Aranmore-Island",
        latitude: "54.98690785",
        longitude: -8.49280586,
        description: "Aranmore Island B685-156 Mostly known more simply as ‘Aran’. The island is mountainous at 227m high and 5km square, the largest island off Ireland not connected by bridge. Day trippers can enjoy a circular walk called Siúlóid Aran Mhóir, almost entirely on roads and good bog tracks and rivals the necklace walk on Great Blasket. The island has a stable and prosperous population of 0, considerable by island standards. Landing and Camping The main landing is onto a sheltered sandy beach in front of the main village, midway up the E coast. The strand is bounded on the N side by two piers and on the S by a gentle point, where there is excellent camping near the new school, beside a football pitch. The more northerly pier is the busy ferry pier. In normal conditions, land at the extreme S end of the beach at B685-156, from which there is a very short carry. The best landing in N winds is at the N end, in the shelter of the smaller, S pier. This avoids the surf farther down the beach but carrying to camp is then a problem. Water in the village. The S end of the beach is the best semi-private camping convenient to everything. Remoter camping exists elsewhere as described. Accommodation and Services A many-times-a-day ferry services the island with a sheltered run from the mainland at Burtonport. The ferry runs punctually during peak (usually summer) times but less so in the off-peak. The car ferry can take up to 8 cars, is regular and well run. Information can be had from Annie Bonner at 074 9520532 who also runs a restaurant and B&amp;B on Aran at the pier. There is a hostel by the beach which also appears well run, 074 9520515. Glen Hotel is just above the beach for those seeking comfort at 074 9520505. Circumnavigation From the paddler’s point of view, the entire W side is challenging. Great cliffs reflect huge waves, especially at the steeper cliffs and mighty headlands. There would often be no real stopping point between the two waystops midway on the S and N coasts next described. That involves 14km of committed paddling on the outside stretch. With ‘pottering’, allow almost 20km around the whole of the island altogether. Factor in the foul ground off the SE corner and this adds up to an achievable yet demanding circumnavigation. Some say it yields some of the finest seakayaking in Donegal, where the competition is plentiful. Certainly it contains a real wealth of riches – with a tremendous variety of caves, arches and stacks to explore. It deserves two days if the weather is favourable.",
        category: "North West",
        picture: 'https://via.placeholder.com/150',
        upvotes : 12
      },
      {
        id: 3,
        name: "Rannagh-Point",
        latitude: "54.96881973",
        longitude: -8.5222513,
        description: "Rannagh Point B666-136. This is the spit of land jutting S from midway along the S coast. On the E side, there is a lovely sandy beach, a pier with water on tap, a football pitch and short grass camping which is much more private than at the main strand on the E side. This is a working pier with associated advantages and disadvantages. Camping here is perhaps the most attractive on the island, with 4km walk to the main village, though there is a pub locally, which does excellent grub. Sheltered in almost all conditions.",
        category: "North West",
        picture: 'https://via.placeholder.com/150',
        upvotes : 12
      },
      {
        id: 4,
        name: "Annaghvaan-–-Eanach-Mheáin",
        latitude: "53.30844336",
        longitude: -9.63296104,
        description: "Annaghvaan – Eanach Mheáin L912-299 Essentially the road bridge to Lettermore and Gorumna, the road passing along its SE side, Annaghvaan has its own community of its own people on its low lying terrain. Tides The passage immediately S of the island (SW to Lettermore) has extensive drying areas at LW. Bealadangan pass to the SE may be a better bet, but watch the strength of the current.",
        category: "Mid West",
        picture: 'https://via.placeholder.com/150',
        upvotes : 2
      },
      {  id: 5 ,
        name: "Nohoval-Cove",
        latitude: "51.71403617",
        longitude: -8.38702007,
        description: "Nohoval Cove W733-513, 4km WSW provides some interesting paddling and rock hopping. There is a rudimentary slip at the back of the bay with a surge across it at HW, though usually well sheltered by off lying rocks. There some caves and stacks with spectacular cliffs. There are no camping signs on the ruins to the W side of the slip, though camping may be possible in the cliffs high up on the E side of the landing. Parking is along the side of the access road. Oyster Haven – Ballinclashnet Creek. 4.5km WSW, embark from a beach and pier W 694-490 at the end of the road on the E side of the E branch of Oyster Haven, outside the coastguard station. Alternatively launch from a sheltered beach W697-501 beside an Oyster Haven Adventure Centre. Both spots are inside obvious mooring buoys. There is adequate parking at both spots. Further N, the road runs parallel to Ballinclashnet Creek and landing is possible on some of the shingle bars that stretch out perpendicular to the road. It is possible to navigate to within 300m of Ballinclashnet village at HW. There are no landings or access to the shore from the W side of Ballinclashnet Creek. Oyster Haven – Murray’s Creek. It is possible to navigate Murray’s Creek, the W branch of Oyster Haven, to Belgooley, though there is no easy access until you are N of the road bridge at W663-522. The best worst access may be had opposite Belgooley GAA pitch. The E bank will provide the most direct and quickest access, but there is some vegetation.",
        category: "South Coast",
        picture: 'https://via.placeholder.com/150',
        upvotes : 10
      }
    ] ;
    return (
      <div className="jumbotron">
        <div className="container-">
          <div className="col-md-14">
            <Header/>
          </div>
          <div className="row">
            <div id="left" className="col-md-3">
              <Form />
            </div>
            <div className="col-md-9">
              <Searchbar/>
              <List islands={islands} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

