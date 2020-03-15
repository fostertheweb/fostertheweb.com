import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";

const Header = () => (
  <div className="no-print">
    <Me>
      <Avatar />
      <Name>Jonathan Foster</Name>
    </Me>
  </div>
);

const Me = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const Name = styled.h1`
  font-family: "Quattrocento Sans", sans-serif;
  font-weight: 700;
  color: #444;
  font-size: 2rem;
  margin: 0 0 0 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export default Header;
