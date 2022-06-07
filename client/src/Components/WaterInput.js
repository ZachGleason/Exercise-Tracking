import React from 'react'

const WaterInput = () => {
  return (
    <div style={{ width: 300, marginLeft: 500}}>
        <form>
            <label for='water' style={{ marginLeft: 45, fontFamily: "Staatliches", letterSpacing: 1.5, fontSize: 20}}> Daily Water(OZ) Tracker</label>
            <input type="number" name='water' style={{ width: 300}}></input>
            <button style={{ width: 250, height: 60, marginLeft: 30,  borderRadius: 20, marginTop: 15}} className="gradient-button gradient-button-3">
                    Submit
            </button>
        </form>
    </div>
  )
}

export default WaterInput;