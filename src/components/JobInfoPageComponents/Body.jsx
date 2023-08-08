import LinkButton from "../LinkButton";
import Role from "./Role";
import Requirements from "./Requirements";

export default function Body({ job }) {
  const {
    postedAt,
    contract,
    position,
    location,
    apply,
    description,
    requirements,
    role,
  } = job;
  return (
    <div className="jobInfo-body-container">
      <div className="jobInfo-body-header">
        <div className="section-main">
          <div className="section-header">
            <p className="light-text">{postedAt}</p>
            <div className="oval"></div>
            <p className="light-text">{contract}</p>
          </div>
          <p className="body-contract">{position}</p>
          <p className="location-text">{location}</p>
        </div>
        <LinkButton link={apply} text="Apply" bgColor="#5964E0" color="#FFFFFF" />
      </div>
      <main>
        <p className="body-text">{description}</p>
        <Requirements info={requirements} />
        <Role info={role} />
      </main>
    </div>
  );
}
