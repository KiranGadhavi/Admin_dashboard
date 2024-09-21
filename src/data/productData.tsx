import React from "react";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg";
import shoesImg from "../assets/shoes.jpeg";
import shirtImg from "../assets/shirt.jpeg";
import jeansImg from "../assets/jeans.jpeg";

export interface DataType {
  photo: React.ReactElement;
  name: string;
  price: number;
  stock: number;
  action: React.ReactElement;
}

const productData: DataType[] = [
  {
    photo: <img src={laptopImg} alt="Laptop" />,
    name: "Macbook",
    price: 232223,
    stock: 512,
    action: <Link to="/admin/product/gyu">Manage</Link>,
  },
  {
    photo: <img src={shoesImg} alt="Shoes" />,
    name: "Shoes",
    price: 232223,
    stock: 112,
    action: <Link to="/admin/product/dfv">Manage</Link>,
  },
  {
    photo: <img src={shirtImg} alt="Shirt" />,
    name: "Shirt",
    price: 232223,
    stock: 312,
    action: <Link to="/admin/product/jkj">Manage</Link>,
  },
  {
    photo: <img src={jeansImg} alt="Jeans" />,
    name: "Jeans",
    price: 232223,
    stock: 102,
    action: <Link to="/admin/product/mm">Manage</Link>,
  },
  // ... (add the rest of the products)
];

export default productData;
