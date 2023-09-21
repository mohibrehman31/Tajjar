import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
import { Home } from "./pages/HomePage";
import Login from "src/pages/LoginPage/index";
import Forget from "./pages/ForgetPage";
import Signup from "./pages/SignupPage";
import { ShipManagement } from "./pages/ShipManagement";
import { Services } from "./components/Services";
import { AboutUs } from "./pages/About Us";
import crewingData from "./Data";
import ProfilePage from "./pages/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/User/*" element={<User />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ShipManagement" element={<ShipManagement />} />
          <Route path="/Services" element={<Services data={crewingData} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
