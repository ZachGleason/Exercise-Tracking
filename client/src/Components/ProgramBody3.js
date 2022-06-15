import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ScaleIcon from "@mui/icons-material/Scale";

const ProgramBody3 = () => {
  return (
    <Container sx={{ mt: 5}}>
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          backgroundColor: "#292929",
          display: "inline-flex"
        }}
      >
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              ml: 0,
              mt: -10,
              fontFamily: "Staatliches",
              letterSpacing: 1.5,
              textAlign: "center",
            }}
          >
            Gymnastics
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 6,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            Gymnastics is a sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination, dedication and endurance.
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 1,
              textAlign: "center",
              mt: 4
            }}
          >
            <Button
              style={{
                fontSize: "10px",
                color: "#cfcfcf",
                textDecoration: "none",
                border: "1px solid lightgrey",
              }}
              href='/gymnastics'
            >
              Join Program
            </Button>
          </Typography>
        </Box>
      </Box>
      {/*  */}
            
      {/*  */}
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          backgroundColor: "#292929",
          display: "inline-flex",
          ml: 5
        }}
      >
        <Box sx={{ mt: 0 }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              ml: 0,
              fontFamily: "Staatliches",
              letterSpacing: 1.5,
              textAlign: "center",
            }}
          >
           Kettlebell Training
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 3,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            Kettlebell training builds powerful forearms and a strong grip. Kettlebells possess a thicker handle than their barbell and dumbbell counterparts taxing your grip and developing greater forearm strength.
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 1,
              textAlign: "center",
            }}
          >
            <Button
              style={{
                fontSize: "10px",
                color: "#cfcfcf",
                textDecoration: "none",
                border: "1px solid lightgrey",
              }}
              href='/kettlebell'
            >
              Join Program
            </Button>
          </Typography>
        </Box>
      </Box>
      {/* 
       */}
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          backgroundColor: "#292929",
          display: "inline-flex",
          ml: 5
        }}
      >
        <Box sx={{ mt: 0 }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              ml: 0,
              fontFamily: "Staatliches",
              letterSpacing: 1.5,
              textAlign: "center",
            }}
          >
            Yoga
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 6,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind.
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 1,
              textAlign: "center",
              mt: 4
            }}
          >
            <Button
              style={{
                fontSize: "10px",
                color: "#cfcfcf",
                textDecoration: "none",
                border: "1px solid lightgrey",
              }}
              href='/yoga'
            >
              Join Program
            </Button>
          </Typography>
        </Box>
      </Box>
      {/*  */}
      {/*  */}
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          backgroundColor: "#292929",
          display: "inline-flex",
          ml: 5
        }}
      >
        <Box sx={{ mt: 0 }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              ml: 0,
              fontFamily: "Staatliches",
              letterSpacing: 1.5,
              textAlign: "center",
            }}
          >
            Cardio 
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 6,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            Cardio, which is fitness slang for cardiovascular activity, may be one of the most important types of physical activity to do on the regular.
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 1,
              textAlign: "center",
              mt: 4
            }}
          >
            <Button
              style={{
                fontSize: "10px",
                color: "#cfcfcf",
                textDecoration: "none",
                border: "1px solid lightgrey",
              }}
              href='/cardio'
            >
              Join Program
            </Button>
          </Typography>
        </Box>
      </Box>
        {/* 
         */}
         
    </Container>
  );
};

export default ProgramBody3;