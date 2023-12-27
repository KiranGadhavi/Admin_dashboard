import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"
const months =
["January","feburary","March","April","May","June","July","August","Sept","Oct","Nov","Dec",];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
          data_1={[200,444,343,556,778,455,990]}
          data_2={[300,144,433,655,237,755,190]}
          title_1="Products"
          title_2="Users"
          bgColor1={`hsl(260,50%,30%)`}
          bgColor2={`hsl(360,90%,90%)`}/>
          <h2>Top selling products & top customers</h2>
          </section>
          <section>
          <BarChart
          horizontal={true}
          data_1={[200,444,343,556,778,455,990,300,144,433,655,237,]}
          data_2={[0]}
          title_1="Products"
          title_2=""
          bgColor1={`hsl(180,40%,50%)`}
          bgColor2=""
          labels= {months}/>
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
          </section>
          </main>
    </div>
  )
}

export default BarCharts
