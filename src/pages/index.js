import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustryAlt,
  faChalkboardTeacher,
  faHandHoldingUsd,
} from "@fortawesome/pro-duotone-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => (
  <Container>
    <List>
      <Item>
        <FontAwesomeIcon icon={faIndustryAlt} color="#461e7d" size="2x" />
        <Text>
          Software Engineer @ <a href="https://www.enelx.com/n-a/en">Enel X</a>
        </Text>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" color="#38b2ac" />
        <Text>
          <div>
            <a href="https://foster.finance">foster.finance</a>
          </div>
          <Subtitle>active side project</Subtitle>
        </Text>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#5fcf80" />
        <Text>
          <a href="https://teamtreehouse.com/library/user-authentication-with-express-and-mongo">
            User Authentication with Express and Mongo
          </a>
          <Subtitle>authored Treehouse course</Subtitle>
        </Text>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <Text>
          <div>
            <a href="https://github.com/fostertheweb">fostertheweb</a>
          </div>
          <Subtitle>come see what I'm working on</Subtitle>
        </Text>
      </Item>
    </List>
  </Container>
);

const Text = styled.div`
  margin-left: 1rem;
`;

const Emoji = styled.span`
  font-size: 32px;
  margin-right: 0.5rem;
`;

const Item = styled.li`
  display: flex;
  margin-top: 1.5rem;
  background: #fff;
  padding: 1rem;
  border-radius: 0.2rem;
  align-items: center;
`;

const Subtitle = styled.div`
  color: #748669;
`;

const List = styled.ul`
  margin: 0;
  margin-left: 2rem;
  padding: 0;
  list-style: none;

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
