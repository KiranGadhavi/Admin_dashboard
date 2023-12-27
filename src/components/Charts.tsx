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
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar,Doughnut, Line, Pie } from 'react-chartjs-2';
 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
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
        display: true,
      },
      title: {
        display: false,
       // text: "Chart.js Bar Chart"
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
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage: 0.4
      },
      { 
        label: title_2,
        data: data_2,
        backgroundColor: bgColor2,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage: 0.4
      },
    ],
  };
  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />
}

interface DoughnutChartProps {
labels:          string[];
data:            number[];
backgroundColor: string[];
cutout?:         number | string;
legend?:         boolean;
offset?:         number[]
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legend=true,
  offset
  }:DoughnutChartProps) => {
    const doughnutData: ChartData <"doughnut",number[],string> ={
  labels,
  datasets:[
  {
    data,
    backgroundColor,
    borderWidth:0,
    offset,
}
]
};
    const doughnutOptions: ChartOptions <"doughnut"> = {
        responsive: true,
    plugins: {
      legend: {
        display: legend,
        position: "bottom",
        labels:{
            padding:40,
        }
      },
    },
    cutout,
}
    return<Doughnut data={doughnutData} options={doughnutOptions}/>;
}
interface PieChartProps {
  labels:          string[];
  data:            number[];
  backgroundColor: string[];
  offset?:         number[]
  }
export const PieChart = ({
  labels,
  data,
  backgroundColor,
  offset
  }:PieChartProps) => {
    const PieChartData: ChartData <"pie",number[],string> ={
  labels,
  datasets:[
  {
    data,
    backgroundColor,
    borderWidth:1,
    offset,
}
]
};
    const PieChartOptions: ChartOptions <"pie"> = {
        responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels:{
            padding:40,
        }
      },
    },
}
    return<Pie data={PieChartData} options={PieChartOptions}/>;
}

interface LineChartProps {
  data:            number[];
  label:           string;
  backgroundColor: string;
  borderColor:     string;
  labels?:         string[];
  }
export const LineChart = ({
  label,
  data,
  borderColor,
  backgroundColor,
  labels =months,

  }:LineChartProps) => {
  const lineChartData: ChartData <"line",number[],string> ={
  labels,
  datasets:[
  {
    fill: true,
    label,
    data,
    backgroundColor,
    borderColor,
    borderWidth:1,
}
]
};
    const options: ChartOptions <"line"> = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: false,
         // text: "Chart.js Bar Chart"
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
              grid:{
                  display: false,
              },
          },
      },
    };
    return<Line data={lineChartData} options={options}/>;
}
