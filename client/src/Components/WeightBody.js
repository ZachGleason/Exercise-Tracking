import React, {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WeightInput from './WeightInput';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const WeightBody = () => {
    const [ weight, setWeight] = useState([]); 

    const removeObj = WeightId => {
      setWeight(weight.filter(weight => weight._id !== WeightId)); 
    }
  
    const DeleteItem = ( WeightId) => {
      alert('product deleted')
      axios.delete('http://localhost:8000/api/weight/' + WeightId)
      .then(res => removeObj(WeightId))
      .catch((err) => console.log(err))
  }
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/weights")
        .then((results) => setWeight(results.data))
        .catch((err) => console.log(err));
    }, []);
    
  return (
    <Container sx={{width: 1000, height: 500, backgroundColor: "white", borderRadius: 5, paddingTop: .1}}>
        <Box sx={{ height: 485, width: 550, border: "1px solid black", mt: 1, borderRadius: 5, overflow: "scroll"}}>
        <div>
            <Box sx={{width: 530, height: 30, border: "1px solid black", borderRadius: 5, marginTop: 1, marginLeft: 1, backgroundColor: "#82b9ff" }}>
              <Typography sx={{ textAlign: "Center"}}><b>Weight Log</b> </Typography>
            </Box>
            {weight?.map((weight, index) => ( 
             <Box sx={{ width: 530, height: 30, border: "1px solid black", borderRadius: 5, marginTop: 1, marginLeft: 1, backgroundColor: "#cce1fc" }}>
              <div key={index} >
                  <p style={{display: "inline-block", marginLeft: 10}}>Weight: <b>{weight.amount}</b>(lbs)</p>
                  <p style={{display: "inline-block",  marginLeft: 20}}>Time: <b>{weight.time}</b></p>
                  <p style={{display: "inline-block",  marginLeft: 20}}>Date: <b>{weight.date}</b></p>
                  <Link to={`/updating/${weight._id}`}><EditIcon sx={{ color: "black", fontSize: 20, marginLeft: 2}}/></Link>
                  <DeleteOutlineIcon sx={{ color: "black", fontSize: 20, marginLeft: 2}} onClick={(e) => {DeleteItem(weight._id)}}/>
              </div>
            </Box>
            ))}
        </div>
        </Box>
        <Box sx={{ position: "absolute", mt: -50, ml: 15}}>
            <WeightInput />
        </Box>
    </Container>
  )
}
export default WeightBody;
