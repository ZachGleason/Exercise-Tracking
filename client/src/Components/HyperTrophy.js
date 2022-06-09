import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import hyper from '../Assets/hypertrophy.webp'

const Hypertrophy = () => {
  return (
    <Container>
        <Box sx={{width: 1000, height: 500, backgroundColor: "white", borderRadius: 5, margin: "auto"}}>
            <img src={hyper} alt='weight gain' style={{width: 700, marginLeft: 150, marginTop: 10}}></img>
        </Box>
    </Container>

  )
}

export default Hypertrophy;