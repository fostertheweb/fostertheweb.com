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
      <Job
        company="Enel X"
        location="Rochester, NY"
        title="Software Engineer"
        when="September '18 - Present"
        summary={[
          "Design and document microservice architecture managed by Terraform and deployed to AWS",
          "Troubleshoot consumer facing production issues via CloudWatch and Splunk logs",
          "Interview software engineer candidates ranging in level from intern to senior",
        ]}
      />
      <Job
        company="EagleDream Technologies"
        location="Rochester, NY"
        title="Software Engineer"
        when="August '16 - September '18"
        summary={[
          "Led front-end team building a product for customer utilizing AngularJS, unit testing, and end-to-end testing with Protractor",
          "Promoted the sharing of knowledge and code within the organization",
          "Refactored a React application to leverage Redux and guided the team to implement modern best practices",
        ]}
      />
      <Job
        company="Cenify"
        location="Rochester, NY"
        title="Software Engineer"
        when="January '16 - May '16"
        summary={[
          "Started development of internal and consumer facing applications using Express, MongoDB, and React with webpack and npm scripts",
          "Demonstrated ability to make an impact on a small startup team",
        ]}
      />
      <Job
        company="Treehouse"
        location="Remote"
        title="Guest Teacher"
        when="April '16"
        summary={[
          "Worked remotely for over a month to create a course for Treehouse about user authentication and authorization in a Node.js Express server-side rendered application",
          "Wrote a complete course script, example project, and quizzes for the end of each section",
        ]}
      />
      <Job
        company="Apple"
        location="Cupertino, CA"
        title="Software Engineer Intern"
        when="January '15 - August '15"
        summary={[
          "Conducted a live demo of the internal Stack Overflow clone I developed during a presentation to upper management",
          "Regularly attended meetings with a cross-functional working group focused on improving internal software UX",
        ]}
      />
      <Job
        company="NimbleUser"
        location="Rochester, NY"
        title="UX Engineer Co-op"
        when="June '14 - December '14"
        summary={[
          "Contributed to product development in AngularJS front-end by adding new features with cooresponding unit tests and outlined manual testing steps",
        ]}
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
  margin-top: 0.15in;
`;

const SectionBody = styled.div`
  a {
    color: #007faa;
    font-weight: 500;
  }
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;

  a {
    color: #444;
  }
`;

const Tech = styled.span`
  color: #007faa;
  font-weight: 500;
`;

const SectionTitle = styled.div`
  font-size: 24px;
  color: #336e7b;
  display: flex;
  align-items: center;
  font-variant: small-caps;
  letter-spacing: 0.05rem;
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
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const Page = styled.div`
  width: 8.5in;
  line-height: 1.425;
  color: #444;

  a {
    text-decoration: none;
  }
`;

export default ResumePage;
