import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';

import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
   <div className="min-h-screen ">
    <NavBar  dark={() => setDarkMode(!darkMode)}/>
    <Services/>
    <Portfolio />
   </div>
   </div> 
   </div>
  );
}
 
export default App;
