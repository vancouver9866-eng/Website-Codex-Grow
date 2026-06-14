"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ProductInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  if (submitted) return <div className="pd-form-success"><CheckCircle2 size={46} /><h3>Thank you for your inquiry.</h3><p>Our sales team will review your requirements and contact you.</p><button className="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: window.location.href }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error);
      setSubmitted(true);
      form.reset();
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "The inquiry could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="pd-inquiry-form" onSubmit={submit}>
      <input type="hidden" name="model" value="QS-XDD-2.7XB-GLQD-090" />
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="field-row">
        <label><span>Name *</span><input required name="name" placeholder="Your name" /></label>
        <label><span>Company *</span><input required name="company" placeholder="Company name" /></label>
      </div>
      <div className="field-row">
        <label><span>Business email *</span><input required type="email" name="email" placeholder="name@company.com" /></label>
        <label><span>Country / Region *</span><input required name="country" placeholder="Destination market" /></label>
      </div>
      <div className="field-row">
        <label><span>Estimated quantity *</span><input required name="quantity" placeholder="e.g. 500 pcs" /></label>
        <label><span>WhatsApp</span><input name="whatsapp" placeholder="+00 000 000 000" /></label>
      </div>
      <label><span>Requirements *</span><textarea required name="message" rows={4} defaultValue="I am interested in model QS-XDD-2.7XB-GLQD-090. Please share pricing, MOQ, available specifications and sample terms." /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button submit-button" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Request Product Quote"} <Send size={18} />
      </button>
      <p className="form-note">Your inquiry will be sent securely to the Growcean sales team.</p>
    </form>
  );
}
