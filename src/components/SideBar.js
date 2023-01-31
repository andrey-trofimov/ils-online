import React from "react";
import { Space, Collapse, Layout } from "antd";
import RouteTable from "./RouteTable";
import TaskDescription from "./TaskDescription";
import "../styles/sideBar.css";

const { Panel } = Collapse;
const { Sider } = Layout;

function SideBar() {
  return (
    <Sider width={"fit-content"} breakpoint="lg" collapsedWidth="0">
      <div className="side-bar-scroll">
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <RouteTable />

          <Collapse className="task-description">
            <Panel header="Описание задания">
              <TaskDescription />
            </Panel>
          </Collapse>
        </Space>
      </div>
    </Sider>
  );
}

export default SideBar;
