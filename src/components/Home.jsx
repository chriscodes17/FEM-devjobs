import FilterForm from "./FilterForm";
import JobList from "./JobList";

export default function Home({ jobs, handleFilter, filterData, theme }) {
  return (
    <main className="container">
      <FilterForm handleFilter={handleFilter} theme={theme} />
      <JobList jobs={filterData.length > 0 ? filterData : jobs} />
    </main>
  );
}
