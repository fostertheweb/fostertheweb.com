import React from "react";
import styled from "styled-components";

const Header = () => (
  <div className="no-print">
    <Me>
      <Name>Jonathan Foster</Name>
    </Me>
  </div>
);

const Me = styled.div`
  @media (min-width: 1024px) {
    margin-left: 2rem;
  }

  width: auto;
`;

const Name = styled.h1`
  font-family: "Quattrocento Sans", sans-serif;
  font-weight: 700;
  color: #4a5643;
  font-size: 3rem;
  margin: 0;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 4rem;
    text-align: left;
  }
`;

export default Header;
