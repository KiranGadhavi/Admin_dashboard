//import React from 'react'
import AdminSidebar from "../components/AdminSidebar"
import {BsSearch} from "react-icons/bs"
import {FaRegBell} from "react-icons/fa"
import userImg from "../assets/girl.jpeg"
import {HiTrendingUp, HiTrendingDown} from "react-icons/hi"
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from "../components/Charts"
import {BiMaleFemale} from "react-icons/bi"
import Table from "../components/DashboardTable"

function Dashboard() {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard"> 
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users,docs"/>
          <FaRegBell/>
          <img src={userImg} alt="User"/>
        </div>
        <section className="widgetContainer">
          <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)"></WidgetItem>
          <WidgetItem percent={-14} value={400} heading="Users" color="rgb(0,198,202)"></WidgetItem>
          <WidgetItem  percent={80}  value={23000} heading="Transactions" color="rgb(255,196,0)"></WidgetItem>
          <WidgetItem  percent={30}  value={1000} heading="Products" color="rgb(76,0,255)"></WidgetItem>
       
        </section>
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>REVENUE & TRANSACTION</h2>
            <BarChart 
            data_1={[300,144,433,655,237,755,190]}
            data_2={[200,444,343,556,778,455,990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor1="rgb(0,115,255)"
            bgColor2="rgba(53,162,235,0.8 )"/>
          </div>
          <div className="dashboardCategories">
            <h2>INVENTORY</h2>
            <div>
              {data.categories.map((i)=>(
            <CategoryItem key={i.heading}
             heading={i.heading}
             value={i.value} 
             color={`hsl(${i.value * 4}, 100%,50%)`}/>
             ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutChart labels={["Female", "Male"]} data={[12,19]} 
             backgroundColor={["hsl(340, 82%, 56%)","rgba(53,162,235,0.8)"]} 
             cutout={90}/>
            <p>
             <BiMaleFemale/>
            </p>
          </div>
          <Table data={data.transaction}/>
        </section>
      </main>
     
      
      </div>
  )
}
interface widgetItemProps{
  heading:string;
  value: number;
  percent: number;
  color:string;
  amount?:boolean;

}
const WidgetItem = ({heading, value, percent, color, amount=false}:widgetItemProps) =>

<article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount?`$${value}`:value}</h4>
    {percent > 0 ?(
    <span className="green">
      <HiTrendingUp/>+{percent}%{" "}
    </span>):(
      <span className="green">
      <HiTrendingDown/>{percent}%{" "}
    </span>
    )}
  </div>
  <div className="widgetCircle"
  style={{
    background:`conic-gradient(${color} ${(Math.abs(percent)/100)*360}deg, rgb(255,255,255)0)`
  }}>
    <span style={{color}}>{percent}%</span>
  </div>
</article>


interface CategoryItemProps{
  color:string;
  heading:string;
  value: number;
}

const CategoryItem =({color,value,heading}:CategoryItemProps)=>
<div className="categoryItem">
  <h5>{heading}</h5>
  <div>
    <div style={{backgroundColor:color,width:`${value}%`}}>
    </div>
  </div>
  <span>{value}%</span>
</div>
export default  Dashboard;