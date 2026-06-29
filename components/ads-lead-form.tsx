"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function AdsLeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
        body: JSON.stringify({
          ...data,
          company: data.company || "Google Ads landing page lead",
          country: data.country || "Not provided",
          product: "LED Ceiling Lights Manufacturer - Google Ads",
          source: window.location.href,
        }),
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
