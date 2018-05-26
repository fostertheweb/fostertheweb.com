import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import avatar from "./avatar@2x.gif";

const Header = () => (
  <Container>
    <Avatar
      src={avatar}
      alt="illustration of Jonathan happily coding on his ThinkPad"
      width={96}
      height={96}
    />
    <Me>
      <Name>Jonathan Foster</Name>
      <Phrase>
        <span role="image">💬</span>
        excited about graphql
      </Phrase>
    </Me>
  </Container>
);

const Phrase = styled.div`
  color: #939393;

  span {
    margin-right: 0.5rem;
  }
`;

const Me = styled.div`
  margin: 0 2rem;
  border-color: #eee;
  border-style: solid;
  border-width: 2px 0 2px;
  width: 5in;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h1`
  font-family: "Sanchez";
  font-weight: normal;
  color: #0077aa;
  font-size: 2rem;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 2rem 1rem 2rem;
  height: 6rem;
`;

const Avatar = styled.img`
  max-height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #afbba8;
`;

export default Header;
