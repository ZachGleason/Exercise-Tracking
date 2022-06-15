import React, {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import axios from 'axios';

const NutritionInput = (props) => {

    const { recipes , setRecipes} = props;
    const [ name, setName ] = useState("");
    const [ calories, setCalories ] = useState("");
    const [ proteins, setProteins ] = useState("");
    const [ fats, setFats ] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit started")
        axios.post('http://localhost:8000/api/recipe', {
        name, 
        calories,
        proteins,
        fats,
        description,
    })
        .then(res=>{
            console.log(recipes)
            setRecipes([...recipes, res.data])
            e.target.reset()
            setName('')
            setCalories('')
            setProteins('') 
            setFats('') 
            setDescription('') 
        })
        .catch(err=>console.log(err))

}


  return (
    <Container sx={{ width: 400, mr: 16, mt: 4}}>
        <form onSubmit={submitHandler} >
            <input type="text" name='name' placeholder='Recipe Name' onChange={(e) => setName(e.target.value)} style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 10, marginTop: 5}} required></input>

            <input type="number" name='calories'  placeholder='Calories' onChange={(e) => setCalories(e.target.value)}  style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 10, marginTop: 8}} required></input>

            <input type="number" name='proteins'  placeholder='Protein(g)' onChange={(e) => setProteins(e.target.value)} style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 10, marginTop: 8}} required></input>

            <input type="number" name='fats'  placeholder='Fat(g)' onChange={(e) => setFats(e.target.value)} style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 10, marginTop: 8}} required></input>

            <input type="text" name='description'  placeholder='Description' onChange={(e) => setDescription(e.target.value)} style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 10, marginTop: 8}} required></input>
            <input type="submit" style={{ marginLeft: 120, marginTop: 10, width: 200, height: 55, border: "1px solid black", borderRadius: 5}} className="gradient-button gradient-button-3"></input>
        </form>
    </Container>
  )
}

export default NutritionInput