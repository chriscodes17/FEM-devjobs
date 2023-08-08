import LinkButton from "../LinkButton";
import useScreenSize from "../../hooks/useScreenSize";

export default function Footer({ job }) {
  const { apply, position, company } = job;
  const windowWidth = useScreenSize();

  return (
    <div className="body-footer-container">
      <div className="body-footer-inner">
        {!windowWidth && (
          <div>
            <h3 className="header-text">{position}</h3>
            <p className="light-text">{company}.com</p>
          </div>
        )}
        <LinkButton link={apply} text="Apply" bgColor="#5964E0" color="#FFFFFF" />
      </div>
    </div>
  );
}
