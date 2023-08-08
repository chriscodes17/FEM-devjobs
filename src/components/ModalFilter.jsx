import Modal from "react-modal";
import locationIcon from "../assets/icons/icon-location.svg";
import ActionButton from "./ActionButton";

export default function ModalFilter({
  isOpen,
  closeModal,
  handleChange,
  formData,
  handleSubmit,
  theme,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "327px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "29px",
      background: theme === "light" ? "white" : "#19202D",
    },
  };
  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Filter Modal"
        ariaHideApp={false}
      >
        <div className="input-container input-container-text">
          <img src={locationIcon} alt="" />
          <input
            style={{
              background: theme === "dark" ? "#19202d" : "",
              color: theme === "dark" ? "white" : "",
            }}
            className="input-text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            placeholder="Filter by location"
          />
        </div>
        <span
          style={{
            borderBottom: "1px solid rgba(110, 128, 152, 0.20000000298023224)",
            width: "100%",
          }}
        ></span>
        <div className="modal-checkbox">
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <p style={{ color: theme === "dark" ? "white" : "" }} className="checkbox-text">
            Full time only
          </p>
        </div>
        <div onClick={closeModal} className="modal-btn-container">
          <ActionButton text={"Search"} bgColor="#5964E0" actionHandler={handleSubmit} />
        </div>
      </Modal>
    </div>
  );
}
