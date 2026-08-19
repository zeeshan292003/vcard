"use client";
import type { SectionProps } from "./SectionProps";

interface PortfolioItem {
  img: string;
  title: string;
  category: string;
  text: string;
  url: string;
}

const ITEMS: PortfolioItem[] = [
  
  {
    img: "/img/portfolio/haleeb-foods.png",
    title: "Haleeb Foods",
    category: "Web Platform",
    text: "Corporate brand website for Haleeb Foods, focused on product discovery, brand presentation, and customer-facing company information.",
    url: "https://haleebfoods.com/",
  },
  {
    img: "/img/portfolio/yieldwerx.png",
    title: "yieldWerx",
    category: "Web Platform",
    text: "Predictive AI yield analytics platform built for semiconductor teams, focused on quality insights, reporting, and yield-management workflows.",
    url: "https://yieldwerx.com/",
  },
  {
    img: "/img/portfolio/schazoozaka.png",
    title: "Schazoo Zaka",
    category: "Web Platform",
    text: "Pharmaceutical company website with product catalog, brand storytelling, and online store flows for healthcare products and anti-TB medication.",
    url: "https://schazoozaka.com/",
  },
  {
    img: "/img/portfolio/sharif-medical-city.png",
    title: "Sharif Medical City",
    category: "Web Platform",
    text: "Institutional website for Sharif Medical City covering trust information, medical institutions, news, careers, and patient-facing contact details.",
    url: "http://sharifmedicalcity.org/",
  },
  {
    img: "/img/portfolio/project-rich-pakistan.png",
    title: "Project Rich Pakistan",
    category: "Web Platform",
    text: "Custom jewelry e-commerce store with collections, product catalog, cart checkout, and brand storytelling for handcrafted gold-plated pieces.",
    url: "https://projectrichpakistan.com/",
  },
  {
    img: "/img/portfolio/mahir-company.png",
    title: "Mahir Company",
    category: "Web Platform",
    text: "On-demand services platform for home maintenance, cleaning, and personal care across Pakistan. Delivered full stack booking and scheduling flows for customers and operations.",
    url: "https://mahircompany.com/",
  },
  {
    img: "/img/portfolio/education-management-system.png",
    title: "Education Management System",
    category: "Web Platform",
    text: "Unified education management platform for welfare schools, handling students, donors, parents, attendance, and campus operations in a single dashboard.",
    url: "https://ems.helpline.tdemo.biz/",
  },
  {
    img: "/img/portfolio/donation-inventory-management.png",
    title: "Donation and Inventory Management System",
    category: "Web Platform",
    text: "Web platform for managing donations and inventory workflows, helping organizations track resources, operations, and distribution efficiently.",
    url: "https://helpline.tdemo.biz/",
  },
  {
    img: "/img/portfolio/ilaan-com.png",
    title: "ilaan.com",
    category: "Web Platform",
    text: "Nationwide property-listing platform. Built listing search, browsing, and display experiences wired to backend data and scalable search interfaces.",
    url: "https://www.ilaan.com/",
  },
  {
    img: "/img/portfolio/atricent.png",
    title: "Atricent",
    category: "Web Platform",
    text: "AI styling and social-commerce fashion platform with virtual try-on. Built web and mobile client apps connected to backend services and personalized recommendation flows.",
    url: "https://atricent.com/",
  },
];

export default function PortfolioSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>Work</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <p>
              Selected client work across ecommerce, healthcare, real estate,
              education, and product platforms.
            </p>
            <div className="white-space-30"></div>
            {/* Portfolio Content */}
            <div className="portfolio-content">
              {/* Portfolio Grid */}
              <div className="portfolio-grid three-columns">
                {ITEMS.map((item) => (
                  <figure className="item standard" key={item.title}>
                    <div className="portfolio-item-img">
                      <img src={item.img} alt={item.title} title="" />
                      <a
                        href={item.url}
                        className="ajax-page-load"
                        title={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>

                    <div className="portfolio-item-body">
                      <h4 className="name">{item.title}</h4>
                      <span className="category">{item.category}</span>
                      <p>{item.text}</p>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
            {/* End of Portfolio Content */}
          </div>
        </div>
      </div>

    </section>
  );
}
