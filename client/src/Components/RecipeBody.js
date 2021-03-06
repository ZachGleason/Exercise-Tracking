import React, { useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import food1 from '../Assets/chicken.jpg';
import food2 from '../Assets/salad.jpg';
import food3 from '../Assets/pasta.jpg';
import food4 from '../Assets/food.jpg';
import food5 from '../Assets/avacado.jpg';
import Ratings from 'react-ratings-declarative';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, makeStyles } from "@material-ui/core";
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";


const RecipeBody = () => {
    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(false);
    const [openThird, setOpenThird] = React.useState(false);
    const [openFourth, setOpenFourth] = React.useState(false);
    const [openFifth, setOpenFifth] = React.useState(false);


  return (
    <Box sx={{ border: "1px solid black", height: "400px", width: "590px", borderRadius: "20px", mt: 0, ml: 0, overflow: "scroll", }}>
            <Box sx={{ width: "575px", height: "40px", border: "1px solid black", borderRadius: "10px", mt: 1, ml: 1, backgroundColor: "#ffbf70"  }}>
                <Typography sx={{ textAlign: "center", mt: 1  }}>
                    <b>Recommended Recipes</b>
                </Typography>
            </Box>
                <Box sx={{ width: "575px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1.5  }} >
                    <img src={food1} alt="test" width={"92px"} height={"90px"} className="program" overflow={'hidden'} display={"flex"} style={{borderRadius: '5px', mr: 10 }}/>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 47, mt: -1}}>
                        <Typography sx={{position: "relative", display: "flex", ml: 3, mt: -10, fontFamily: "Koulen"}}>
                            Steak Dinner
                        </Typography>
                        <Button  style={{ backgroundColor: 'transparent' }} disableRipple onClick={() => setOpenFirst(true)} >
                            <AddCircleOutlineIcon sx={{ marginLeft: 20, marginTop: -7.5, color: "black"}} />
                        </Button>
                    </Box>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 13, mt: -3}}>
                        <Typography sx={{fontFamily: "Koulen", letterSpacing: "0.5px", ml: 4, mt: 0}}>
                            Advanced
                        </Typography>
                        <Box sx={{ width: 200, marginTop: 1}}>
                            <Ratings>
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="black"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="2px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                            </Ratings>
                        </Box>
                    </Box>
                        <Typography sx={{ ml: 44, mt: 0, wordSpacing: "40px", fontFamily: "Koulen", fontSize: "20px"}}>
                            35 705 60g
                        </Typography>
                        <Typography sx={{ ml: 44, mt: -1, wordSpacing: "42px", fontFamily: "Koulen", fontSize: "15px", color: "darkgrey"}}>
                            Min Kcal Protein
                        </Typography>

                        <Modal open={openFirst} onClose={() => setOpenFirst(false)} center styles={{modal: { width: 900, height: 450 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/steakinstructions.jpeg')} alt="steak"></img>
                        </Modal>
                </Box>
                <Box sx={{ width: "575px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,   }}>
                    <img src={food2} alt="test" width={"100px"} height={"90px"} className="program" overflow={'hidden'}  style={{borderRadius: '20px', marginLeft: "px"}}/>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 47, mt: -1}}>
                        <Typography sx={{position: "relative", display: "flex", ml: 3.5, mt: -11, fontFamily: "Koulen"}}>
                            Salad Lunch
                        </Typography>
                        <Button  style={{ backgroundColor: 'transparent' }} disableRipple onClick={() => setOpenSecond(true)}>
                            <AddCircleOutlineIcon sx={{ marginLeft: 20, marginTop: -6, color: "black"}} />
                        </Button>
                    </Box>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 13, mt: -3}}>
                        <Typography sx={{fontFamily: "Koulen", letterSpacing: "0.5px", ml: 4}}>
                            Beginner
                        </Typography>
                        <Box sx={{ width: 200, marginTop: 1}}>
                            <Ratings>
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="black"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="2px" widgetDimension="30px" widgetRatedColor="yellow"  />
                            </Ratings>
                        </Box>
                    </Box>
                        <Typography sx={{ ml: 44, mt: 1, wordSpacing: "40px", fontFamily: "Koulen", fontSize: "20px"}}>
                            5 150 10g
                        </Typography>
                        <Typography sx={{ ml: 44, mt: -1, wordSpacing: "30px", fontFamily: "Koulen", fontSize: "15px", color: "darkgrey"}}>
                            Min Kcal Protein
                        </Typography>
                        
                        <Modal open={openSecond} onClose={() => setOpenSecond(false)} center styles={{modal: { width: 900, height: 750 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/saladinstructions.png')} alt="salad" style={{ height: 650, width: 760}}></img>
                        </Modal>
        
                </Box>
                <Box sx={{ width: "575px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,  }}>
                    <img src={food3} alt="test" width={"100px"} height={"90px"} className="program" overflow={'hidden'}  style={{borderRadius: '20px', marginLeft: "px"}}/>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 47, mt: -1}}>
                        <Typography sx={{position: "relative", display: "flex", ml: 2, mt: -11, fontFamily: "Koulen"}}>
                            Spaghetti Dinner
                        </Typography>
                        <Button  style={{ backgroundColor: 'transparent' }} disableRipple onClick={() => setOpenThird(true)}>
                            <AddCircleOutlineIcon sx={{ marginLeft: 20, marginTop: -6, color: "black"}} />
                        </Button>
                    </Box>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 13, mt: -3}}>
                        <Typography sx={{fontFamily: "Koulen", letterSpacing: "0.5px", ml: 3}}>
                            Intermediate
                        </Typography>
                        <Box sx={{ width: 200, marginTop: 1}}>
                            <Ratings>
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="black"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="2px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                            </Ratings>
                        </Box>
                    </Box>
                        <Typography sx={{ ml: 44, mt: 1, wordSpacing: "40px", fontFamily: "Koulen", fontSize: "20px"}}>
                            25 405 20g
                        </Typography>
                        <Typography sx={{ ml: 44, mt: -1, wordSpacing: "42px", fontFamily: "Koulen", fontSize: "15px", color: "darkgrey"}}>
                            Min Kcal Protein
                        </Typography>
                        <Modal open={openThird} onClose={() => setOpenThird(false)} center styles={{modal: { width: 900, height: 450 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/spaghettiinstructions.jpeg')} alt="steak" style={{ height: 400, width: 760}}></img>
                        </Modal>
                </Box>
                <Box sx={{ width: "575px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,  }}>
                    <img src={food4} alt="test" width={"100px"} height={"90px"} className="program" overflow={'hidden'}  style={{borderRadius: '20px', marginLeft: "px"}}/>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 47, mt: -1}}>
                        <Typography sx={{position: "relative", display: "flex", ml: 2.5, mt: -11, fontFamily: "Koulen"}}>
                            Chicken n' Rice
                        </Typography>
                        <Button  style={{ backgroundColor: 'transparent' }} disableRipple onClick={() => setOpenFourth(true)}>
                            <AddCircleOutlineIcon sx={{ marginLeft: 20, marginTop: -6, color: "black"}} />
                        </Button>
                    </Box>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 13, mt: -3}}>
                        <Typography sx={{fontFamily: "Koulen", letterSpacing: "0.5px", ml: 3}}>
                            Intermediate
                        </Typography>
                        <Box sx={{ width: 200, marginTop: 1}}>
                            <Ratings>
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="black"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="2px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                            </Ratings>
                        </Box>
                    </Box>
                        <Typography sx={{ ml: 44, mt: 1, wordSpacing: "40px", fontFamily: "Koulen", fontSize: "20px"}}>
                            30 565 45g
                        </Typography>
                        <Typography sx={{ ml: 44, mt: -1, wordSpacing: "42px", fontFamily: "Koulen", fontSize: "15px", color: "darkgrey"}}>
                            Min Kcal Protein
                        </Typography>
                        <Modal open={openFourth} onClose={() => setOpenFourth(false)} center styles={{modal: { width: 900, height: 450 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/chickeninstructions.jpeg')} alt="steak" style={{ height: 400, width: 760}}></img>
                        </Modal>
                </Box>
                <Box sx={{ width: "575px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,    }}>
                    <img src={food5} alt="test" width={"100px"} height={"90px"} className="program" overflow={'hidden'}  style={{borderRadius: '20px', marginLeft: "px"}}/>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 47, mt: -1}}>
                        <Typography sx={{position: "relative", display: "flex", ml: 2.5, mt: -11, fontFamily: "Koulen"}}>
                            Avacado Toast
                        </Typography>
                        <Button  style={{ backgroundColor: 'transparent' }} disableRipple onClick={() => setOpenFifth(true)}>
                            <AddCircleOutlineIcon sx={{ marginLeft: 20, marginTop: -6, color: "black"}} />
                        </Button>
                    </Box>
                    <Box sx={{ width: "130px", height: "25px", borderRadius: "10px", background: "#ffcc99", top: 0, position: "flex", ml: 13, mt: -3}}>
                        <Typography sx={{fontFamily: "Koulen", letterSpacing: "0.5px", ml: 3}}>
                            Beginner
                        </Typography>
                        <Box sx={{ width: 200, marginTop: 1}}>
                            <Ratings>
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="black"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="2px" widgetDimension="30px" widgetRatedColor="yellow"  />
                                <Ratings.Widget widgetSpacing="1px" widgetDimension="30px" widgetRatedColor="yellow"  />
                            </Ratings>
                        </Box>
                    </Box>
                        <Typography sx={{ ml: 46, mt: 1, wordSpacing: "40px", fontFamily: "Koulen", fontSize: "20px"}}>
                            5 195 8g
                        </Typography>
                        <Typography sx={{ ml: 46, mt: -1, wordSpacing: "30px", fontFamily: "Koulen", fontSize: "15px", color: "darkgrey"}}>
                            Min Kcal Protein
                        </Typography>
                        <Modal open={openFifth} onClose={() => setOpenFifth(false)} center styles={{modal: { width: 800, height: 850 }, overlay: {
                            background: "#cccccc",
                            opacity: 0.7},}}>
                            <img src={require('../Assets/guacinstructions.jpeg')} alt="steak" style={{ height: 800, width: 760}}></img>
                        </Modal>
                       
                    </Box>
                </Box>
  )
}

export default RecipeBody;