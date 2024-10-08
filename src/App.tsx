import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));

const NewProduct = lazy(() => import("./management/NewProduct"));
const ProductManagement = lazy(() => import("./management/ProductManagement"));
const TransactionManagement = lazy(
  () => import("./management/TransactionManagement")
);

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="welcome-page">
                <div className="welcome-content">
                  <h1>Admin Control Center</h1>
                  <p>
                    Streamline operations and boost productivity with our
                    comprehensive dashboard
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-chart-line"></i>
                      <span>Real-time Analytics</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-users-cog"></i>
                      <span>User Management</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-tasks"></i>
                      <span>Task Automation</span>
                    </div>
                  </div>
                  <Link to="/admin/dashboard">
                    <button className="dashboard-button">
                      Access Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          <Route path="/admin/app/StopWatch" element={<StopWatch />} />
          <Route path="/admin/app/Coupon" element={<Coupon />} />
          <Route path="/admin/app/Toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
