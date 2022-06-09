import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ScaleIcon from "@mui/icons-material/Scale";

const ProgramBody2 = () => {
  return (
    <Container sx={{ mt: 5}}>
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 5,
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
            Strong Man
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 3 ,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            To be a strongman requires exceptional functional strength that is not achieved through basic resistance training. It requires strength, power, movement coordination, plus a ton of core and grip strength.
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
              href="/strongman"
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
          borderRadius: 5,
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
            Quick Circuit
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
            Circuit training is one of the best ways to make a resistance and strength training workout that is challenging for your heart and lungs.
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
              href="/circuit"
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
          borderRadius: 5,
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
            High-Volume Training
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
            A high volume programme allows the trainee to both increase muscle and lose fat, as well as to adapt to a high lactic acid threshold.
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
              href="/highvolume"
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
          borderRadius: 5,
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
            Strength Training
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
            Strength training or resistance training involves the performance of physical exercises that are designed to improve strength and endurance. It is often associated with the lifting of weights.
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
              href="/strength"
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

export default ProgramBody2;