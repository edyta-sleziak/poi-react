# ICT Skills 2 Assignment - Single Page app.

Name: Edyta Sleziak

## Overview.

React implementation of POIs web application made for Enterprise Web Development. 
Note: This proof of concept web application has no backend implemetation, API stub is in use instead.
The idea behind the application is to show Irish costal point of insterest to users with elelements of social interaction (comments, upvoting). User is able to filter POIs by name and category (location) as well as read more information about selected POI.
By clicking buttons on the left hand side, user is able to switch between states (normal, edit, delete) of details view, which also affects buttons displayed on the left (buttons change to match context)
In edit mode, user can amend information about POI and add picture (not fully implememnted as there is no backend service).
In read mode user is able to see more information, including seeing map (implememnted using mapbox leaflet)
When user selects 'delete' confirmation is required, if confirmed record is deleted and user is takedn to main page.

#### List of user features

- Authorisation, login page (login use JWT mock up service)
- Main page with list of point of interest (Filtering POIs by name and category, adding new POI)
- POI's details page (including reading, edition and deletion of POI - only for logged in users) and comments feature


## Setup.

1. Clone repository
2. run npm install 
3. run application (npm start)
4. clone JWT mock up service to separate directory using git clone https://github.com/alex-c/mock-auth-backend, change cors-origin in mockJwt/mock-auth-backend/config/defaults.json to "*" and run (node index.js)


## Data Model Design.

Application uses similar data model as delivered for Enterprise Web Development. Island/POI fields that are is use ar as followos: name, description, category, latitude, longitude, comments, upvotes.
{
    id: 1,
    addedBy: "->accounts.Admin",
    modifiedBy: "->accounts.Admin",
    name: "Downhill",
    latitude: "55.16721802",
    longitude: -6.81917323,
    description: "Downhill C753-362 There is public access at the extreme E end of Benone Beach at a point called Downhill Strand. The Downhill Hotel was closed and demolished. An apartment block now fills the gap. Parking and toilets are beside the apartments and access is by a stream through an archway under the railway. This spot is popular with anglers. The rocky area to the E of the prominent Mussenden Temple at C758-363 is loose basalt, eroded to provide caves and arches. Fulmar and Kittiwake thrive on the sewerage outfall. There is good access and parking at Castlerock village itself at C766-365, where there is parking and toilets at the beach access point. County Antrim Tidal overview On the north coast, the tide generally turns west at Belfast HW and east at Belfast LW. The tides are complex, particularly around Rathlin and should be studied carefully. Tides flow strongly at the headlands but there are usable eddies between.",
    category: "North East",
    picture: 'https://via.placeholder.com/150',
    comments: [],
    upvotes: 34
},

There is no API for users and Comments models, that would need to be implemented. For proof of concept application only islands/poi model was implemented.


## UI Design.

![][Login]
![image](https://user-images.githubusercontent.com/39679088/63265985-cc452300-c286-11e9-8f15-a61906144610.png)
Simple log in page

![][main]
![image](https://user-images.githubusercontent.com/39679088/63265935-a91a7380-c286-11e9-801f-d37c21bf7378.png)
On main page user is able to add new POI as well as browse existing POIs. Also, user is able to 'like' specific POI which has later impact on the order in which POI is displayed.

![][Main page filtered] 
![image](https://user-images.githubusercontent.com/39679088/63266050-f696e080-c286-11e9-9a29-9fc4b566dcbf.png)
Using filters user is able to see only islands that match selected criteria (name, category) to easier find required record.

![][Details page - read mode] 
![image](https://user-images.githubusercontent.com/39679088/63266166-36f65e80-c287-11e9-90c9-bef2da4bb8d0.png)
In read mode user is able to see more information about POI, see the map add a comment as add 'likes' to POI and comments.

![][Details page - edit mode]
![image](https://user-images.githubusercontent.com/39679088/63266205-4e354c00-c287-11e9-9aeb-97e7ba7b0d1e.png)
In edit mode user can amend all information included on the page (expect comments) and add new picture (not fully implemented yet)

## Routing.

There are 3 routes in the application:
- /             (public)     -   main page of application, access for everyone
- /islands/:id  (private)    -   displays details about delected island; route is provate for authorised users.
- /login        (public)     -   login page of application, access for everyone

Not recognised paths will redirect to main page.


## Storybook.

![image](https://user-images.githubusercontent.com/39679088/63266946-ef70d200-c288-11e9-8510-4fe1fc8f0ebd.png)

## Backend.

Apart from stub API there is no backend implemented. 

## Authentication (if relevant).

Authentication was implememnted using JWT moch up service.
To use it, clone JWT mock up service to separate directory using git clone https://github.com/alex-c/mock-auth-backend, change cors-origin in mockJwt/mock-auth-backend/config/defaults.json to "*" and run (node index.js)

Test user: 
login: a@b.com 
passowrd: test

