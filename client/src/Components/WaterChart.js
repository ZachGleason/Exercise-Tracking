import React from 'react';
import { Pie } from 'react-chartjs-2';
import Box from "@mui/material/Box";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

const data = {
    labels: [ 'Water (Oz)', 'Remaining'],
    datasets: [
      {
        data: [1, 10],
        backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

const WaterChart = () => {
  return (
    <Box sx={{ height: 400, width: 400,}}>
        <Pie data={data}/>
    </Box>
  )
}

export default WaterChart