import React from "react";
import styled from "styled-components";

const SkillButton = (props) => {
  return (
    <StyledWrapper
      size={props.fontSize}
      background={props.background}
      bgclr={props.bgclr}
    >
      <button
        className="mx-2 my-1 "
        style={{ verticalAlign: "middle", display: "inline-block" }}
      >
        {props.children}
        {props.skill}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    width: 100%;
    height: 70%;
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: ${(props) => props.size};
    font-weight: 600;
    border-radius: 0.5em;
    background: ${(props) => props.background};
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }
  button:hover {
    background: ${(props) => props.bgclr};
  }
  button:active {
    color: #666;

    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
  @media screen and (max-width: 1024px) {
    button {
      width: 90%;
      height: 60%;
      padding: 0.5em 1.5em;
      font-size: ${(props) => props.size - 2};
    }
  }
  @media screen and (max-width: 767px) {
    button {
      width: 90%;
      height: 50%;
      padding: 0.3em 1.3em;
      font-size: ${(props) => props.size - 4};
    }
  }
  @media screen and (max-width: 480px) {
    button {
      width: 90%;
      height: 40%;
      padding: 0.2em 1.2em;
      font-size: ${(props) => props.size - 6};
    }
  }
`;

export default SkillButton;
