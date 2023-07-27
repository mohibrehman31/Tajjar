import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
import { MainLayout } from "./components/Layout/Layout";
import Login from "src/pages/LoginPage/index";
import Forget from "./pages/ForgetPage";
import Signup from "./pages/SignupPage";
import { ShipManagement } from "./pages/ShipManagement";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User/*" element={<User />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<MainLayout />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ShipManagement" element={<ShipManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
