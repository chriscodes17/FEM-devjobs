import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import ActionButton from "./ActionButton";
import ModalFilter from "./ModalFilter";
import searchIcon from "../assets/icons/icon-search.svg";
import SearchIconWhite from "../assets/icons/icon-search-white.svg";
import locationIcon from "../assets/icons/icon-location.svg";
import filterIcon from "../assets/icons/icon-filter.svg";

const initialFormData = {
  search: "",
  location: "",
  checkbox: false,
};

export default function FilterForm({ handleFilter, theme }) {
  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const windowWidth = useScreenSize();

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(formData);
    setFormData(initialFormData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container input-container-text">
        {!windowWidth && <img src={searchIcon} alt="" />}
        <input
          className="input-text"
          type="text"
          value={formData.search}
          onChange={handleChange}
          name="search"
          placeholder="Filter by title ..."
        />
      </div>
      {!windowWidth && (
        <>
          {" "}
          <div className="input-container input-container-text">
            <img src={locationIcon} alt="" />
            <input
              className="input-text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="Filter by location"
            />
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
            <p className="checkbox-text">Full time only</p>
          </div>
        </>
      )}
      <ModalFilter
        isOpen={modalIsOpen}
        closeModal={closeModal}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        theme={theme}
      />
      {windowWidth && <img onClick={openModal} src={filterIcon} />}
      <div className="input-container">
        <ActionButton
          text={window.innerWidth > 480 ? "Search" : <img src={SearchIconWhite} />}
          bgColor="#5964E0"
          name="search-btn"
        />
      </div>
    </form>
  );
}
