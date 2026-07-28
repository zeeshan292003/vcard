"use client";

import type { SectionProps } from "./SectionProps";

const POSTS = [
  {
    itemClass: "post-1",
    category: "Design",
    categoryTitle: "View all posts in Design",
    img: "/img/blog/blog_post_1.jpg",
    date: "05 Mar 2020",
    title: "Why I Switched to Sketch For UI Design",
  },
  {
    itemClass: "post-2",
    category: "UI",
    categoryTitle: "View all posts in UI",
    img: "/img/blog/blog_post_2.jpg",
    date: "23 Feb 2020",
    title: "Best Practices for Animated Progress Indicators",
  },
  {
    itemClass: "post-1",
    category: "Design",
    categoryTitle: "View all posts in Design",
    img: "/img/blog/blog_post_3.jpg",
    date: "06 Feb 2020",
    title: "Designing the Perfect Feature Comparison Table",
  },
  {
    itemClass: "post-2",
    category: "UI",
    categoryTitle: "View all posts in E-Commerce",
    img: "/img/blog/blog_post_4.jpg",
    date: "07 Jan 2020",
    title: "An Overview of E-Commerce Platforms",
  },
];

export default function BlogSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="page-title">
        <h2>Blog</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="blog-masonry two-columns clearfix">
              {POSTS.map((post) => (
                <div className={`item ${post.itemClass}`} key={post.title}>
                  <div className="blog-card">
                    <div className="media-block">
                      <div className="category">
                        <a href="#" title={post.categoryTitle}>
                          {post.category}
                        </a>
                      </div>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                          src={post.img}
                          className="size-blog-masonry-image-two-c"
                          alt={post.title}
                          title=""
                        />
                        <div className="mask"></div>
                      </a>
                    </div>
                    <div className="post-info">
                      <div className="post-date">{post.date}</div>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <h4 className="blog-item-title">{post.title}</h4>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
