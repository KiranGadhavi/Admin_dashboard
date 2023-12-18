//import React from 'react'
import AdminSidebar from "../components/AdminSidebar"
import {BsSearch} from "react-icons/bs"
import {FaRegBell} from "react-icons/fa"
import userImg from "../assets/girl.jpeg"
import {HiTrendingUp,HiOutlineTrendingDown, HiTrendingDown} from "react-icons/hi"

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
        <section className="widgetcontainer">
          <WidgetItem heading={"bar"} percent={40} amount={true} value={3400000}></WidgetItem>
          <WidgetItem heading={"bar"} percent={40} amount={true} value={3400000}></WidgetItem>
          <WidgetItem heading={"bar"} percent={40} amount={true} value={3400000}></WidgetItem>
          <WidgetItem heading={"bar"} percent={40} amount={true} value={3400000}></WidgetItem>
       
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
const WidgetItem = ({heading, value, percent, color, amount}:widgetItemProps) =>

<article className="widget">
  <div className="widget">
    <p>{heading}</p>
    <h4>{amount?`$${value}`:value}</h4>
    {percent > 0 ?(
    <span className="green">
      <HiTrendingUp/>+{percent}%{" "}
    </span>):(
      <span className="green">
      <HiTrendingDown/>-{percent}%{" "}
    </span>
    )}
  </div>
  <div></div>
</article>
export default  Dashboard;