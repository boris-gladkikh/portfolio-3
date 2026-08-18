import React, { useState } from "react";
import { postEmail } from "../APIHelper";
import "./ContactForm.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm = { name: "", email: "", subject: "", body: "" };

function validate({ name, email, body }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!body.trim()) errors.body = "Please enter a message.";
  return errors;
}

function ContactForm() {
  const [formData, setFormData] = useState({ ...emptyForm });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [sendError, setSendError] = useState("");

  const submitLabel = {
    idle: "SUBMIT",
    sending: "SENDING…",
    sent: "SENT — THANK YOU",
    error: "SUBMIT",
  }[status];

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "sent" || status === "error") setStatus("idle");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    setSendError("");

    try {
      await postEmail({ ...formData, originSite: "portfolio-site" });
      setFormData({ ...emptyForm });
      setStatus("sent");
    } catch (err) {
      setSendError(
        Array.isArray(err)
          ? err.join(" ")
          : "Message could not be sent. Please email me directly."
      );
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="field">
          <label htmlFor="c-name">NAME</label>
          <input
            className="input"
            id="c-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="c-email">EMAIL</label>
          <input
            className="input"
            id="c-email"
            name="email"
            type="email"
            placeholder="you@domain.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="field-error">{errors.email}</span>
          ) : (
            <span className="field-help">
              I will never share your email address.
            </span>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-subject">SUBJECT</label>
        <input
          className="input"
          id="c-subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="c-body">BODY</label>
        <textarea
          className="input"
          id="c-body"
          name="body"
          rows="7"
          placeholder="Message"
          value={formData.body}
          onChange={handleChange}
          aria-invalid={Boolean(errors.body)}
        />
        {errors.body && <span className="field-error">{errors.body}</span>}
      </div>

      {status === "error" && sendError && (
        <p className="contact-form-error" role="alert">
          {sendError}
        </p>
      )}

      <button
        className="btn btn-primary contact-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {submitLabel}
      </button>
    </form>
  );
}

export default ContactForm;
