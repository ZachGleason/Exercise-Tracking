import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cross from '../Assets/cross.jpeg';
import Cycle from '../Assets/cycle.jpeg';
import Water from '../Assets/water.webp';
import Group from '../Assets/group.jpeg';
import Lift from '../Assets/lift.jpeg';
import Rope from '../Assets/rope.jpeg';
import Squats from '../Assets/squats.jpeg';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const ChallengeBody = () => {
    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(false);
    const [openThird, setOpenThird] = React.useState(false);
    const [openFourth, setOpenFourth] = React.useState(false);
    const [openFifth, setOpenFifth] = React.useState(false);
    const [openSixth, setOpenSixth] = React.useState(false);
    
  return (
    <Container sx={{ margin: "auto", width: 1200}}>
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: "1px solid white", display: "inline-block", mr: 2, mb: 4 }}>
            <img src={Cross} width={"345px"} height={"445px"} style={{borderRadius: '40px', mt: 2, position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 4 }}>
                    Powerlifting Challenge
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    3 Weeks
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenFirst(true)}>
                        Join Now
                    </Button>
                </Typography>
                    <Modal open={openFirst} onClose={() => setOpenFirst(false)} center styles={{modal: { width: 900, height: 450 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/powerchallenge.png')} alt="steak" style={{ width: 760, height: 420}}></img>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 27, background: "linear-gradient(#ffff66, #ff9933);"}} ></Box>
        </Box>
        {/*  */}
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: "1px solid white", display: "inline-block", mr: 2, mb: 4}}>
            <img src={Cycle} width={"347px"} height={"445px"} style={{borderRadius: '40px', mt: 2, position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 10 }}>
                   H.I.T Training
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    5 Days
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenSecond(true)}>
                        Join Now
                    </Button>
                </Typography>
                <Modal open={openSecond} onClose={() => setOpenSecond(false)} center styles={{modal: { width: 900, height: 450 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <iframe src="https://www.youtube.com/embed/05moSguPwfQ" title="youtube" style={{ width: 760, height: 420}}></iframe>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 27, background: "linear-gradient(#ffff66, #ff9933);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 31, background: "linear-gradient(#ff6600, #ff0000);"}} ></Box>
        </Box>
        {/*  */}
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: "1px solid white", display: "inline-block", mr: 2, mb: 4}}>
            <img src={Water} width={"345px"} height={"445px"} style={{borderRadius: '40px', mt: 2, position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "gray", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 4 }}>
                    Drink Water Challenge
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    30 Days
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenThird(true)}>
                        Join Now
                    </Button>
                </Typography>
                <Modal open={openThird} onClose={() => setOpenThird(false)} center styles={{modal: { width: 900, height: 850 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/waterchallenge.jpeg')} alt="" style={{ width: 760, height: 820}}></img>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 62, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
        </Box>
        {/* */}
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: '1px solid white', display: "inline-block", mr: 2, }}>
            <img src={Group} width={"347px"} height={"445px"} style={{borderRadius: '40px', position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 3 }}>
                    Group Exercise Challenge
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    7 Days
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenFourth(true)}>
                        Join Now
                    </Button>
                </Typography>
                <Modal open={openFourth} onClose={() => setOpenFourth(false)} center styles={{modal: { width: 900, height: 850 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                             <img src={require('../Assets/group.png')} alt="" style={{ width: 760, height: 800}}></img>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 27, background: "linear-gradient(#ffff66, #ff9933);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 31, background: "linear-gradient(#ff6600, #ff0000);"}} ></Box>
        </Box>
        {/*  */}
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: "1px solid white", display: "inline-block", mr: 2, }}>
            <img src={Lift} width={"345px"} height={"445px"} style={{borderRadius: '40px',  position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 4 }}>
                    BodyBuilding Challenge
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    28 Days
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenFifth(true)}>
                        Join Now
                    </Button>
                </Typography>
                <Modal open={openFifth} onClose={() => setOpenFifth(false)} center styles={{modal: { width: 900, height: 850 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/bodychallenge.jpeg')} alt="" style={{ width: 760, height: 800}}></img>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 27, background: "linear-gradient(#ffff66, #ff9933);"}} ></Box>
        </Box>
        {/*  */}
        <Box sx={{ width: 350, height: 450, borderRadius: 10, border: "1px solid white", display: "inline-block", mr: 2, }}>
            <img src={Rope} width={"345px"} height={"445px"} style={{borderRadius: '40px',  position: "absolute" }} alt="cross"></img>
            <Box sx={{ ml: 4.5}}>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "20px", fontFamily: "Staatliches", letterSpacing: 1.5, ml: 6 }}>
                    CrossFit Challenge
                </Typography>
                <Typography sx={{ position: "absolute", color: "white", fontSize: "15px", mt: 3.5, fontFamily: "Staatliches", letterSpacing: 1.5, ml: 5.5 }}>
                    <EventNoteIcon/>
                    6 Days
                    <Button sx={{ color: 'white', backgroundColor: 'gray', borderColor: 'white', border: "1px solid white", opacity: 0.8, height: "15px", ml: 3, mt: "-1px"}} onClick={() => setOpenSixth(true)}>
                        Join Now
                    </Button>
                </Typography>
                <Modal open={openSixth} onClose={() => setOpenSixth(false)} center styles={{modal: { width: 900, height: 850 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/crosschallenge.png')} alt="" style={{ width: 760, height: 800}}></img>
                    </Modal>
            </Box>
            <Box sx={{ width: "215px", height: "40px", background: "black", position: "absolute", borderRadius: "20px", mt: 50, ml: 9, opacity: 0.7}}>
                <Typography sx={{ color: "white", fontSize: 23, top: 0, mt: 0, ml: 2, fontFamily: "Koulen", position: "absolute" }}>
                    Intensity
                </Typography>
            </Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 23, background: "linear-gradient(#66ff33, #ccff66);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 27, background: "linear-gradient(#ffff66, #ff9933);"}} ></Box>
                <Box sx={{ height: "10px", width: "25px", borderRadius: "40px", top: 0, position: "absolute", mt: 123, ml: 31, background: "linear-gradient(#ff6600, #ff0000);"}} ></Box>
        </Box>
    </Container>
  )
}

export default ChallengeBody;