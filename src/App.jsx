import { useState } from "react";
import { useLocalStorage } from "./hooks/useLS";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() { 
  
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
