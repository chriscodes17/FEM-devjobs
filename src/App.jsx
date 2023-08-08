import { useState } from "react";
import jobData from "./data.json";
import Header from "./components/Header";
import Home from "./components/Home";
import JobInfoPage from "./components/JobInfoPage";
import { Routes, Route, useMatch } from "react-router-dom";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState(jobData);
  const [filterData, setFilterData] = useState([]);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const match = useMatch("jobs/:id");
  const job = match ? jobs.find((job) => job.id === Number(match.params.id)) : null;

  const handleFilterJobs = (filterOptions) => {
    const { search, location, checkbox } = filterOptions;
    if (!search && !location && !checkbox) {
      setFilterData(jobs);
      return;
    }
    const filtered = jobs.filter((job) => {
      const companyMatch = job.company.toLowerCase().includes(search.toLowerCase());
      const titleMatch =
        job.position.toLowerCase().includes(search.toLowerCase()) && !companyMatch;
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      const isFullTime = checkbox ? job.contract === "Full Time" : true;

      return (companyMatch || titleMatch) && (locationMatch || !location) && isFullTime;
    });
    setFilterData(filtered);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header themeToggle={handleThemeToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              jobs={jobs}
              handleFilter={handleFilterJobs}
              filterData={filterData}
              theme={theme}
            />
          }
        />
        <Route path="jobs/:id" element={<JobInfoPage job={job} />} />
      </Routes>
    </div>
  );
}

export default App;
