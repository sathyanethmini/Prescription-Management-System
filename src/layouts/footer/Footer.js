import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const Navigate = useNavigate();

    const handleBack = () => {
        Navigate(-1);
    };
    const handleForward = () => {
        Navigate(1);
    };
  return (
    <footer className=" py-3 fixed-bottom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-light" onClick={handleBack}>Back</button>
          <button className="btn btn-light" onClick={handleForward}>Forward</button>
        </div>
      </div>
    </footer>
  );
}
