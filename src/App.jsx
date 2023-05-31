// import { useState } from "react";
// import { useLocalStorage } from "./hooks/useLS";

//import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"
import Add from "./components/Add/Add";
import Cards from "./components/Cards/Cards";

import { Routes, Route } from 'react-router-dom';
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { reducer } from "./reducers/reducer";
import { useReducer } from "react";
import Edit from "./components/Edit/Edit";



function App() { 

  const initialState = {
    tasks: [],
    text: "",
    list: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Main />}/> */}
          <Route path="/" element={<Home />}/>
          <Route path="/cards" element={<Cards />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>      
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
