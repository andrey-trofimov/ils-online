import React from "react";
import { Layout } from "antd";
import Map from "./Map";
import SideBar from "./SideBar";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />

      <Content>
        <Map />
      </Content>
    </Layout>
  );
}

export default App;
