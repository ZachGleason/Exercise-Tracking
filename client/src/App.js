import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Programs from '../src/Pages/Programs/Programs';
import Challenges from '../src/Pages/Challenges/Challenges';
import Nutrition from '../src/Pages/Nutrition/Nutrition';
import Contact from './Pages/Contact/Contact';
import WeightTracker from './Pages/WeightTracker/WeightTracker';
import { Faq } from './Pages/FAQ/faq';
import Water from './Pages/WaterTracker/Water';
import axios from 'axios';


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ recipes , setRecipes] = useState([]); 

  const removeObj = RecipeId => {
    setRecipes(recipes.filter(recipe => recipe._id !== RecipeId)); 
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allrecipes")
      .then((result) => setRecipes(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/programs" element={ <Programs /> }></Route>
        <Route path="/challenges" element={ <Challenges /> }></Route>
        <Route path="/nutrition" element={ <Nutrition recipes={recipes} removeObj={removeObj}/> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="/faq" element={ <Faq /> }></Route>
        <Route path="/water" element={ <Water /> }></Route>
        <Route path="/weight" element={ <WeightTracker /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
