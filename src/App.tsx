import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
// import { MainLayout } from "./components/Layout/Layout";
import Login from "src/pages/LoginPage/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User/*" element={<User />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
