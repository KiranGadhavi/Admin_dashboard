import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts";
const months =
["January","feburary","March","April","May","June","July","August","Sept","Oct","Nov","Dec",];


const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
          data={[200,444,343,556,778,455,990,300,144,433,655,237,755,190]}
          label="Users"
          borderColor="rgb(53,162,255)"
          backgroundColor="rgb(53,162,255,0.5)"
          labels={months}
          />
          <h2>Active Users</h2>
          </section>
          <section>
          <LineChart
          data={[2200,1444,3443,5526,7178,4055,9190,3200,1144,4233,6155,2317,7515,1960]}
         backgroundColor={"hsla(269,80%,40%,0.4)"}
          borderColor="hsl(269,80%,40%)"
        label="Products"
          labels={months}
          />
          <h2>Total Products (SKU)</h2>
          </section>
          <section>
          <LineChart
          data={[24200,11444,22443,13526,29178,12055,22190,13200,31144,44233,36155,142317,127515,120960]}
         backgroundColor={"hsla(129,80%,40%,0.4)"}
          borderColor="hsl(129,80%,40%)"
          label="Revenue"
          labels={months}
          />
          <h2>Total Revenue</h2>
          </section>
          <section>
          <LineChart
          data={[24200,11444,22443,13526,29178,12055,22190,13200,31144,44233,36155,142317,127515,120960]}
         backgroundColor={"hsla(29,80%,40%,0.4)"}
          borderColor="hsl(29,80%,40%)"
          label="Discount"
          labels={months}
          />
          <h2>Total Discount</h2>
          </section>

          /</main>
    </div>
  )
}

export default LineCharts
