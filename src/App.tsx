import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectosPage } from "./pages/ProjectosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectos" element={<ProjectosPage />} />
      </Routes>
    </BrowserRouter>
  );
}