"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { type Locale } from "@/lib/i18n";

const formText = {
  en: ["Name", "Your name", "Company", "Company name", "Business email", "WhatsApp", "Country / Region", "Your market", "Product type", "Select a category", "Message", "Tell us the product, quantity, size, wattage, application and customization needed.", "Send Inquiry", "Thank you for your inquiry.", "Our sales team will review your requirements and contact you.", "Send another inquiry"],
  es: ["Nombre", "Su nombre", "Empresa", "Nombre de empresa", "Correo empresarial", "WhatsApp / Teléfono", "País / Región", "Su mercado", "Producto de interés", "Seleccione una categoría", "Requisitos", "Indique producto, cantidad, tamaño, potencia, aplicación y personalización.", "Enviar consulta", "Gracias por su consulta.", "Nuestro equipo comercial revisará sus requisitos y le contactará.", "Enviar otra consulta"],
  fr: ["Nom", "Votre nom", "Entreprise", "Nom de l’entreprise", "E-mail professionnel", "WhatsApp / Téléphone", "Pays / Région", "Votre marché", "Produit recherché", "Choisir une catégorie", "Besoins", "Précisez produit, quantité, dimensions, puissance, application et personnalisation.", "Envoyer la demande", "Merci pour votre demande.", "Notre équipe commerciale étudiera vos besoins et vous contactera.", "Envoyer une autre demande"],
  ar: ["الاسم", "اسمك", "الشركة", "اسم الشركة", "البريد الإلكتروني للعمل", "واتساب / الهاتف", "الدولة / المنطقة", "السوق المستهدف", "المنتج المطلوب", "اختر فئة", "المتطلبات", "اذكر المنتج والكمية والمقاس والقدرة والاستخدام والتخصيص.", "إرسال الاستفسار", "شكراً لاستفسارك.", "سيراجع فريق المبيعات متطلباتك ويتواصل معك.", "إرسال استفسار آخر"],
  ru: ["Имя", "Ваше имя", "Компания", "Название компании", "Рабочий e-mail", "WhatsApp / Телефон", "Страна / Регион", "Ваш рынок", "Интересующий продукт", "Выберите категорию", "Требования", "Укажите продукт, объем, размер, мощность, применение и кастомизацию.", "Отправить запрос", "Спасибо за запрос.", "Отдел продаж изучит требования и свяжется с вами.", "Отправить еще один запрос"],
} as const;

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mike%40growcean.com";

export function InquiryForm({ locale = "en" }: { locale?: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const f = formText[locale];
  const productTypes = ["LED ceiling lights", "Flush mount lights", "Smart ceiling lights", "Decorative ceiling lamps", "Waterproof lights", "Corridor lights", "Package sets"];
  const applications = ["Home", "Hotel", "Apartment", "Office", "Retail", "Other"];

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
    payload.set("source", window.location.href);
    payload.set("_subject", `New Growcean inquiry: ${formData.get("company") || "Website Lead"}`);
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
      <div className="form-success" role="status">
        <CheckCircle2 size={48} />
        <h3>{f[13]}</h3>
        <p>{f[14]}</p>
        <button className="button" onClick={() => setSubmitted(false)}>{f[15]}</button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="field-row">
        <label><span>{f[0]} *</span><input required name="name" autoComplete="name" placeholder={f[1]} /></label>
        <label><span>{f[2]} *</span><input required name="company" autoComplete="organization" placeholder={f[3]} /></label>
      </div>
      <div className="field-row">
        <label><span>{f[4]} *</span><input required type="email" name="email" autoComplete="email" placeholder="name@company.com" /></label>
        <label><span>{f[5]}</span><input name="phone" autoComplete="tel" placeholder="+00 000 000 000" /></label>
      </div>
      <div className="field-row">
        <label><span>{f[6]} *</span><input required name="country" autoComplete="country-name" placeholder={f[7]} /></label>
        <label><span>{f[8]} *</span><select required name="product" defaultValue=""><option value="" disabled>{f[9]}</option>{productTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <div className="field-row">
        <label><span>Target quantity</span><input name="quantity" placeholder="e.g. 500 pcs / 1 container / project quantity" /></label>
        <label><span>Wattage / size requirements</span><input name="wattage_size" placeholder="e.g. 24W, 36W, 300mm, 600mm" /></label>
      </div>
      <div className="field-row">
        <label><span>CCT requirement</span><select name="cct" defaultValue=""><option value="">To be confirmed</option><option>3000K warm white</option><option>4000K neutral white</option><option>6500K cool white</option><option>Three-color CCT</option><option>Other / mixed</option></select></label>
        <label><span>Application</span><select name="application" defaultValue=""><option value="">Select application</option>{applications.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <label><span>Need OEM packaging?</span><select name="oem_packaging" defaultValue=""><option value="">To be confirmed</option><option>Yes</option><option>No</option><option>Need logo / label / manual discussion</option></select></label>
      <label><span>{f[10]} *</span><textarea required name="message" rows={4} placeholder={f[11]} /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button submit-button" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : f[12]} <Send size={18} />
      </button>
    </form>
  );
}
