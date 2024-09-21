"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

   const accountsNames = accounts.map((a) => a.name);
   const balances = accounts.map((accounts) => accounts.currentBalance)

   const data = {
      datasets: [
         {
            label: 'Banks',
            data: balances,
            backgroundColor: ['#70c3c5', '#81b1a8', '#a48d70']
         }
      ],
      labels: accountsNames
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
