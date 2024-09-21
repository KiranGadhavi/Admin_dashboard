import React from "react";
import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataItem {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

interface DashboardTableProps {
  data: DataItem[];
}

const columns: Column<DataItem>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable: React.FC<DashboardTableProps> = ({ data }) => {
  const Table = TableHOC<DataItem>(
    columns,
    data,
    "dashboard-product-box",
    "Recent Orders",
    true
  );

  return <Table />;
};

export default DashboardTable;
