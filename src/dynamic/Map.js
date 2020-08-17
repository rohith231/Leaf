import React from "react";
import './Map.css'

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Dynamic from "./Dynamic";













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Map extends React.Component {
  componentDidMount() {
   
    const mymap = L.map("mapid").setView([17.3850, 78.4867], 17);

    const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    L.tileLayer(OSMUrl).addTo(mymap);

   
    const greenIcon = new L.Icon({
      iconUrl:
        "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


///////////////////////////////////////////////////////////////////////////



    const marker1 = L.marker([40.743720, -73.822030], { icon: greenIcon }).addTo(
      mymap
    );
    const marker2 = L.marker([39.760979, -84.192200], { icon: greenIcon }).addTo(
        mymap
      );
      const marker3 = L.marker([54.464180, -110.182259], { icon: greenIcon }).addTo(
        mymap
      );


///////////////////////////////////////////////////  
  









  }
  render() {
    return( 


    <div id="mapid" style={{ height: "100vh", width: "100vw" }} />
    );
  }
}

export default Map;
