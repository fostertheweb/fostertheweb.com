import React from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";

// images
import calendar from "../../icons/calendar.png";
import location from "../../icons/location.png";
import nameTag from "../../icons/name-tag.png";

const BUZZWORDS = [
  "npm",
  "webpack",
  "React",
  "Redux",
  "AngularJS",
  "Node.js",
  "Express",
  "Bootstrap",
  "AWS",
  "UX",
  "Protractor",
  "Karma",
  "Jasmine",
  "MongoDB",
  "AWS",
  "Splunk",
  "CloudWatch",
  "Terraform",
];

const Job = props => (
  <Container first={props.first}>
    <Meta>
      <Company>{props.company}</Company>
      <Detail>
        <Icon src={location} alt="location" />
        {props.location}
      </Detail>
      <Detail>
        <Icon src={nameTag} alt="job title" />
        {props.title}
      </Detail>
      <Detail>
        <Icon src={calendar} alt="job starting date and ending date" />
        {props.when}
      </Detail>
    </Meta>
    <Summary>
      <ul>
        {props.summary.map(bullet => (
          <li>
            <Highlighter
              highlightClassName="buzzword"
              searchWords={BUZZWORDS}
              textToHighlight={bullet}
            />
          </li>
        ))}
      </ul>
    </Summary>
  </Container>
);

const Detail = styled.div`
  display: flex;
  align-items: center;
  color: #696969;
  font-size: 15px;
  line-height: 25px;
`;

const Icon = styled.img`
  margin-right: 0.6rem;
  width: 15px;
  height: 15px;
  object-fit: contain;
`;

const Company = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0.2rem;
`;

const Meta = styled.div``;

const Summary = styled.div`
  width: 5in;

  ul {
    margin: 0;
    padding: 0;

    li {
      margin-top: 0.5rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  margin-top: ${props => (props.first ? "0.5rem" : "1.5rem")};
`;

export default Job;
