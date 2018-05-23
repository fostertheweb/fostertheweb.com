import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import avatar from "./avatar.png";

const Header = () => (
  <Container>
    <Avatar
      src={avatar}
      alt="illustration of me happily coding on my ThinkPad"
    />
    <Me>
      <Name>Jonathan Foster</Name>
      <Phrase>i'm still enjoying javascript</Phrase>
    </Me>
    <Nav>
      <Link to="/resume/">Resume</Link>
    </Nav>
  </Container>
);

const Phrase = styled.div`
  color: #939393;
  margin-top: 0.5rem;
`;

const Me = styled.div`
  margin: 0 1rem;
`;

const Name = styled.h1`
  font-weight: normal;
  color: #708090;
  font-size: 2rem;
  margin: 0;

  span {
    transition: opacity linear 400ms;
    color: green;
    opacity: 0;

    &;hover {
      opacity: 1;
    }
  }
`;

const Nav = styled.nav`
  margin-left: 1rem;

  a {
    text-decoration: none;
    color: #6c7a89;
    transition: color linear 400ms;

    &:hover {
      color: #3498db;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 6rem;
`;

const Avatar = styled.img`
  max-height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #afbba8;
`;

export default Header;
