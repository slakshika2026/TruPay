"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
   const data = {
      datasets: [
         {
            label: 'Banks',
            data: [1250, 3520, 5784],
            backgroundColor: ['#70c3c5', '#81b1a8', '#a48d70']
         }
      ],
      labels: ['Bank1', 'Bank2', 'Bank3',]
   }
   return (
      <Doughnut data={data}
         options={{
            cutout: '60%',
            plugins: {
               legend: {
                  display: false
               }
            }

         }} />
   )
}

export default DoughnutChart
