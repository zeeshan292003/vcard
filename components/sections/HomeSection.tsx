"use client";

import TextRotation from "../TextRotation";
import type { SectionProps } from "./SectionProps";

export default function HomeSection(props: SectionProps) {
  return (
    <section {...props}>
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Zeeshan Tariq</h2>
              <TextRotation
                items={["Full Stack Developer", "React & Node.js Engineer"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
