import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WaterChart from './WaterChart';
import WaterInput from './WaterInput';

const WaterBody = () => {
  return (
    <Container sx={{width: 1000, height: 500, backgroundColor: "white", borderRadius: 5}}>
        <Box sx={{ position: "absolute", mt: 6}}>
            <WaterChart />
        </Box>
        <Box sx={{ position: "absolute", mt: 15, ml: 5}}>
            <WaterInput />
        </Box>
    </Container>
  )
}

export default WaterBody;