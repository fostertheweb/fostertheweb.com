import React from "react";
import styled from "styled-components";
import github from "../icons/github.png";

const Sidebar = () => (
  <Nav>
    <a href="https://github.com/fostertheweb">
      <Icon src={github} alt="github logo" />
      <Text>GitHub</Text>
    </a>
  </Nav>
);

const Icon = styled.img`
  margin: 0 0.2rem;
  width: 32px;
  height: 32px;
`;

const Text = styled.span``;

const Nav = styled.nav`
  margin-left: 2rem;

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

    &:hover {
      border-color: #3498db;
    }
  }
`;

export default Sidebar;
