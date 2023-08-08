import LinkButton from "../LinkButton";
import useScreenSize from "../../hooks/useScreenSize";

export default function Header({ logo, logoBg, website, company }) {
  const windowWidth = useScreenSize();
  return (
    <header className="jobInfo-header">
      {windowWidth && (
        <div
          className="jobInfo-header-logo-container jobinfo-logo-mobile"
          style={{ backgroundColor: logoBg }}
        >
          <img src={`/${logo}`} alt="" />
        </div>
      )}
      <div className="jobInfo-header-1">
        {!windowWidth && (
          <div
            className="jobInfo-header-logo-container"
            style={{ backgroundColor: logoBg }}
          >
            <img src={`/${logo}`} alt="" />
          </div>
        )}
        <div>
          <p className="jobInfo-company">{company}</p>
          <p className="light-text">{`${company}.com`}</p>
        </div>
      </div>
      <LinkButton
        link={website}
        bgColor="rgba(89, 100, 224, 0.10000000149011612)"
        color="#5964e0"
        text="Company Site"
      />
    </header>
  );
}
