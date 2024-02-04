import React, { useEffect, useState} from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";



const App=()=> {
const [theme,setTheme]=useState("light");
const lightColor="#C4D4E8";
const darkColor="#759FD1";
  
useEffect(()=>{
   document.body.classList.toggle("dark-mode",theme==="dark");
  },[theme]);
  
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    
  };
  const backgroundColor = theme === "dark" ? darkColor : lightColor;




  return (
    <div style={{ backgroundColor }} className="app-container">
      <div className="flex">
      <h1 style={{color:"red"}}>Kalvium</h1>
      <button className='theme-change-button' onClick={changeTheme} id="mode">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      </div>
      <QuestionBox Questions={questions} />
    </div>
  );
}

export default App;