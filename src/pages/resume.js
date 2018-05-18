import React from "react";

const ResumePage = () => (
  <div class="container">
    <header>
      <div class="left">
        <h1>
          Jonathan
          <span> Foster</span>
        </h1>
      </div>
      <div class="right">
        <ul class="contact">
          <li>
            <span class="entypo-phone" />(973) 525-4174
          </li>
          <li>
            <span class="entypo-mail" />
            <a href="mailto:jxf9099@rit.edu">fostertheweb@gmail.com</a>
          </li>
          <li>
            <span class="entypo-code" />
            <a href="http://fostertheweb.com">fostertheweb.com</a>
          </li>
        </ul>
      </div>
    </header>
    <section class="experience">
      <h3>
        <span class="entypo-briefcase" /> EXPERIENCE
      </h3>
      <div class="row">
        <div class="job">
          <span class="date"> August 2016 - Present</span>
          <ul class="jobs">
            <li class="company">
              <strong>EagleDream Technologies</strong>, Rochester, NY
            </li>
            <li>Software Engineer</li>
            <li>
              <span class="entypo-right-open-mini" /> Joined product dev, worked
              alongside client product team
            </li>
            <li>
              <span class="entypo-right-open-mini" /> React app small team, demo
              to client
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Refactored and redesigned
              front-end of healthcare related web application
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Presented front-end
              technology evaluation to client for a new project
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>AngularJS 1.x</li>
            <li>Karma</li>
            <li>Jasmine</li>
            <li>Protractor</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>React</li>
            <li>Redux</li>
            <li>AWS</li>
          </ul>
        </div>

        <div class="job">
          <span class="date"> January 2016 - May 2016</span>
          <ul class="jobs">
            <li class="company">
              <strong>Cenify</strong>, Rochester, NY
            </li>
            <li>Full Stack Developer</li>
            <li>
              <span class="entypo-right-open-mini" /> Began creating consumer
              facing web and desktop client with React
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Developed internal
              application to manage devices integrated with the platform
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>Node.js</li>
            <li>Express</li>
            <li>React</li>
            <li>Socket.io</li>
            <li>AngularJS 1.x</li>
            <li>MongoDB</li>
            <li>Electron</li>
            <li>Sass</li>
            <li>webpack</li>
            <li>npm</li>
          </ul>
        </div>
        <div class="job">
          <span class="date">April 2016</span>
          <ul class="jobs">
            <li class="company">
              <strong>Treehouse</strong>, Remote
            </li>
            <li>Guest Teacher</li>
            <li>
              <span class="entypo-right-open-mini" /> Developed new course: User
              Authentication with Express and MongoDB
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Wrote course script,
              quizzes, and student project
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Jade</li>
          </ul>
        </div>
        <div class="job">
          <span class="date"> January 2015 - August 2015</span>
          <ul class="jobs">
            <li class="company">
              <strong>Apple</strong>, Cupertino, CA
            </li>
            <li>Software Engineer Intern, Software Analytics &amp; Tools</li>
            <li>
              <span class="entypo-right-open-mini" /> Worked with front-end
              framework built on top of AngularJS and Bootstrap
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Wrote RESTful API using
              Ruby and Sinatra for large web application
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Presented my project to VP
              of SWE and her directs
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>Ruby</li>
            <li>Sinatra</li>
            <li>ActiveRecord</li>
            <li>AngularJS 1.x</li>
            <li>Bootstrap</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div class="job">
          <span class="date"> June 2014 - December 2014</span>
          <ul class="jobs">
            <li class="company">
              <strong>NimbleUser</strong>, Pittsford, NY
            </li>
            <li>UX Engineer Co-op</li>
            <li>
              <span class="entypo-right-open-mini" /> Contributed to AngularJS
              front-end of product
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Worked on team following
              Agile development practices
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>AngularJS 1.x</li>
            <li>Bootstrap</li>
            <li>Unit Testing</li>
          </ul>
        </div>
        <div class="job">
          <span class="date"> June 2013 - May 2014</span>
          <ul class="jobs">
            <li class="company">
              <strong>Office of Undergraduate Admissions at RIT</strong>,
              Rochester, NY
            </li>
            <li>Web Development Analyst Co-op</li>
            <li>
              <span class="entypo-right-open-mini" /> Created new responsive
              landing page for RIT accepted students
            </li>
            <li>
              <span class="entypo-right-open-mini" /> Improved internal forms by
              adding functionality to existing PHP scripts
            </li>
          </ul>
          <ul class="stack">
            <li>
              <span class="entypo-tools" />
            </li>
            <li>jQuery</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="education">
      <h3>
        <span class="entypo-graduation-cap" /> EDUCATION
      </h3>
      <div class="school">
        <ul>
          <li class="company">
            <strong>Rochester Institute of Technology</strong>, Rochester, NY
          </li>
          <li>
            Bachelor of Science in New Media Interactive Development, May 2016
          </li>
        </ul>
      </div>
    </section>

    <section class="projects">
      <h3>
        <span class="entypo-github" /> PROJECTS
      </h3>
      <p class="github">
        See what I am working on at
        <a href="https://github.com/fostertheweb">github.com/fostertheweb</a>
      </p>
    </section>
  </div>
);

export default ResumePage;
