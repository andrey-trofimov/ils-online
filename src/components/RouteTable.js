import { Table } from "antd";
import { useDispatch } from "react-redux";
import { getRouteFetch } from "../redux/slices/routeSlice";
import { dataSource, columns } from "./tabelData";

function RouteTable() {
  const dispatch = useDispatch();

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(getRouteFetch(selectedRows || []));
    },
  };

  return (
    <Table
      rowSelection={{ type: "radio", ...rowSelection }}
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      className="mobile-table"
    />
  );
}

export default RouteTable;
