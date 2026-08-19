"use client";

import { useEffect, useState } from "react";

import type { SectionProps } from "./SectionProps";

const CONTACT_INFO = [
  { icon: "lnr-phone-handset", text: "+1 (786) 837-7514" },
  { icon: "lnr-envelope", text: "zishtech.net@gmail.com" },
  { icon: "lnr-checkmark-circle", text: "Available for new projects" },
];

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const STATUS_HIDE_MS = 4000;

function fieldClass(focused: boolean, value: string) {
  return `form-group form-group-with-icon${
    focused || value !== "" ? " form-group-focus" : ""
  }`;
}

export default function ContactSection(props: SectionProps) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "error") {
      return;
    }

    const timer = setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, STATUS_HIDE_MS);

    return () => clearTimeout(timer);
  }, [status]);

  const fieldProps = (name: keyof typeof EMPTY_FORM) => ({
    value: values[name],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setValues((v) => ({ ...v, [name]: e.target.value })),
    onFocus: () => setFocusedField(name),
    onBlur: () => setFocusedField(null),
    disabled: status === "loading",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setStatusMessage(
        data.message || "Thank you, your message has been received."
      );
      setValues(EMPTY_FORM);
      setFocusedField(null);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section {...props}>
      <div className="page-title">
        <h2>Contact</h2>
      </div>

      <div className="section-content">
        <div className="row">
          {/* Contact Info */}
          <div className="col-xs-12 col-sm-4">
            {CONTACT_INFO.map((info) => (
              <div className="lm-info-block gray-default" key={info.text}>
                <i className={`lnr ${info.icon}`}></i>
                <h4>{info.text}</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>
            ))}
          </div>
          {/* End of Contact Info */}

          {/* Contact Form */}
          <div className="col-xs-12 col-sm-8">
            <div className="block-title">
              <h3>
                Start a <span>Project</span>
              </h3>
            </div>

            <form
              id="contact_form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="messages">
                {status === "success" && (
                  <div className="alert alert-success">{statusMessage}</div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger">{statusMessage}</div>
                )}
              </div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className={fieldClass(focusedField === "name", values.name)}>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=""
                        required
                        {...fieldProps("name")}
                      />
                      <label>Full Name</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className={fieldClass(focusedField === "email", values.email)}>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder=""
                        required
                        {...fieldProps("email")}
                      />
                      <label>Email Address</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className={fieldClass(focusedField === "subject", values.subject)}>
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder=""
                        required
                        {...fieldProps("subject")}
                      />
                      <label>Subject</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className={fieldClass(focusedField === "message", values.message)}>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder=""
                        rows={7}
                        required
                        {...fieldProps("message")}
                      ></textarea>
                      <label>Message</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  className="button btn-send"
                  value={status === "loading" ? "Sending..." : "Send message"}
                  disabled={status === "loading"}
                />
              </div>
            </form>
          </div>
          {/* End of Contact Form */}
        </div>
      </div>
    </section>
  );
}
