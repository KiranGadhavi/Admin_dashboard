import React, { useState, useEffect } from "react";
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
  onClick: () => void;
}

const Li: React.FC<LiProps> = ({ url, text, location, Icon, onClick }) => (
  <li className={location.pathname.includes(url) ? "active" : ""}>
    <Link to={url} onClick={onClick}>
      <Icon />
      {text}
    </Link>
  </li>
);

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1100;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const closeSidebar = () => {
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      {isMobile && (
        <button id="hamburger" onClick={toggleSidebar}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        className={`admin-sidebar ${
          isMobile ? (showSidebar ? "show" : "hide") : ""
        }`}
      >
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
            <h5>{section.title}</h5>
            <ul>
              {section.items.map((item) => (
                <Li
                  key={item.url}
                  url={item.url}
                  text={item.text}
                  Icon={item.Icon}
                  location={location}
                  onClick={closeSidebar}
                />
              ))}
            </ul>
          </div>
        ))}
        {isMobile && (
          <button id="close-sidebar" onClick={closeSidebar}>
            Close
          </button>
        )}
      </aside>
      {isMobile && showSidebar && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}
    </>
  );
};

export default AdminSidebar;
