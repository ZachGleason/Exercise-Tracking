import React from "react";
import Navigate from "../../Components/Navigate";
import NutritionBody from "../../Components/NutritionBody";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from 'axios';
import {Link} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


const Nutrition = (props) => {
  const { removeObj } = props;
            const DeleteItem = ( RecipeId) => {
                alert('recipe deleted')
                axios.delete('http://localhost:8000/api/delete/' + RecipeId)
                .then(res => removeObj(RecipeId))
                .catch((err) => console.log(err))

              }

  return (
    <div className="nutritionwrapper">
      <Navigate />
      <NutritionBody />
        <Box sx={{width: 550, height: 825, border: "2px solid black", borderRadius: 5, ml: 115, top: 0, mt: -109}} className="overflow">
        <Box sx={{ width: "535px", height: "40px", border: "1px solid black", borderRadius: "10px", mt: 1, ml: 1  }}>
                <Typography sx={{ textAlign: "center", mt: 1  }}>
                    <b>Your Recipes</b>
                </Typography>
            </Box>
        {props.recipes.map((recipe, index) => (
            <div key={index}>
                  <Box sx={{ width: 535, height: 100, border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1, overflow: "scroll"}}>
                      <div>
                      <button style={{ float: "right", borderRadius: 20}}><Link to={`/update/${recipe._id}`}><EditIcon sx={{ color: "black"}}/></Link></button>
                      <button onClick={(e) => {DeleteItem(recipe._id)}} style={{ float: "right", borderRadius: 10}}>X</button>
                        <p style={{ marginLeft: 10, height: 18 }}><b>Recipe Name:</b> {recipe.name}</p>
                        <p style={{ marginLeft: 10, marginTop: -8, height: 5,  width: 110}} ><b>Calories:</b> {recipe.calories}</p>
                        <p style={{ marginLeft: 10, marginTop: 1, height: 5, width: 110}}><b>Protein:</b> {recipe.proteins}(g)</p>
                        <p style={{ marginLeft: 10, marginTop: 1, height: 5, width: 85}} ><b>Fats:</b> {recipe.fats}(g)</p>
                        <p style={{ marginLeft: 150, marginTop: -63, height: 5}} ><b>Description:</b> {recipe.description}</p>
                      </div>
                  </Box>
              </div>
          ))}     
        </Box>
    </div>
  );
};

export default Nutrition;
