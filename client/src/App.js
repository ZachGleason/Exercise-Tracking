import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Programs from '../src/Pages/Programs/Programs';
import Challenges from '../src/Pages/Challenges/Challenges';
import Nutrition from '../src/Pages/Nutrition/Nutrition';
import WeightTracker from './Pages/WeightTracker/WeightTracker';
import Update from './Pages/Update/Update'
import Water from './Pages/WaterTracker/Water';
import axios from 'axios';
import Update2 from './Pages/Update2/Update2';
import Update3 from './Pages/Update3/Update3';
import WeightGain from './Pages/ProgramsFolder/WeightGain'
import HyperTrophy from './Pages/ProgramsFolder/HyperTrophy'
import Cardio from './Pages/ProgramsFolder/Cardio'
import Circuit from './Pages/ProgramsFolder/Circuit'
import CrossFit from './Pages/ProgramsFolder/Crossfit'
import HighVolume from './Pages/ProgramsFolder/HighVolume'
import Gymnastics from './Pages/ProgramsFolder/Gymnastics'
import Kettlebell from './Pages/ProgramsFolder/Kettlebell'
import Powerlifting from './Pages/ProgramsFolder/Powerlifting'
import Strength from './Pages/ProgramsFolder/Strength'
import StrongMan from './Pages/ProgramsFolder/StrongMan'
import Yoga from './Pages/ProgramsFolder/Yoga'
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
      console.log(recipes)
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/programs" element={ <Programs /> }></Route>
        <Route path="/challenges" element={ <Challenges /> }></Route>
        <Route path="/nutrition" element={ <Nutrition recipes={recipes} removeObj={removeObj}/> }></Route>
        <Route path="/water" element={ <Water /> }></Route>
        <Route path="/weight" element={ <WeightTracker /> }></Route>

        <Route path="/weightgain" element={ <WeightGain /> }></Route>
        <Route path="/hypertrophy" element={ <HyperTrophy /> }></Route>
        <Route path="/cardio" element={ <Cardio /> }></Route>
        <Route path="/circuit" element={ <Circuit /> }></Route>
        <Route path="/crossfit" element={ <CrossFit /> }></Route>
        <Route path="/gymnastics" element={ <Gymnastics /> }></Route>
        <Route path="/highvolume" element={ <HighVolume /> }></Route>
        <Route path="/kettlebell" element={ <Kettlebell /> }></Route>
        <Route path="/yoga" element={ <Yoga /> }></Route>
        <Route path="/powerlifting" element={ <Powerlifting /> }></Route>
        <Route path="/strength" element={ <Strength /> }></Route>
        <Route path="/strongman" element={ <StrongMan /> }></Route>

        <Route element={<Update />} path="/update/:id"/>
        <Route element={<Update2 />} path="/updating/:id"/> 
        <Route element={<Update3 />} path="/updates/:id"/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
