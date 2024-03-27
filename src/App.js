import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ComponentDidMountt from './componenet/ComponentDidMountt';
import Renderr from './componenet/Renderr';

function App() {
  const[nam,setnam]=React.useState("this is component")
  return (
    <div className="App">
      <h1>heelo</h1>
      <Renderr/>
      <ComponentDidMountt/>
      {/*<button onClick={()=>setnam("this is button")}>click !!</button>*/}
    </div>
  );
}

export default App;
