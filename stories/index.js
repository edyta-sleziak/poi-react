import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import List from '../src/components/list/';
import Navigation from '../src/components/navigation/';
import Searchbar from '../src/components/searchbar/';
import CommentForm from '../src/components/commentForm/';
import Form from '../src/components/form/';
import Tile from '../src/components/tile/';
import Details from '../src/components/details/';
import { action } from "@storybook/addon-actions";
import DetailsOptions from '../src/components/detailsOptions/';
import { MemoryRouter, Route } from "react-router";

const island = {
  "name": "Fall-Island",
  "latitude": "55.00502415",
  "longitude": -8.45395755,
  "description": "Fall Island B710-176 Immediately off, cut off for two hours either side of HW, Fall is small, steep, rough and high. There is a holiday home on its outside NW end, accessed across the beach by a rough roadway. At LW it is surrounded on three sides by sand. Very beautiful. No camping. Here where the mainland roadway joins the access beach at Cloch Ghlas B712-174 lies the monument to the Skifjord tragedy of 30th October 1981. 6 men were lost when it struck a reef in a storm. 4 of the crew made it ashore in mountainous seas onto Inishinny 1km N. This all came hard for the people of west Donegal after the recent tragedies on Rathlin O’Birne a handful of years before.",
  "category": "NorthWest",
  "picture": 'https://via.placeholder.com/150',
  "upvotes": 34
};

storiesOf("POI React App/Navigation", module)
  .add("default", () => (
    <Navigation  />
  ));

storiesOf("POI React App/List", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const islands = [island, island, island, island, island];
    return <List islands={islands}/>
  });

storiesOf("POI React App/Tile", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("upvoting", () => <Tile island={island} upvoteHandler={action("upvoted")} /> )
  .add("deleting", () => (
    <Tile island={island} deleteHandler={action('Delete confirmed') }/>
  ));

storiesOf("POI React App/Searchbar", module)
  .add("default", () => (
    <Searchbar onUserInput={action('Search criteria changes') }/>
  ));

storiesOf("POI React App/Form", module)
  .add("default", () => <Form island={island} handleAdd={action('Add new post')}/>);

storiesOf("POI React App/Details", module)
  .add("default", () => <Details island={island} />);

storiesOf("POI React App/Comment Form", module)
  .add("default", () => <CommentForm  />);

storiesOf("POI React App/Details options", module)
  .add("default", () => <DetailsOptions  />)
  .add("edit", () => <DetailsOptions  state={"edit"} />)
  .add("delete", () => <DetailsOptions  state={"delete"}/>);