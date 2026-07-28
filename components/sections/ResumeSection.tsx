"use client";

import type { SectionProps } from "./SectionProps";

const EDUCATION = [
  {
    period: "2011 - 2015",
    company: "Virtual University of Pakistan",
    title: "BSCS",
    text: "Bachelor of Science in Computer Science, Lahore. Strong foundation in software engineering, databases, algorithms, and end-to-end application development.",
  },
];

const EXPERIENCE = [
  {
    period: "Oct 2019 - Present",
    company: "Transdata International",
    title: "Senior Software Engineer",
    text: "Own full stack delivery on enterprise web and mobile products—React.js, Angular, and Next.js on the client with REST APIs, auth, and real-time features on the backend. Mentor juniors, review code, and ship React Native apps with push notifications and third-party service integrations.",
  },
  {
    period: "May 2018 - Oct 2019",
    company: "Hayaat.pk",
    title: "Full Stack / Angular Developer",
    text: "Built end-to-end Angular applications from UI through API integration and deployment. Designed reusable modules, connected backend services, handled client-side data flows, and shipped production-ready features across the stack.",
  },
  {
    period: "May 2017 - May 2018",
    company: "CE Digital",
    title: "Full Stack Web Developer",
    text: "Delivered complete websites from PSD/Figma to production—responsive HTML/CSS frontends, WordPress backends, theme customization, performance tuning, and SEO-ready implementations for client projects.",
  },
  {
    period: "May 2015 - May 2017",
    company: "Brandjaws",
    title: "Web Developer",
    text: "Built and maintained full websites with HTML5, Bootstrap, and CMS backends. Customized WordPress themes and plugins, integrated third-party tools, and partnered with SEO teams to keep sites fast and searchable.",
  },
];

const FRONTEND_SKILLS = [
  { name: "React.js / Next.js", value: 95, skill: "skill-1" },
  { name: "React Native", value: 90, skill: "skill-4" },
  { name: "Angular", value: 85, skill: "skill-6" },
  { name: "HTML / CSS / UI", value: 95, skill: "skill-9" },
];

const BACKEND_SKILLS = [
  { name: "Node.js / REST APIs", value: 90, skill: "skill-5" },
  { name: "JavaScript / TypeScript", value: 95, skill: "skill-1" },
  { name: "Auth & Integrations", value: 90, skill: "skill-4" },
  { name: "Databases / CMS", value: 85, skill: "skill-6" },
  { name: "WordPress / Backend", value: 80, skill: "skill-3" },
];

const KNOWLEDGES = [
  "Full Stack Architecture",
  "Agile / Scrum",
  "REST & Third-Party APIs",
  "Authentication Flows",
  "Database Design",
  "Cloud Deployments",
  "Code Review",
  "Mentoring",
];

function Timeline({ items }: { items: typeof EXPERIENCE }) {
  return (
    <div className="timeline timeline-second-style clearfix">
      {items.map((item) => (
        <div
          className="timeline-item clearfix"
          key={`${item.company}-${item.title}`}
        >
          <div className="left-part">
            <h5 className="item-period">{item.period}</h5>
            <span className="item-company">{item.company}</span>
          </div>
          <div className="divider"></div>
          <div className="right-part">
            <h4 className="item-title">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills({
  items,
}: {
  items: { name: string; value: number; skill: string }[];
}) {
  return (
    <div className="skills-info skills-second-style">
      {items.map((skill) => (
        <div key={skill.name}>
          <div className="skill clearfix">
            <h4>{skill.name}</h4>
            <div className="skill-value">{skill.value}%</div>
          </div>
          <div className={`skill-container ${skill.skill}`}>
            <div
              className="skill-percentage"
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResumeSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>Resume</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>Experience</h3>
            </div>

            <Timeline items={EXPERIENCE} />

            <div className="white-space-50"></div>

            <div className="block-title">
              <h3>Education</h3>
            </div>

            <Timeline items={EDUCATION} />
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                Frontend <span>Skills</span>
              </h3>
            </div>

            <Skills items={FRONTEND_SKILLS} />

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>
                Backend <span>Skills</span>
              </h3>
            </div>

            <Skills items={BACKEND_SKILLS} />

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>Knowledges</h3>
            </div>

            <ul className="knowledges">
              {KNOWLEDGES.map((knowledge) => (
                <li key={knowledge}>{knowledge}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
