import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
import { MainLayout } from "./components/Layout/Layout";
import Login from "src/pages/LoginPage/index";
import Forget from "./pages/ForgetPage";
import Signup from "./pages/SignupPage";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
