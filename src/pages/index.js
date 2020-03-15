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
        <Box>
          <FontAwesomeIcon icon={faIndustryAlt} color="#461e7d" size="2x" />
        </Box>
        <Text>
          Software Engineer @ <a href="https://www.enelx.com/n-a/en">Enel X</a>
        </Text>
      </Item>
      <Item>
        <Box>
          <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" color="#38b2ac" />
        </Box>
        <Text>
          <div>
            <a href="https://foster.finance">foster.finance</a>
          </div>
          <Subtitle>personal finance project</Subtitle>
        </Text>
      </Item>
      <Item>
        <Box>
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            size="2x"
            color="#5fcf80"
          />
        </Box>
        <Text>
          <a href="https://teamtreehouse.com/library/user-authentication-with-express-and-mongo">
            User Authentication with Express and Mongo
          </a>
          <Subtitle>authored Treehouse course</Subtitle>
        </Text>
      </Item>
      <Item>
        <Box>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Box>
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
  margin-top: 0.5rem;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Subtitle = styled.div`
  margin-top: 0.2rem;
  font-size: 0.8rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    color: #3498db;

    &:hover {
      color: #333;
    }
  }
`;

const Box = styled.div`
  width: 64px;
  text-align: center;
`;

const Container = styled.div``;

export default IndexPage;
