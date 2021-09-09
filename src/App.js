import React ,{useReducer}from "react";
import { createContext } from "react";
import { useContext } from "react";
import NavBar from "./components/navbar"
import FullWidthGrid from "./components/grid"
import Selectbox from "./components/selectbox"
import {DataProvider} from "./store/transcontext"
import './App.css';
import PracticeReducer  from "./components/practiceReducer"
import Polar from "./components/chart"

export const conWala= createContext()
function App() {
  return (
      <conWala.Provider value={"ahsan"}>
    <DataProvider>
    <div className="App">


     <NavBar/>
     <FullWidthGrid/>
 <Selectbox ></Selectbox>

   {/* <PracticeReducer></PracticeReducer> */}
 <Polar> </Polar>
    </div>
    </DataProvider>
    </conWala.Provider >
     );
}

export default App;
