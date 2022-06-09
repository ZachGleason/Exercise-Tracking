import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import Navigate from '../../Components/Navigate';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';

const Update = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [proteins, setProteins] = useState("");
    const [fats, setFats] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/${id}`)
        .then((res) => {
            console.log(res.data.name)
            setName(res.data.name);
            setCalories(res.data.calories);
            setProteins(res.data.proteins);
            setFats(res.data.fats);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
        }, [])

    const updateProduct = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/recipe/${id}`, {
                name,
                calories,
                proteins,
                fats,
                description,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/nutrition");
        })
        .catch((err) => {console.log(err)})
        }


  return (
    <div className='updatewrapper'>
        <Navigate />
        <Container sx={{width: 1000, height: 500, backgroundColor: "white", borderRadius: 5}}>
            <form onSubmit={ updateProduct } style={{ width: 400, marginTop: 50 }}>
                <label htmlFor="desciption" style={{ position: "absolute", marginLeft: "630px", marginTop: 10, fontFamily: "Koulen" }}>Description</label>
                <label htmlFor="name" style={{ marginLeft: 125, marginTop: 10, fontFamily: "Koulen"}}>Recipe Name</label>

                <input type="text" onChange={(e) =>{ setName(e.target.value)}} value={name} name='name'  style={{ width: 360, height: 40, display: "inline", marginTop: 10, borderRadius: 5}}/>

                <label htmlFor="calories" style={{ marginLeft: 140, fontFamily: "Koulen"}}>Calories</label>
                <input type="number" onChange={(e) => {setCalories(e.target.value)}} value={calories} name="calories"style={{ width: 360, height: 40, display: "inline", borderRadius: 5}}/>

                <label htmlFor="proteins" style={{ marginLeft: 135, fontFamily: "Koulen"}}>Proteins(g)</label>
                <input type="number" onChange={(e) => {setProteins(e.target.value)}} value={proteins} name="proteins" style={{ width: 360, height: 40, display: "inline", marginTop: 10, borderRadius: 5}}/>

                <label htmlFor="fats" style={{ marginLeft: 145, fontFamily: "Koulen"}}>Fats(g)</label>
                <input type="number" onChange={(e) => {setFats(e.target.value)}} value={fats} name="fats" style={{ width: 360, height: 40, display: "inline", marginTop: 10, borderRadius: 5}}/>

                <textarea type="text" onChange={(e) => {setDescription(e.target.value)}} value={description} name="description" style={{ position: "absolute", width: 500, height: 250, marginLeft: 60, marginTop: -200, oveflow: "scroll", borderRadius: 5, border: "2px solid black"}}/>

                <input type="submit" placeholder='Update' style={{ width: 200, height: 40, borderRadius: 5, marginLeft: 360, marginTop: 50}} cols="40" rows="5"/>
                <Link to={`/nutrition`} style={{diplay: "inline"}}><HomeIcon sx={{ color: "black",  marginLeft: 72, marginTop: -9}}/></Link>
            </form>
        </Container>
    </div>
  )
}

export default Update;