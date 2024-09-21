import React from "react";
import { FaTrash } from "react-icons/fa";
import carronImg from "../assets/carron.jpeg";
import emmaImg from "../assets/emma.jpeg";
import lizaImg from "../assets/liza.jpeg";
import meganImg from "../assets/megan.jpeg";

interface CustomerData {
  avatar: React.ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: React.ReactElement;
}

const customerData: CustomerData[] = [
  {
    avatar: (
      <img src={carronImg} alt="Carron Smith" style={{ borderRadius: "50%" }} />
    ),
    name: "Carron Smith",
    email: "carron.smith@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img src={emmaImg} alt="Emma Parsh" style={{ borderRadius: "50%" }} />
    ),
    name: "Emma Parsh",
    email: "emma.parsh@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img src={lizaImg} alt="Liza Sin" style={{ borderRadius: "50%" }} />
    ),
    name: "Liza Sin",
    email: "liza.sin@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img src={meganImg} alt="Megan Hunt" style={{ borderRadius: "50%" }} />
    ),
    name: "Megan Hunt",
    email: "megan.hunt@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

export default customerData;
