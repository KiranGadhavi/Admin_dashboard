import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
interface DataType{
  user: string;
  amount:  number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[]=[
  {
  Header: "User",
  accessor: "user",
},
{
  Header: "Amount",
  accessor: "amount",
},
{
  Header: "Discount",
  accessor: "discount",
},
{
  Header: "Status",
  accessor: "status",
},
{
  Header: "Action",
  accessor: "action",
},
]


const arr: DataType[] = [
{
  user: "Peter",
  amount:  5001,
  discount: 500,
  quantity: 3,
  status: <span className="red">Processing</span>,
  action: <Link to="/admin/transaction/kdks">Manager</Link>
},
{
  user: "Charles",
  amount:  3001,
  discount: 300,
  quantity: 4,
  status: <span className="green">Processing</span>,
  action: <Link to="/admin/transaction/kdks">Manager</Link>
},
{
  user: "Alex",
  amount:  2001,
  discount: 200,
  quantity: 6,
  status: <span className="purple">Processing</span>,
  action: <Link to="/admin/transaction/kdks">Manager</Link>
},
];

const Transaction = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true,
      ),[]
  )
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main> {Table()}</main>
  
    </div>

  )
}

export default Transaction
