import "./App.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
