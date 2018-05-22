import React from "react";
import Job from "../components/resume/job";
import styled from "styled-components";
import iphone from "../components/resume/iphone.png";
import email from "../components/resume/email.png";
import heart from "../components/resume/heart.png";
import github from "./github.png";
import gradCap from "./grad-cap.png";
import work from "./work.png";

const ResumePage = () => (
  <Page>
    <Header>
      <Name>
        Jonathan <span>Foster</span>
      </Name>
      <Contact>
        <ContactOption>
          <Icon src={iphone} alt="cell phone number" />
          (973) 525-4174
        </ContactOption>
        <ContactOption>
          <Icon src={email} alt="email address" />
          <a href="mailto:jxf9099@rit.edu">fostertheweb@gmail.com</a>
        </ContactOption>
        <ContactOption>
          <Icon src={heart} alt="personal webbsite" />
          <a href="https://fostertheweb.com">fostertheweb.com</a>
        </ContactOption>
      </Contact>
    </Header>

    <Section>
      <SectionTitle>
        <TitleIcon src={work} alt="hand holding wrench" />
        Experience
      </SectionTitle>
      <Job
        company="EagleDream Technologies"
        location="Rochester, NY"
        title="Software Engineer"
        when="August '16 - Present"
        summary="Joined the product team where I learned a lot about the software development lifecycle. I worked on new features in the AngularJS front-end owning each task from start to finish including unit testing, writing manual testing steps, and collaborating with our release engineer."
      />
      <Job
        company="Cenify"
        location="Rochester, NY"
        title="Software Engineer"
        when="August '16 - Present"
        summary="Joined the product team where I learned a lot about the software development lifecycle. I worked on new features in the AngularJS front-end owning each task from start to finish including unit testing, writing manual testing steps, and collaborating with our release engineer."
      />
      <Job
        company="Treehouse"
        location="Remote"
        title="Guest Teacher"
        when="April '16"
        summary="Wrote the product team where I learned a lot about the software development lifecycle. I worked on new features in the AngularJS front-end owning each task from start to finish including unit testing, writing manual testing steps, and collaborating with our release engineer."
      />
      <Job
        company="Apple"
        location="Cupertino, CA"
        title="Software Engineer Intern"
        when="January '15 - August '15"
        summary="Joined the product team where I learned a lot about the software development lifecycle. I worked on new features in the AngularJS front-end owning each task from start to finish including unit testing, writing manual testing steps, and collaborating with our release engineer."
      />
      <Job
        company="NimbleUser"
        location="Rochester, NY"
        title="UX Engineer Co-op"
        when="June '14 - December '14"
        summary="Joined the product team where I learned a lot about the software development lifecycle. I worked on new features in the AngularJS front-end owning each task from start to finish including unit testing, writing manual testing steps, and collaborating with our release engineer."
      />
    </Section>

    <Section>
      <SectionTitle>
        <TitleIcon src={gradCap} alt="graduation cap" />
        Education
      </SectionTitle>
      <SectionBody>
        <div>
          <strong>Rochester Institute of Technology</strong>, Rochester, NY
        </div>
        <div>
          Bachelor of Science in New Media Interactive Development, May 2016
        </div>
      </SectionBody>
    </Section>

    <Section>
      <SectionTitle>
        <TitleIcon src={github} alt="github" />
        Projects
      </SectionTitle>
      <SectionBody>
        See what I am working on at{" "}
        <a href="https://github.com/fostertheweb">github.com/fostertheweb</a>
      </SectionBody>
    </Section>
  </Page>
);

const Section = styled.section`
  margin-top: 2rem;
`;

const SectionBody = styled.div`
  margin-top: 0.6rem;
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;
`;

const Tech = styled.span`
  color: #009688;
`;

const SectionTitle = styled.div`
  font-size: 1.6rem;
  color: #999;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 3.2rem;
  font-weight: 500;

  span {
    color: #607d8b;
  }
`;

const Contact = styled.div``;

const Icon = styled.img`
  margin-right: 0.6rem;
`;

const TitleIcon = styled.img`
  margin-right: 0.6rem;
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Page = styled.div`
  width: 8.5in;
  margin: 0.2in;
  line-height: 1.425;
  letter-spacing: 0.8px;

  a {
    color: #444;
    text-decoration: none;
  }
`;

export default ResumePage;
