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
        <TitleIcon src={work} alt="resume on a clipboard" />
        experience
      </SectionTitle>
      <Job
        first={true}
        company="Enel X"
        location="Rochester, NY"
        title="Software Engineer"
        when="September '18 - Present"
        summary={[
          "Design and document architecture managed by Terraform and deployed to AWS",
          "Troubleshoot production issues via CloudWatch and Splunk logs",
          "Collaborate with distributed engineering organization",
          "Interview software engineer candidates ranging in levels from intern to senior",
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
          "Started development of a React application using webpack and npm scripts",
          "Developed an internal tool with Express and MongoDB to manage devices paired with an IoT platform",
          "Demonstrated ability to make an impact on a small startup team",
        ]}
      />
      <Job
        company="Treehouse"
        location="Remote"
        title="Guest Teacher"
        when="April '16"
        summary={[
          "Worked remotely for over a month to create a course for Treehouse that focuses on the basics of user authentication and authorization in a Node.js Express server-side rendered application",
          "Wrote a complete course script, example project, and short quizzes for the end of each section",
          "Delivered a section of the course each week and reviewed it with a full-time Treehouse teacher",
        ]}
      />
      <Job
        company="Apple"
        location="Cupertino, CA"
        title="Software Engineer Intern"
        when="January '15 - August '15"
        summary={[
          "Started to create a Stack Overflow clone using in-house frameworks built around AngularJS and a Ruby backend",
          "Conducted a live demo of the application during a presentation to management that highlighted the need for its adoption",
          "Regularly attended meetings with a cross-functional working group focused on improving internal software UX by effectively documenting best practices",
        ]}
      />
      <Job
        company="NimbleUser"
        location="Rochester, NY"
        title="UX Engineer Co-op"
        when="June '14 - December '14"
        summary={[
          "Contributed to product feature development in AngularJS front-end",
          "Wrote unit tests using Karma and Jasmine and outlined manual testing steps for each feature",
          "Collaborated with release engineer to ensure features were ready to merge and deploy",
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
  margin-top: 0.2in;
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
