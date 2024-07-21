import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My awesome blog</h1>
        <Navbar />
        <div id="page_body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/articles" element={<ArticleListPage />}></Route>
            <Route
              path="/articles/:articleId"
              element={<ArticlePage />}
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
