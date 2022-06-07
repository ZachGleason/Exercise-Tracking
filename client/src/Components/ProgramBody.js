import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ScaleIcon from "@mui/icons-material/Scale";

const ProgramBody = () => {
  return (
    <Container>
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
            Weight Gain
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
              We’ve seen firsthand individuals who’ve followed our mass-gaining
              programs and reached double digits in four short weeks, averaging
              gains of 2-3 pounds a week. Trust us, it can be done.
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
            Hypertrophy Training
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 7,
              textAlign: "center",
              letterSpacing: "0.4px",
            }}
          >
            <b>
            Hypertrophy training is training with the intent to increase muscle size, or to gain additional muscle mass
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yanone Kaffeesatz",
              color: "#cfcfcf",
              ml: 0.9,
              mt: 1,
              textAlign: "center",
              mt: 6
            }}
          >
            <Button
              style={{
                fontSize: "10px",
                color: "#cfcfcf",
                textDecoration: "none",
                border: "1px solid lightgrey",
              }}
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
            CrossFit
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
            A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.
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
            Powerlifting
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
            Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift. 
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

export default ProgramBody;
