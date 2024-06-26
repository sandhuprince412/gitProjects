import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              Dashboard
            </Route>
            <Route path="/Login" element={<Login />}>
              Login
            </Route>
            <Route path="/Register" element={<Register />}>
              Register
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
