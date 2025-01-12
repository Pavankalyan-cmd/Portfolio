import React from "react";
import styled from "styled-components";

const ToolButton = (props) => {
  return (
    <StyledWrapper>
      <button
        className="mx-2 my-1 "
        style={{ verticalAlign: "middle", display: "inline-block" }}
      >
        {props.tool}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    width: 90%;
    height: 70%;
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 8px;
    font-weight: 600;
    border-radius: 0.5em;
    background: #e8e8e8;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  button:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

export default ToolButton;
