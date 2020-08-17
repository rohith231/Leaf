import React from "react";
import Sidebar from "./Sidebar";
import Head from './Head'

import "./App.css";
// import Design from "./Design";
// import Map from './dynamic/Map'

// import Dynamic from './dynamic/Dynamic';

import File from './File'
// import Module from './Module'

function App() {
  return (
    
    <div className="app">
      <Head/>
      <div className="map__text">
      <Sidebar />
      <div className ="map__left">
     {/* <Design/> */}
     
     
      <File/>
     </div>
    
     </div>
      
     
     

    </div>
  );
}

export default App;
