import React from "react";
import styled from "styled-components";

function ResumeButton() {
  return (
    <StyledWrapper>
      <a href="/Pavankalyan.pdf" download="PavankalyanVandanapu.pdf">
        <button className="btn4 ">Download Resume</button>
      </a>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .btn4 {
    color: #090909;
    padding: 1.2em 1.7em;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3em;
    background: #e8e8e8;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    margin-left: 10px;
  }
  .btn4:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
  @media (max-width: 768px) {
    .btn4 {
      padding: 0.8em 1.2em; /* Reduce padding for smaller screens */
      font-size: 16px; /* Reduce font size for better readability */
      margin-left: 10px;
    }
  }

  /* For screens smaller than 480px (e.g., small mobile devices) */
  @media (max-width: 480px) {
    .btn4 {
      padding: 0.6em 1.5em; /* Further reduce padding */
      font-size: 14px; /* Further reduce font size */
      border-radius: 2em; /* Adjust border radius for smaller screens */
      margin-left: 10px;
    }
  }
`;

export default ResumeButton;
