import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import run from '../Assets/runner.jpeg'

const HomeBody = () => {
  return (
    <Container sx={{height: "100vh"}}>
      <Container>
          <Box sx={{ height: 600, mt: 7, ml: 10 }} > 
          <Typography
              variant="h6"
              noWrap
              className='text1'
              sx={{
                marginLeft: "50px",
                letterSpacing: "2px", 
                fontSize: "35px",
                display: { xs: 'none', md: 'flex',  },
                textDecoration: 'none',
                width: "820px",
                textAlign: "center",
                alignItems: "center",
                margin: "auto",
                ml: 10,
              }}
            >
              <b>WELLBEING ISNT JUST FOR SOME,</b>
            </Typography> 
            <Typography
              variant="h6"
              noWrap
              className='text2'
              sx={{
                letterSpacing: "2px", 
                fontSize: "35px",
                fontWeight: 700,
                textDecoration: 'none',
                width: "820px",
                ml: 40

              }}
            >
              <b>IT'S FOR ALL</b>
            </Typography> 
            <Typography sx={{ width: "750px", ml: 10, mt: 2, fontFamily: "sans"}}>
              HEALTH LEAK GIVES PEOPLE OF EVERY AGE, INTEREST, BODY TYPE, AND ABILITY LEVEL THE SAME OPPORTUNITY – TO LIVE A HEALTHIER LIFE. MEMBERS CAN ACCESS VIRTUAL FITNESS, NUTRITION, AND MINDFULNESS CLASSES FROM WHEREVER THEY FEEL COMFORTABLE.   
            </Typography>
            <Button variant="contained" href="/programs" className='join' style={{
          borderRadius: 5,
          backgroundColor: "#ba3265",
          display: "flex",
          fontSize: "18px",
          width: 150,
          textDecoration: "none"

          }}
          sx={{ml: 45, mt: 5}}
          >Start Now</Button>
          </Box>
      </Container>
      <Container sx={{ mt: -20}}>
        <Typography sx={{ color: "#ba3265", letterSpacing: "2px", fontSize: "25px "}}>
          <b>PERSONALIZED SOLUTIONS</b>
        </Typography>
        <Typography sx={{ width: "100%", fontFamily: "serif", fontSize: "40px"}}>
        Virtual fitness, mindfulness, and nutrition built for you
        </Typography>
        <Box sx={{ display: "inline-block", width: "1200px"}}> 
          <Box sx={{ width: "330px", height: "400px", mt: 10, display: "inline-block" }}>
            <Typography sx={{  fontFamily: "serif", fontSize: "30px", mb: 3}}><b>HR and Employers</b></Typography>
            <Typography >Empower all of your employees and their families to live healthier, happier lives with a benefit solution that inspires and offers variety, safety, and results.</Typography>
          </Box>
          <Box sx={{ width: "330px", height: "400px", mt: 10, display: "inline-block", ml: 7, }}>
            <Typography sx={{  fontFamily: "serif", fontSize: "30px", width: "360px", mb: 3}}><b>Health Plans and Insurers</b></Typography>
            <Typography >Make it easy for your members and their families to start and continue their health journey, no matter their age or physical abilities.</Typography>
          </Box>
          <Box sx={{ width: "330px", height: "400px", mt: 10, display: "inline-block", ml: 9 }}>
            <Typography sx={{  fontFamily: "serif", fontSize: "30px", width: "360px", mb: 3}}><b>Brokers and Consultants</b></Typography>
            <Typography >Reinvigorate your benefit offerings with a cost-effective, equitable, safe, and secure wellbeing solution that is easy to use, administer, track, and promote.</Typography>
          </Box>
        </Box>
      </Container>
      <Container sx={{ mt: 1}}>
          <Box sx={{ display: "flex", mt: 25, ml: -40}}>
            <img src={ run } alt="runner" className='runner'></img>
          </Box>
          <Box sx={{ mt: -40}}>
            <Typography sx={{ color: "#ba3265", letterSpacing: "2px", fontSize: "25px "}}>
              <b>IT’S INCLUSIVE AND ACCESSIBLE</b>
            </Typography>
            <Typography sx={{ width: "100%", fontFamily: "serif", fontSize: "40px"}}>
              A well-rounded approach to wellbeing
            </Typography>
            <Typography sx={{  fontFamily: "serif", fontSize: "18px", width: "600px"}}>
              While some programs focus on fitness alone, Wellbeats offers classes to fuel the body and the mind. From all varieties of exercise to meditation, yoga, and nutrition, Wellbeats’ virtual classes give every employee the tools they need to live a healthier life.
            </Typography>
          </Box>
      </Container>
    </Container>
  )
}

export default HomeBody;