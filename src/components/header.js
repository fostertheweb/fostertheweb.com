import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import avatar from "./avatar@2x.gif";
import github from "../icons/github.png";

const Header = () => (
  <div>
    <Row>
      <Avatar
        src={avatar}
        alt="illustration of Jonathan happily coding on his ThinkPad"
      />
      <Me>
        <Name>Jonathan Foster</Name>
        <Phrase>enjoying javascript</Phrase>
      </Me>
    </Row>
    <Nav>
      <a href="https://github.com/fostertheweb">
        <Icon src={github} alt="github logo" />
        GitHub
      </a>
    </Nav>
  </div>
);

const Icon = styled.img`
  margin: 0 0.2rem;
  width: 32px;
  height: 32px;
`;

const Phrase = styled.div`
  color: #939393;
  margin-top: 0.5rem;
`;

const Me = styled.div`
  margin: 0 1rem;
`;

const Name = styled.h1`
  font-family: "Sanchez";
  font-weight: normal;
  color: #0077aa;
  font-size: 2rem;
  margin: 0;
`;

const Nav = styled.nav`
  margin-left: 1rem;

  a {
    font-weight: 500;
    color: #444;
    text-decoration: none;
    transition: border-color linear 300ms;
    border: 2px solid #ddd;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    width: 6rem;
    line-height: 36px;

    &:hover {
      border-color: #3498db;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 6rem;

  @media print {
    & {
      display: none;
    }
  }
`;

const Avatar = styled.img`
  max-height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #afbba8;
`;

export default Header;
