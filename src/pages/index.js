import React from "react";
import styled from "styled-components";

const IndexPage = () => (
  <Container>
    <List>
      <li>
        Software Engineer @{" "}
        <a href="https://eagledream.com">EagleDream Technologies</a>
      </li>
      <li>
        <a href="https://teamtreehouse.com/library/user-authentication-with-express-and-mongo">
          User Authentication with Express and Mongo
        </a>{" "}
        on Treehouse
      </li>
    </List>
  </Container>
);

const List = styled.ul`
  margin: 0 0 0 1rem;
  padding: 0;
  list-style: inside;

  li {
    margin-top: 0.5rem;
  }

  a {
    color: #3498db;

    &:hover {
      color: #333;
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  max-width: 5in;
`;

export default IndexPage;
