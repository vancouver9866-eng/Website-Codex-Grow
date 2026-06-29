"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mike%40growcean.com";

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
    const formData = new FormData(form);

    if (formData.get("website")) {
      setSubmitted(true);
      form.reset();
      setSubmitting(false);
      return;
    }

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });
    payload.set("product", String(formData.get("model") || "Product inquiry"));
    payload.set("phone", String(formData.get("whatsapp") || ""));
    payload.set("source", window.location.href);
    payload.set("_subject", `New Growcean product inquiry: ${formData.get("company") || formData.get("model") || "Website Lead"}`);
    payload.set("_template", "table");
    payload.set("_replyto", String(formData.get("email") || ""));
    payload.set("_captcha", "false");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });
      const result = await response.json();
      const accepted = result?.success === true || result?.success === "true";

      if (!response.ok || !accepted) throw new Error(result?.message || result?.error);
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
