import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg"
import shoesImg from "../assets/shoes.jpeg"
import shirtImg from "../assets/shirt.jpeg"
import jeansImg from "../assets/jeans.jpeg"
import { FaPlus } from "react-icons/fa";

interface DataType{
  photo: ReactElement;
  name:  string;
  price: number;
  stock: number;
 action: ReactElement;
}
const columns: Column<DataType>[]=[
  {
  Header: "Photo",
  accessor: "photo",
},
{
  Header: "Name",
  accessor: "name",
},
{
  Header: "Price",
  accessor: "price",
},
{
  Header: "Stock",
  accessor: "stock",
},
{
  Header: "Action",
  accessor: "action",
},
]
const arr: DataType[] =[
  {
    photo:<img src={laptopImg}  alt=""/>,
    name: "Macbook",
    price: 232223,
    stock: 512,
    action: <Link to="/admin/product/gyu">Manage</Link>
  },
  {
    photo:<img src={shoesImg} alt=""/>,
    name: "Shoes",
    price: 232223,
    stock: 112,
    action: <Link to="/admin/product/dfv">Manage</Link>
  },
  {
    photo:<img src={shirtImg} alt=""/>,
    name: "Shirt",
    price: 232223,
    stock: 312,
    action: <Link to="/admin/product/jkj">Manage</Link>
  },
  {
    photo:<img src={jeansImg} alt=""/>,
    name: "Jeans",
    price: 232223,
    stock: 102,
    action: <Link to="/admin/product/mm">Manage</Link>
  },
  {
    photo:<img src={laptopImg}  alt=""/>,
    name: "Macbook",
    price: 232223,
    stock: 512,
    action: <Link to="/admin/product/kk">Manage</Link>
  },
  {
    photo:<img src={shoesImg} alt=""/>,
    name: "Shoes",
    price: 232223,
    stock: 112,
    action: <Link to="/admin/product/kj">Manage</Link>
  },
  {
    photo:<img src={shirtImg} alt=""/>,
    name: "Shirt",
    price: 232223,
    stock: 312,
    action: <Link to="/admin/product/lop">Manage</Link>
  },
  {
    photo:<img src={jeansImg} alt=""/>,
    name: "Jeans",
    price: 232223,
    stock: 102,
    action: <Link to="/admin/product/lop">Manage</Link>
  },
]
const Product = () => {
  const [data] = useState<DataType[]>(arr)
  
const Table = useCallback(
  TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Products",
    true,
    ),[]
)
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main> {Table()}</main>
  <Link to="/admin/product/new" className="create-product-btn">
  <FaPlus/>
  </Link>
    </div>
  )
}

export default Product
