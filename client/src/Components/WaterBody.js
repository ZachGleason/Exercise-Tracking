import React, {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WaterInput from './WaterInput';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const WaterBody = () => {
  const [ water, setWater] = useState([]); 

  const removeObj = WaterId => {
    setWater(water.filter(water => water._id !== WaterId)); 
  }

  const DeleteItem = ( WaterId) => {
    alert('product deleted')
    axios.delete('http://localhost:8000/api/water/' + WaterId)
    .then(res => removeObj(WaterId))
    .catch((err) => console.log(err))
}

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/waters")
      .then((results) => setWater(results.data))
      .catch((err) => console.log(err));
      console.log(water)
  }, []);

  return (
    <Container sx={{width: 1000, height: 500, backgroundColor: "white", borderRadius: 5, paddingTop: .1}}>
        <Box sx={{ height: 480, width: 550, border: "1px solid black", mt: 1, borderRadius: 5, overflow: "scroll"}}>
        <div>
            <Box sx={{width: 530, height: 30, border: "1px solid black", borderRadius: 5, marginTop: 1, marginLeft: 1, backgroundColor: "#82b9ff" }}>
              <Typography sx={{ textAlign: "Center"}}><b>Water Log</b> </Typography>
            </Box>
            {water?.map((water, index) => ( 
             <Box sx={{ width: 530, height: 30, border: "1px solid black", borderRadius: 5, marginTop: 1, marginLeft: 1, backgroundColor: "#cce1fc"}}>
              <div key={index} >
                  <p style={{display: "inline-block", marginLeft: 10}}>Amount Consumed: {water.amount}(oz)</p>
                  <p style={{display: "inline-block",  marginLeft: 20}}>Time: {water.time}</p>
                  <p style={{display: "inline-block",  marginLeft: 20}}>Date: {water.date}</p>
                  <Link to={`/updates/${water._id}`}><EditIcon sx={{ color: "black", fontSize: 20, marginLeft: 2}}/></Link>
                  <DeleteOutlineIcon sx={{ color: "black", fontSize: 20, marginLeft: 2}} onClick={(e) => {DeleteItem(water._id)}}/>
              </div>
            </Box>
            ))}
        </div>
        </Box>
        <Box sx={{ position: "absolute", mt: -45, ml: 15}}>
            <WaterInput />
        </Box>
    </Container>
  )
}

export default WaterBody;