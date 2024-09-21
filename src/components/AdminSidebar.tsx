import { IconType } from "react-icons";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

// Define menu items
const MENU_ITEMS = [
  {
    title: "Dashboard",
    items: [
      { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
      { url: "/admin/products", text: "Product", Icon: RiShoppingBag3Fill },
      { url: "/admin/customers", text: "Customer", Icon: IoIosPeople },
      { url: "/admin/transaction", text: "Transaction", Icon: AiFillFileText },
    ],
  },
  {
    title: "Charts",
    items: [
      { url: "/admin/chart/bar", text: "Bar", Icon: FaChartBar },
      { url: "/admin/chart/pie", text: "Pie", Icon: FaChartPie },
      { url: "/admin/chart/line", text: "Line", Icon: FaChartLine },
    ],
  },
  {
    title: "Apps",
    items: [
      { url: "/admin/app/stopwatch", text: "Stopwatch", Icon: FaStopwatch },
      { url: "/admin/app/coupon", text: "Coupon", Icon: RiCoupon3Fill },
      { url: "/admin/app/toss", text: "Toss", Icon: FaGamepad },
    ],
  },
];

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li: React.FC<LiProps> = ({ url, text, location, Icon }) => (
  <li className={location.pathname.includes(url) ? "active" : ""}>
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = useCallback(() => {
    setPhoneActive(window.innerWidth < 1100);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  const sidebarStyle = phoneActive
    ? {
        width: "20rem",
        height: "100vh",
        position: "fixed" as const,
        top: 0,
        left: showModal ? 0 : "-20rem",
        transition: "all 0.5s",
      }
    : {};

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside style={sidebarStyle}>
        <div className="logo-container">
          <div className="logo-icon">
            <div className="logo-square"></div>
            <div className="logo-circle"></div>
          </div>
          <h2 className="logo-text">
            Admin<span className="logo-highlight">Pro</span>
          </h2>
        </div>
        {MENU_ITEMS.map((section, index) => (
          <div key={index} className="menu-section">
            <h5
              style={{
                color: "#7f8c8d",
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              {section.title}
            </h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.items.map((item) => (
                <Li
                  key={item.url}
                  url={item.url}
                  text={item.text}
                  Icon={item.Icon}
                  location={location}
                />
              ))}
            </ul>
          </div>
        ))}
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default AdminSidebar;
