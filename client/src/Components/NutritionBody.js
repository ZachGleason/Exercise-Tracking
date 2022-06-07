import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NutritionInput from './NutritionInput';
import RecipeBody from './RecipeBody';


const NutritionBody = () => {


  return (
    <Container sx={{ width: 2000, height: 900, background: "white", borderRadius: "10px"}}>
        <Box sx={{width: 590, height: 400, border: "1px solid black", borderRadius: 5, position: "absolute", mt: 4}}>
            <RecipeBody/>
        </Box>
        <Box sx={{width: 590, height: 400, border: "2px solid black", borderRadius: 5, position: "absolute", mt: 57}}>
            <NutritionInput />
        </Box>
    </Container>
  )
}

export default NutritionBody;