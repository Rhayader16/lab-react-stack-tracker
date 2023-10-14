import "./App.css";
import compData from "./companies.json";
import techData from "./technologies.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(compData);
  const [technologies, setTechnologies] = useState(techData);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />}></Route>
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        ></Route>
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
