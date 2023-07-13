import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
import { MainLayout } from "./components/Layout/layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User/*" element={<User />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
