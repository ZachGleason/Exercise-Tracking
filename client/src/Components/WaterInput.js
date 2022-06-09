import React, {useState, useEffect} from 'react';
import axios from 'axios';

const WaterInput = (props) => {
  const {water, setWater} = props;
  const [ amount, setAmount ] = useState("");
  const [ time, setTime ] = useState("");
  const [ date, setDate ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/water', {
    amount, 
    time,
    date,
})
    .then(res=>{
        setWater([...water, res.data])
        e.target.reset()
        setAmount('')
        setTime('')
        setDate('') })
    .catch(err=>console.log(err))

}


  return (
    <div style={{ width: 300, marginLeft: 500}}>
        <form onSubmit={ submitHandler }>
            <label for='water' style={{ marginLeft: 40, fontFamily: "Koulen", letterSpacing: 1.5, fontSize: 20}}> Daily Water(OZ) Tracker</label>
            <input type="number" name='water' style={{ width: 300}} onChange={(e) => setAmount(e.target.value)}></input>
            <label for='time' style={{ marginLeft: 80, fontFamily: "Koulen", letterSpacing: 1.5, fontSize: 20}}> Time Consumed</label>
            <input type="text" name='time' style={{ width: 300}} onChange={(e) => setTime(e.target.value)}></input>
            <label for='date' style={{ marginLeft: 80, fontFamily: "Koulen", letterSpacing: 1.5, fontSize: 20}}> Date Consumed</label>
            <input type="text" name='date' style={{ width: 300}} onChange={(e) => setDate(e.target.value)}></input>
            <button style={{ width: 250, height: 60, marginLeft: 30,  borderRadius: 20, marginTop: 15}} className="gradient-button gradient-button-3">
                    Submit
            </button>
        </form>
    </div>
  )
}

export default WaterInput;