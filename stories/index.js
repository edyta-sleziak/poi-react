import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import List from '../src/components/list/';
import Header from '../src/components/header/';
import Searchbar from '../src/components/searchbar/';
import Form from '../src/components/form/';
import Tile from '../src/components/tile/';

const island = {
  "name": "Fall-Island",
  "latitude": "55.00502415",
  "longitude": -8.45395755,
  "description": "Fall Island B710-176 Immediately off, cut off for two hours either side of HW, Fall is small, steep, rough and high. There is a holiday home on its outside NW end, accessed across the beach by a rough roadway. At LW it is surrounded on three sides by sand. Very beautiful. No camping. Here where the mainland roadway joins the access beach at Cloch Ghlas B712-174 lies the monument to the Skifjord tragedy of 30th October 1981. 6 men were lost when it struck a reef in a storm. 4 of the crew made it ashore in mountainous seas onto Inishinny 1km N. This all came hard for the people of west Donegal after the recent tragedies on Rathlin O’Birne a handful of years before.",
  "category": "NorthWest",
  "picture": 'https://via.placeholder.com/150',
  "upvotes": 34
};

storiesOf("POI React App/Header", module)
  .add("default", () => (
    <Header  />
  ));

storiesOf("POI React App/List", module)
  .add("default", () => {
    const islands = [island, island, island, island, island];
    return <List islands={islands}/>
  });

storiesOf("POI React App/Tile", module)
  .add("default", () => (
    <Tile island={island} />
  ));

storiesOf("POI React App/Searchbar", module)
  .add("default", () => (
    <Searchbar />
  ));

storiesOf("POI React App/Form", module)
  .add("default", () => (
    <Form />
  ));