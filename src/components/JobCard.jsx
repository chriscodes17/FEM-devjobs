import { Link } from "react-router-dom";

export default function JobCard({
  id,
  company,
  logo,
  logoBg,
  position,
  postedAt,
  contract,
  location,
}) {
  return (
    <div className="jobCard">
      <div style={{ background: logoBg }} className="jobCard-logo-container">
        <img className="jobCard-logo" src={logo} alt="" />
      </div>
      <div className="section-main">
        <div className="section-header">
          <p className="light-text">{postedAt}</p>
          <div className="oval"></div>
          <p className="light-text">{contract}</p>
        </div>
        <Link style={{ textDecoration: "none" }} to={`/jobs/${id}`}>
          <p className="header-text">{position}</p>
        </Link>
        <p className="light-text">{company}</p>
      </div>
      <p className="location-text">{location}</p>
    </div>
  );
}
