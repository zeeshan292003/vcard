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
              <h2>ZISHTECH</h2>
              <TextRotation
                items={[
                  "Web & Mobile Studio",
                  "Ecommerce & Product Apps",
                  "APIs & Integrations",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
