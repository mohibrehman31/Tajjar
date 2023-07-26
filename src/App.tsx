import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
import { MainLayout } from "./components/Layout/Layout";
import { ShipManagement } from "./pages/ShipManagement";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User/*" element={<User />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="/ShipManagement" element={<ShipManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
