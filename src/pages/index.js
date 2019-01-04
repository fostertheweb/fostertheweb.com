import React from "react";
import styled from "styled-components";

const IndexPage = () => (
  <Container>
    <List>
      <li>
        <span role="image">🏭</span>
        Software Engineer @{" "}
        <a href="https://www.enelx.com/n-a/en">Enel X</a>
      </li>
      <li>
        <span role="image">🌳</span>
        <a href="https://github.com/fostertheweb/terraria">Super Simple Terraria Server</a>
      </li>
      <li>
        <span role="image">📺</span>
        <a href="https://teamtreehouse.com/library/user-authentication-with-express-and-mongo">
          User Authentication with Express and Mongo
        </a>{" "}
        on Treehouse
      </li>
    </List>
  </Container>
);

const List = styled.ul`
  margin: 0 0 0 2rem;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 0.8rem;
  }

  span {
    margin-right: 0.5rem;
  }

  a {
    color: #3498db;

    &:hover {
      color: #333;
    }
  }
`;

const Container = styled.div`
  max-width: 5in;
`;

export default IndexPage;
