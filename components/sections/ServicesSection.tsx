"use client";

import type { SectionProps } from "./SectionProps";

const PROCESS = [
  {
    period: "01",
    company: "Scope",
    title: "Discover",
    text: "We start with your goals, users, and constraints—mapping product requirements, integrations, and technical risks so the build has a clear path.",
  },
  {
    period: "02",
    company: "Experience",
    title: "Design",
    text: "We turn the brief into interfaces, flows, and a component plan that matches your brand and works across browsers and devices.",
  },
  {
    period: "03",
    company: "Product",
    title: "Build",
    text: "We ship production web and mobile apps—React, Next.js, Angular, React Native, and Node—with APIs, auth, and third-party services wired in.",
  },
  {
    period: "04",
    company: "Delivery",
    title: "Launch & Support",
    text: "We release, monitor, and iterate. Store submissions, deployments, documentation, and ongoing fixes stay with the same team that built the product.",
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

const DOMAINS = [
  "Ecommerce",
  "Healthcare",
  "Real Estate",
  "Education",
  "Payments",
  "Fashion",
  "Food & CPG",
  "On-demand Services",
];

function Timeline({ items }: { items: typeof PROCESS }) {
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

export default function ServicesSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>Services</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>
                How We <span>Work</span>
              </h3>
            </div>

            <Timeline items={PROCESS} />
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                Frontend <span>Stack</span>
              </h3>
            </div>

            <Skills items={FRONTEND_SKILLS} />

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>
                Backend <span>Stack</span>
              </h3>
            </div>

            <Skills items={BACKEND_SKILLS} />

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>Industries</h3>
            </div>

            <ul className="knowledges">
              {DOMAINS.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
