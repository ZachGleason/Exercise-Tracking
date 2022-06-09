import React from 'react'
import Navigate from '../../Components/Navigate'
import ProgramBody from '../../Components/ProgramBody'
import ProgramBody2 from '../../Components/ProgramBody2'
import ProgramBody3 from '../../Components/ProgramBody3'

const Programs = () => {
  return (
    <div className='wrapper'>
        <Navigate />
        <ProgramBody />
        <ProgramBody2 />
        <ProgramBody3 />
    </div>
  )
}

export default Programs