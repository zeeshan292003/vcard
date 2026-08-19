"use client";

import Carousel from "../Carousel";
import type { SectionProps } from "./SectionProps";

const TESTIMONIALS = [
  {
    img: "/img/testimonials/testimonial-1.jpg",
    text: "ZISHTECH rebuilt our dashboard in Next.js and cut page load times by nearly half. They understood our API constraints quickly, kept the UI pixel-perfect, and delivered ahead of schedule. One of the most reliable engineering partners we've worked with.",
    author: "Sarah Mitchell",
    company: "Product Lead, FinTech Startup",
  },
  {
    img: "/img/testimonials/testimonial-2.jpg",
    text: "We needed a React Native app shipped on a tight deadline. ZISHTECH handled the full flow—from component architecture to third-party payment integration—without compromising quality. Clear communication throughout the project.",
    author: "James Carter",
    company: "Founder, Ecommerce Platform",
  },
  {
    img: "/img/testimonials/testimonial-3.jpg",
    text: "After years of patchwork fixes, ZISHTECH refactored our Angular codebase into a maintainable structure. Their attention to responsive design and cross-browser compatibility saved our team countless hours of debugging.",
    author: "Aisha Khan",
    company: "Engineering Manager, SaaS Company",
  },
  {
    img: "/img/testimonials/testimonial-1.jpg",
    text: "ZISHTECH integrated Stripe, HubSpot, and our custom REST APIs into a single seamless experience. They document their work well and always think about what the next developer will need. Highly recommended for complex frontend work.",
    author: "David Nguyen",
    company: "CTO, Digital Agency",
  },
];

const SERVICES = [
  [
    {
      icon: "lnr-store",
      title: "Ecommerce",
      text: "We build fast, conversion-focused online stores with secure checkout flows, product catalogs, and payment integrations—designed to scale as your business grows.",
    },
    {
      icon: "lnr-laptop-phone",
      title: "Web Development",
      text: "We deliver responsive, SEO-friendly web apps in React, Angular, and Next.js—with clean architecture, reusable components, and smooth API-driven experiences.",
    },
  ],
  [
    {
      icon: "lnr-pencil",
      title: "App Development",
      text: "We create cross-platform mobile apps in React Native—from polished UI and offline-ready flows to App Store and Play Store releases built for real-world performance.",
    },
    {
      icon: "lnr-flag",
      title: "Third Party Integration",
      text: "We connect your product to the tools you rely on—payment gateways, CRMs, analytics, auth providers, and REST or GraphQL APIs—with reliable, maintainable integrations.",
    },
  ],
];

export default function AboutSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>
          About <span>Us</span>
        </h2>
      </div>

      <div className="section-content">
        {/* Company Information */}
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>
              ZISHTECH is a software studio that designs and ships production
              web and mobile products. We work in React.js, Angular, Next.js,
              React Native, and Node—focused on component architecture, API
              integration, and turning design systems into fast, responsive
              interfaces that hold up in the real world.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Email</span>
                  <span className="value">zishtech.net@gmail.com</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">+1 (786) 837-7514</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of Company Information */}

        <div className="white-space-50"></div>

        {/* Services */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                What <span>We Do</span>
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
