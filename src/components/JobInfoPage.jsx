import Body from "./JobInfoPageComponents/Body";
import Header from "./JobInfoPageComponents/Header";
import Footer from "./JobInfoPageComponents/Footer";

export default function JobInfoPage({ job }) {
  return (
    <div>
      <div className="jobInfo-container">
        <Header
          logo={job.logo}
          logoBg={job.logoBackground}
          company={job.company}
          website={job.website}
        />
        <Body job={job} />
      </div>
      <Footer job={job} />
    </div>
  );
}
