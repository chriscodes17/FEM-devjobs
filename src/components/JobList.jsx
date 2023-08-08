import JobCard from "./JobCard";
import ActionButton from "./ActionButton";
import { useState } from "react";

export default function JobList({ jobs }) {
  const [showMore, setShowMore] = useState(6);
  const handleShowMore = () => {
    setShowMore(showMore + 6);
  };

  return (
    <div>
      <div className="jobList-container">
        {jobs.slice(0, showMore).map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            company={job.company}
            logo={job.logo}
            logoBg={job.logoBackground}
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
          />
        ))}
      </div>
      {showMore < jobs.length && (
        <div className="showMore-btn">
          <ActionButton
            actionHandler={handleShowMore}
            text="Show More"
            bgColor="#5964E0"
          />
        </div>
      )}
    </div>
  );
}
