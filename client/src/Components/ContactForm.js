import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactForm = () => {
  return (
    <Container sx={{ height: 600, width: 1200, background: "white", borderRadius: 10, mt: 15}}>
        <h1 style={{fontFamily: "Yanone Kaffeesatz", letterSpacing: 1, textAlign: "center", marginRight: 30, marginTop: 10}}><b>Contact Form</b></h1>
        <MailOutlineIcon sx={{ fontSize: "450px", ml: 10, display: "inline-block"}}/>
        <Box sx={{width: 400, height: 450, ml: 75, display: "inline-block", mt: -50, borderRadius: "30px"}}>
            <form action=''>
                <input style={{ width: 380, height: 50, marginLeft: 30, borderRadius: 20, marginTop: 5}} placeholder="First Name" type="text">
                    
                </input>
                <input style={{ width: 380, height: 50, marginLeft: 30,  borderRadius: 20, marginTop: 20}} placeholder="Last Name">

                </input>
                <input style={{ width: 380, height: 50, marginLeft: 30,  borderRadius: 20, marginTop: 20}} placeholder="What's your email?">

                </input>
                <input style={{ width: 380, height: 150, marginLeft: 30,  borderRadius: 20, marginTop: 20}} placeholder="Your questions...">

                </input>
                <button style={{ width: 250, height: 60, marginLeft: 90,  borderRadius: 20, marginTop: 15}} className="gradient-button gradient-button-3">
                    Send Message
                </button>
            </form>
        </Box>
    </Container>
  )
}

export default ContactForm