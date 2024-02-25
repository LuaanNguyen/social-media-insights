import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </>
  );
}

export default App;
