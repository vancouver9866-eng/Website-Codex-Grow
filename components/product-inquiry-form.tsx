"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ProductInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <div className="pd-form-success"><CheckCircle2 size={46} /><h3>Inquiry prepared.</h3><p>This template currently demonstrates the success state. Connect it to email or CRM before launch.</p><button className="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="pd-inquiry-form" onSubmit={submit}>
      <input type="hidden" name="model" value="QS-XDD-2.7XB-GLQD-090" />
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
      <label><span>Requirements *</span><textarea required rows={4} defaultValue="I am interested in model QS-XDD-2.7XB-GLQD-090. Please share pricing, MOQ, available specifications and sample terms." /></label>
      <button className="button submit-button" type="submit">Request Product Quote <Send size={18} /></button>
      <p className="form-note">Prototype form. No data is transmitted or stored.</p>
    </form>
  );
}
