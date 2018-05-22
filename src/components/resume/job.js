import React from "react";
import styled from "styled-components";

// images
import calendar from "../../icons/calendar.png";
import location from "../../icons/location.png";
import nameTag from "../../icons/name-tag.png";

const Job = props => (
  <Container>
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
    <Summary>{props.summary}</Summary>
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
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const Meta = styled.div``;

const Summary = styled.div`
  width: 5in;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
`;

export default Job;
