import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import AddNewDitectoryModal from "./AddNewDirectoryModal";

export default function Directory(props) {
  return (
    <>
      <div className="justify-content-center  m-3">
        <p className=".fs-4">
          Directories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            id="chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </p>

        <p className="mx-3">Main</p>

        <AddNewDitectoryModal  />
      </div>
    </>
  );
}
