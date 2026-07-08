"use client";

import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { createWhatsAppLink } from "@/lib/contact";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mike%40growcean.com";

export function ProductInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const whatsappHref = createWhatsAppLink(
    "Hello Growcean Lighting, I am interested in model QS-XDD-2.7XB-GLQD-090. My target market is [country]. Please recommend suitable configuration.",
  );

  if (submitted) {
    return (
      <div className="pd-form-success">
        <CheckCircle2 size={46} />
        <h3>Thank you.</h3>
        <p>Growcean Lighting will contact you soon with suitable product recommendations.</p>
        <button className="button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
      </div>
    );
  }

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
    payload.set("_subject", `New Growcean product inquiry: ${formData.get("country") || formData.get("model") || "Website Lead"}`);
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
      <h3>Tell Us What You Need</h3>
      <p className="form-helper">No need to know all technical details. Tell us your market, quantity idea, and product style. We will help recommend suitable lighting models.</p>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="field-row">
        <label><span>Name *</span><input required name="name" placeholder="Your name" autoComplete="name" /></label>
        <label><span>WhatsApp *</span><input required name="whatsapp" placeholder="Your WhatsApp number" autoComplete="tel" /></label>
      </div>
      <div className="field-row">
        <label><span>Country *</span><input required name="country" placeholder="Your country" autoComplete="country-name" /></label>
        <label><span>Email</span><input type="email" name="email" placeholder="name@company.com" autoComplete="email" /></label>
      </div>
      <label><span>Company</span><input name="company" placeholder="Company name" autoComplete="organization" /></label>
      <label>
        <span>What are you looking for? *</span>
        <textarea
          required
          name="message"
          rows={4}
          defaultValue="I am interested in model QS-XDD-2.7XB-GLQD-090. Please share suitable configuration, MOQ, sample discussion and quotation steps."
        />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions-row">
        <button className="button submit-button" type="submit" disabled={submitting} data-event="inquiry_form_submit">
          {submitting ? "Sending..." : "Send Inquiry"} <Send size={18} />
        </button>
        <a className="button button-outline-blue" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click">
          <MessageCircle size={18} /> Contact on WhatsApp
        </a>
      </div>
    </form>
  );
}
