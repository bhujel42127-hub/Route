import { Outlet } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Layout />
      <Outlet />
    </div>
  );
}

export default App;
