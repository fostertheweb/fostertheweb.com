import React from "react";
import Job from "../components/resume/job";
import styled from "styled-components";
import iphone from "../icons/iphone.png";
import email from "../icons/email.png";
import heart from "../icons/heart.png";
import github from "../icons/github.png";
import gradCap from "../icons/grad-cap.png";
import work from "../icons/work.png";

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
        experience
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
        education
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
        projects
      </SectionTitle>
      <SectionBody>
        See what I am working on at{" "}
        <a href="https://github.com/fostertheweb">github.com/fostertheweb</a>
      </SectionBody>
    </Section>
  </Page>
);

const Section = styled.section`
  margin-top: 0.2in;
`;

const SectionBody = styled.div`
  margin-top: 0.6rem;

  a {
    color: #007faa;
    font-weight: 500;
  }
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #444;
  }
`;

const Tech = styled.span`
  color: #007faa;
  font-weight: 500;
`;

const SectionTitle = styled.div`
  font-size: 1.8rem;
  color: #336e7b;
  display: flex;
  align-items: center;
  font-variant: small-caps;
  letter-spacing: 0.1rem;
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
  font-family: "Sanchez";

  span {
    color: #007faa;
  }
`;

const Contact = styled.div``;

const Icon = styled.img`
  margin-right: 0.6rem;
  width: 15px;
  height: 15px;
  object-fit: contain;
`;

const TitleIcon = styled.img`
  margin-right: 0.6rem;
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.2in;
`;

const Page = styled.div`
  width: 8.5in;
  margin: 0.2in;
  line-height: 1.425;
  letter-spacing: 0.8px;
  color: #444;

  a {
    text-decoration: none;
  }
`;

export default ResumePage;
