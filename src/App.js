import { Login } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotel from "./Components/Hotel/Hotel";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import List from "./Pages/Home/List/List";
import Hotels from "./Pages/Hotels/Hotels";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:id" element={<Hotel />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
