import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/girl.jpeg";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

// Interfaces
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

interface CategoryItemProps {
  color: string;
  heading: string;
  value: number;
}

// Components
const WidgetItem: React.FC<WidgetItemProps> = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value.toLocaleString()}` : value.toLocaleString()}</h4>
      <span className={percent > 0 ? "green" : "red"}>
        {percent > 0 ? <HiTrendingUp /> : <HiTrendingDown />}
        {Math.abs(percent)}%
      </span>
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          Math.abs(percent) * 3.6
        }deg, rgb(255,255,255) 0)`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

const CategoryItem: React.FC<CategoryItemProps> = ({
  color,
  value,
  heading,
}) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }} />
    </div>
    <span>{value}%</span>
  </div>
);

// Constants
const WIDGET_ITEMS = [
  {
    percent: 40,
    amount: true,
    value: 3400000,
    heading: "Revenue",
    color: "rgb(0,115,255)",
  },
  { percent: -14, value: 400, heading: "Users", color: "rgb(0,198,202)" },
  {
    percent: 80,
    value: 23000,
    heading: "Transactions",
    color: "rgb(255,196,0)",
  },
  { percent: 30, value: 1000, heading: "Products", color: "rgb(76,0,255)" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widgetContainer">
          {WIDGET_ITEMS.map((i) => (
            <WidgetItem
              key={i.heading}
              heading={i.heading}
              value={i.value}
              percent={i.percent}
              color={i.color}
              amount={i.amount}
            />
          ))}
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor1="rgb(0,115,255)"
              bgColor2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, 100%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
