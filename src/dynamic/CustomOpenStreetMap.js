import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker,withLeaflet } from "react-leaflet";
import { ReactLeafletSearch } from "react-leaflet-search";
import './World.css'



const listData = [
  {
    id: 1,
    text: "Location A",
    lng: 24.960937499999996,
    lat: 38.54816542304656
  },
  {
    id: 2,
    text: "Location B",
    lng: -103.71093749999999,
    lat: 40.97989806962013
  },
  {
    id: 3,
    text: "Location C",
    lng: 76.9921875,
    lat: 24.84656534821976
  }
];

const List = ({ onListItemClick }) => (
  <div>
    <ul>
      {listData.map((aLocation, index) => (
        <li
          key={aLocation.id}
          onClick={(e) => {
            onListItemClick(index);
          }}
        >
          {aLocation.text}
        </li>
      ))}
    </ul>
  </div>
);
export default class CustomOpenStreetMap extends Component {


// class CustomOpenStreetMap {
//   constructor(options = { providerKey: null, searchBounds: [] }) {
//     let { searchBounds } = options;
//     //Bounds are expected to be a nested array of [[sw_lat, sw_lng],[ne_lat, ne_lng]].
//     // We convert them into a string of 'x1,y1,x2,y2' which is the opposite way around from lat/lng - it's lng/lat
//     let boundsUrlComponent = "";
//     let regionUrlComponent = "";
//     if (searchBounds.length) {
//       const reversed = searchBounds.map(el => {
//         return el.reverse();
//       });
//       this.bounds = [].concat([], ...reversed).join(",");
//       boundsUrlComponent = `&bounded=1&viewbox=${this.bounds}`;
//     }
//     if ("region" in options) {
//       regionUrlComponent = `&countrycodes=${options.region}`;
//     }
//     this.url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&polygon_svg=1&namedetails=1${boundsUrlComponent}${regionUrlComponent}&q=`;
//   }

//   async search(query) {
//     // console.log(this.url + query)
//     const response = await fetch(this.url + query).then(res => res.json());
//     return this.formatResponse(response);
//   }

//   formatResponse(response) {
//     const resources = response;
//     const count = response.length;
//     const info =
//       count > 0
//         ? resources.map(e => ({
//             bounds: e.boundingbox.map(bound => Number(bound)),
//             latitude:20.5937 ,
//             longitude: 78.9629,
//             name: ""
//           }))
//         : "Not Found";
//     return {
//       info: info,
//       raw: response
//     };
//   }
// }

// export default class CustomOpenStreet extends Component {
//   constructor(props) {
//     super(props);
//     this.provider = new CustomOpenStreetMap();
//     this.state = {
//       count: 0,
//       maxZoom: 13,
//       maxBounds: [[-90, -180], [90, 180]],
//       markerIndex:0,
//       bounds: [
//         {
//           lat: 20.5937 ,
//           lng:   78.9629
//         },
//         {
//           lat: 17.3850 ,
//           lng:   78.4867
//         },
      
        
//       ]
//     };
//   }

  // customPopup(SearchInfo) {
  //   return (
  //     <Popup>
  //       <div>
  //         <p>I am a custom popUp</p>
  //         <p>
  //           latitude and longitude from search component:{" "}
  //           {SearchInfo.latLng.toString().replace(",", " , ")}
  //         </p>
  //         <p>Info from search component: {SearchInfo.info}</p>
  //         <p>
  //           {SearchInfo.raw &&
  //             SearchInfo.raw.place_id &&
  //             JSON.stringify(SearchInfo.raw.place_id)}
  //         </p>
  //       </div>
  //     </Popup>
  //   );
  // }

  state = {
    center: [51.505, -0.091],
    zoom: 1,
    markerIndex: 0
  };  

  handleItemClick = (index) => {
    console.log("show Marker for", listData[index]);
    this.setState({
      markerIndex: index
    });
  };


  render() {
    const ReactLeafletSearchComponent = withLeaflet(ReactLeafletSearch);
    const markerItem = listData[this.state.markerIndex];
    const MarkerToShow = <Marker position={[markerItem.lat, markerItem.lng]} />;
    return (
      <div>
      <List onListItemClick={this.handleItemClick} />
      
      <Map
        className="simpleMap"
        scrollWheelZoom={true}
        bounds={this.state.bounds}
        maxZoom={this.state.maxZoom}
        maxBounds={this.state.maxBounds}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {/* <ReactLeafletSearchComponent
          customProvider={this.provider}
          position="topleft"
          inputPlaceholder="Custom placeholder"
          search={[20.5937 , 78.9629]}
          showMarker={true}
          zoom={5}
          showPopup={true}
          popUp={this.customPopup}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
          // // these searchbounds would limit results to only Turkey.
          searchBounds={[
            [20.5937 , 78.9629]
            
          ]}
          
          providerOptions={{region: 'tr'}}
          
          default provider OpenStreetMap
          provider="BingMap"
          providerKey="AhkdlcKxeOnNCJ1wRIPmrOXLxtEHDvuWUZhiT4GYfWgfxLthOYXs5lUMqWjQmc27"
        /> */}

{MarkerToShow}
      </Map>
      </div>
    );
  }
}
