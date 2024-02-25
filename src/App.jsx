import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  );
}

export default App;
