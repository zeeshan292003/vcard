"use client";

import Carousel from "../Carousel";
import type { SectionProps } from "./SectionProps";

const TESTIMONIALS = [
  {
    img: "/img/testimonials/testimonial-1.jpg",
    text: "Zeeshan rebuilt our dashboard in Next.js and cut page load times by nearly half. He understood our API constraints quickly, kept the UI pixel-perfect, and delivered ahead of schedule. One of the most reliable frontend engineers I've worked with.",
    author: "Sarah Mitchell",
    company: "Product Lead, FinTech Startup",
  },
  {
    img: "/img/testimonials/testimonial-2.jpg",
    text: "We needed a React Native app shipped on a tight deadline. Zeeshan handled the full flow—from component architecture to third-party payment integration—without compromising quality. Clear communication throughout the project.",
    author: "James Carter",
    company: "Founder, Ecommerce Platform",
  },
  {
    img: "/img/testimonials/testimonial-3.jpg",
    text: "After years of patchwork fixes, Zeeshan refactored our Angular codebase into a maintainable structure. His attention to responsive design and cross-browser compatibility saved our team countless hours of debugging.",
    author: "Aisha Khan",
    company: "Engineering Manager, SaaS Company",
  },
  {
    img: "/img/testimonials/testimonial-1.jpg",
    text: "Zeeshan integrated Stripe, HubSpot, and our custom REST APIs into a single seamless experience. He documents his work well and always thinks about what the next developer will need. Highly recommended for complex frontend work.",
    author: "David Nguyen",
    company: "CTO, Digital Agency",
  },
];

const SERVICES = [
  [
    {
      icon: "lnr-store",
      title: "Ecommerce",
      text: "I build fast, conversion-focused online stores with secure checkout flows, product catalogs, and payment integrations—designed to scale as your business grows.",
    },
    {
      icon: "lnr-laptop-phone",
      title: "Web Development",
      text: "With 10+ years in React, Angular, and Next.js, I deliver responsive, SEO-friendly web apps with clean architecture, reusable components, and smooth API-driven experiences.",
    },
  ],
  [
    {
      icon: "lnr-pencil",
      title: "App Development",
      text: "I create cross-platform mobile apps in React Native—from polished UI and offline-ready flows to App Store and Play Store releases built for real-world performance.",
    },
    {
      icon: "lnr-flag",
      title: "Third Party Integration",
      text: "I connect your product to the tools you rely on—payment gateways, CRMs, analytics, auth providers, and REST or GraphQL APIs—with reliable, maintainable integrations.",
    },
  ],
];

export default function AboutSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="section-content">
        {/* Personal Information */}
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>
              Frontend engineer with over a decade of experience building web
              and mobile applications in React.js, Angular, Next.js, and React
              Native. Focused on component architecture, API integration, and
              translating design systems into fast, responsive, cross-browser
              interfaces.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                {/* <li>
                  <span className="title">Age</span>
                  <span className="value">32</span>
                </li> */}
                {/* <li>
                  <span className="title">Residence</span>
                  <span className="value">Pakistan</span>
                </li> */}
                {/* <li>
                  <span className="title">Address</span>
                  <span className="value">88 Some Street, Some Town</span>
                </li> */}
                <li>
                  <span className="title">Email</span>
                  <span className="value">zeeshantariq707@gmail.com</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">+92 323 9942919</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of Personal Information */}

        <div className="white-space-50"></div>

        {/* Services */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                What <span>I Do</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {SERVICES.map((column, i) => (
            <div className="col-xs-12 col-sm-6" key={i}>
              <div className="col-inner">
                <div className="info-list-w-icon">
                  {column.map((service) => (
                    <div className="info-block-w-icon" key={service.title}>
                      <div className="ci-icon">
                        <i className={`lnr ${service.icon}`}></i>
                      </div>
                      <div className="ci-text">
                        <h4>{service.title}</h4>
                        <p>{service.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End of Services */}

        <div className="white-space-30"></div>

        {/* Testimonials */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Testimonials</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <Carousel
              className="testimonials owl-carousel"
              margin={25}
              responsive={{ 0: 1, 480: 1, 768: 2, 1200: 2 }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div className="testimonial" key={testimonial.author}>
                  <div className="img">
                    <img src={testimonial.img} alt={testimonial.author} />
                  </div>
                  <div className="text">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="author-info">
                    <h4 className="author">{testimonial.author}</h4>
                    <h5 className="company">{testimonial.company}</h5>
                    <div className="icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* End of Testimonials */}
      </div>
    </section>
  );
}
