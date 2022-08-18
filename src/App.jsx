import "./assets/App.scss";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular_movies" element={<PopularMoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
