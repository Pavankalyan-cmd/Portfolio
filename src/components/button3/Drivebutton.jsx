import React from "react";
import styled from "styled-components";

const Drivebutton = (props) => {
  return (
    <StyledWrapper>
      <button className="btn-github mx-2">
        <i className="fa-brands fa-google-drive" style={{ color: "black" }}></i>
        <a href={props.url} target="_blank" rel="noreferrer">
          View Screenshots
        </a>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-github a {
    text-decoration: none;
    color: black;
  }
  .btn-github {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    border: none;

    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    font-weight: 800;
    place-content: center;

    padding: 0.75rem 1rem;
    font-size: 0.825rem;
    line-height: 1rem;
    color: white;

    background-color: white;
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%),
      inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 8px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0)));
  }

  .btn-github:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    color: #e84118;
    transform: translate(0, -0.25rem);
    background-color: rgb(255, 255, 255);
  }
  @media (max-width: 320px) {
    .btn-github {
      padding: 0.375rem 0.625rem;
      font-size: 0.625rem;
      line-height: 0.75rem;
    }
  }

  @media (min-width: 321px) and (max-width: 480px) {
    .btn-github {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .btn-github {
      padding: 0.625rem 0.875rem;
      font-size: 0.8rem;
      line-height: 0.9375rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .btn-github {
      padding: 0.75rem 1rem;
      font-size: 0.825rem;
      line-height: 1rem;
    }
  }
`;

export default Drivebutton;
