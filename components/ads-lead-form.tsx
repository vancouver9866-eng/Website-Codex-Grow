"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mike%40growcean.com";

export function AdsLeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
    payload.set("company", String(formData.get("company") || "Google Ads landing page lead"));
    payload.set("country", String(formData.get("country") || "Not provided"));
    payload.set("product", "LED Ceiling Lights Manufacturer - Google Ads");
    payload.set("source", window.location.href);
    payload.set("_subject", `New Growcean Google Ads lead: ${formData.get("name") || "Website Lead"}`);
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

  if (submitted) {
    return (
      <div className="ads-form-success" role="status">
        <CheckCircle2 size={42} />
        <h3>Inquiry Sent</h3>
        <p>Growcean will review your requirements and reply soon.</p>
        <button className="ads-secondary-button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
      </div>
    );
  }

  return (
    <form className={compact ? "ads-form compact" : "ads-form"} onSubmit={submit}>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        <span>Name *</span>
        <input required name="name" autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email *</span>
        <input required type="email" name="email" autoComplete="email" placeholder="name@company.com" />
      </label>
      <label>
        <span>Phone / WhatsApp *</span>
        <input required name="phone" autoComplete="tel" placeholder="+00 000 000 000" />
      </label>
      {!compact ? (
        <label>
          <span>Message *</span>
          <textarea required name="message" rows={4} defaultValue="I am interested in LED ceiling lights. Please send catalog, quotation and MOQ." />
        </label>
      ) : (
        <input type="hidden" name="message" value="I am interested in LED ceiling lights. Please send catalog, quotation and MOQ." />
      )}
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="ads-primary-button" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : compact ? "Get Quote" : "Send Inquiry Now"} <Send size={18} />
      </button>
    </form>
  );
}
