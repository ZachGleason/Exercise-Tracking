import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import Navigate from '../../Components/Navigate';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';

const Update2 = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8000/api/weight/${id}`)
        .then((res) => {
            console.log(res.data.name)
            setAmount(res.data.amount);
            setTime(res.data.time);
            setDate(res.data.date);
        })
        .catch(err => console.log(err))
        }, [])

    const updateWeight = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/weight/${id}`, {
                amount,
                time,
                date,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/weight");
        })
        .catch((err) => {console.log(err)})
        }


  return (
    <div className='updatewrapper'>
        <Navigate />
        <Container sx={{width: 600, height: 400, backgroundColor: "white", borderRadius: 5}}>
            <form onSubmit={ updateWeight } style={{ width: 400, marginTop: 50 }}>
                <label htmlFor="amount" style={{ marginTop: 10, fontFamily: "Koulen", marginLeft: 230}}>Weight(lbs)</label>
                <input type="number" onChange={(e) =>{ setAmount(e.target.value)}} value={amount} name='amount'  style={{ width: 360, height: 40, display: "inline", marginTop: 10, borderRadius: 5,  marginLeft: 100}}/>

                <label htmlFor="time" style={{ marginLeft: 140, fontFamily: "Koulen",  marginLeft: 255}}>Time</label>
                <input type="text" onChange={(e) => {setTime(e.target.value)}} value={time} name="time"style={{ width: 360, height: 40, display: "inline", borderRadius: 5, marginLeft: 100}}/>

                <label htmlFor="date" style={{ marginLeft: 135, fontFamily: "Koulen",  marginLeft: 260}}>Date</label>
                <input type="text" onChange={(e) => {setDate(e.target.value)}} value={date} name="date" style={{ width: 360, height: 40, display: "inline", marginTop: 10, borderRadius: 5, marginLeft: 100}}/>

                <input type="submit" placeholder='Update' style={{ width: 200, height: 40, borderRadius: 5, marginLeft: 160, marginTop: 50}} cols="40" rows="5"/>
                <Link to={`/weight`} style={{diplay: "inline"}}><HomeIcon sx={{ color: "black",  marginLeft: 48, marginTop: -9}}/></Link>
            </form>
        </Container>
    </div>
  )
}

export default Update2;