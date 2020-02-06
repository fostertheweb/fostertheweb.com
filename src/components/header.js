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
  margin-left: 2rem;
  width: auto;
`;

const Name = styled.h1`
  font-family: "Quattrocento Sans", sans-serif;
  font-weight: 700;
  color: #4a5643;
  font-size: 4rem;
  margin: 0;
`;

export default Header;
