import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import carronImg from "../assets/carron.jpeg";
import emmaImg from "../assets/emma.jpeg";
import lizaImg from "../assets/liza.jpeg";
import meganImg from "../assets/megan.jpeg";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Avtar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr: DataType[] = [
  {
    avatar: <img src={carronImg} style={{ borderRadius: "50%" }} />,
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
    avatar: <img src={emmaImg} style={{ borderRadius: "50%" }} />,
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
    avatar: <img src={lizaImg} style={{ borderRadius: "50%" }} />,
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
    avatar: <img src={meganImg} style={{ borderRadius: "50%" }} />,
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

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main> {Table()}</main>
    </div>
  );
};

export default Customers;
