import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps{
horizontal?: boolean,
data_1:      number[];
data_2:      number[];
title_1:     string;
title_2:     string;
bgColor1 :   string;
bgColor2:    string;
labels?:      string[]; 
}
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  

export const BarChart=({horizontal = false,
    data_1 = [],   
    data_2 = [],   
    title_1,  
    title_2,  
    bgColor1,
    bgColor2,
    labels = months, }: BarChartProps) =>{

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal? 'y' : 'x',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid:{
                display: false,
            },
        },
        x: {
            beginAtZero: true,
            grid:{
                display: false,
            },
        },
    },
  };
  
  
   const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor1,
      },
      { 
        label: title_2,
        data: data_2,
        backgroundColor: bgColor2,
      },
    ],
  };
  return <Bar options={options} data={data} />
}