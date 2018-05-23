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
    <Name>Jonathan Foster</Name>
    <Nav>
      <Link to="/resume/">Resume</Link>
    </Nav>
  </Container>
);

const Name = styled.h1`
  font-weight: normal;
  color: #708090;
  margin-left: 11rem;
  font-size: 2rem;
`;

const Nav = styled.nav`
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
  justify-content: space-between;
  background: #fff;
  padding: 1rem;
  height: 6rem;
  border-bottom: 2px solid #eee;
`;

const Avatar = styled.img`
  width: 10rem;
  border-radius: 1rem;
  border: 2px solid #afbba8;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export default Header;
