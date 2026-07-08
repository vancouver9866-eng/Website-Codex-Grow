"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { createWhatsAppLink } from "@/lib/contact";
import { type Locale } from "@/lib/i18n";

type FormCopy = {
  title: string;
  helper: string;
  name: string;
  namePlaceholder: string;
  whatsapp: string;
  whatsappPlaceholder: string;
  country: string;
  countryPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  whatsappCta: string;
  successTitle: string;
  successText: string;
  reset: string;
};

const formText: Record<Locale, FormCopy> = {
  en: {
    title: "Tell Us What You Need",
    helper:
      "No need to know all technical details. Tell us your market, quantity idea, and product style. We will help recommend suitable lighting models.",
    name: "Name",
    namePlaceholder: "Your name",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Your WhatsApp number",
    country: "Country",
    countryPlaceholder: "Your country",
    email: "Email",
    emailPlaceholder: "name@company.com",
    company: "Company",
    companyPlaceholder: "Company name",
    message: "What are you looking for?",
    messagePlaceholder: "Example: ceiling lights for Chile market, 50 pcs trial order, modern style",
    submit: "Send Inquiry",
    whatsappCta: "Contact on WhatsApp",
    successTitle: "Thank you.",
    successText: "Growcean Lighting will contact you soon with suitable product recommendations.",
    reset: "Send another inquiry",
  },
  es: {
    title: "Cuéntenos qué necesita",
    helper:
      "No necesita conocer todos los detalles técnicos. Cuéntenos su mercado, cantidad estimada y estilo de producto. Le ayudaremos a recomendar modelos adecuados.",
    name: "Nombre",
    namePlaceholder: "Su nombre",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Su número de WhatsApp",
    country: "País",
    countryPlaceholder: "Su país",
    email: "Email",
    emailPlaceholder: "nombre@empresa.com",
    company: "Empresa",
    companyPlaceholder: "Nombre de empresa",
    message: "¿Qué está buscando?",
    messagePlaceholder: "Ejemplo: luces de techo para Chile, pedido de prueba 50 piezas, estilo moderno",
    submit: "Enviar consulta",
    whatsappCta: "Contactar por WhatsApp",
    successTitle: "Gracias.",
    successText: "Growcean Lighting le contactará pronto con recomendaciones de productos adecuados.",
    reset: "Enviar otra consulta",
  },
  fr: {
    title: "Décrivez votre besoin",
    helper:
      "Vous n’avez pas besoin de connaître tous les détails techniques. Indiquez votre marché, une idée de quantité et le style recherché. Nous vous aiderons à sélectionner des modèles adaptés.",
    name: "Nom",
    namePlaceholder: "Votre nom",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Votre numéro WhatsApp",
    country: "Pays",
    countryPlaceholder: "Votre pays",
    email: "E-mail",
    emailPlaceholder: "nom@entreprise.com",
    company: "Entreprise",
    companyPlaceholder: "Nom de l’entreprise",
    message: "Que recherchez-vous ?",
    messagePlaceholder: "Exemple : plafonniers pour le Chili, commande test 50 pcs, style moderne",
    submit: "Envoyer la demande",
    whatsappCta: "Contacter sur WhatsApp",
    successTitle: "Merci.",
    successText: "Growcean Lighting vous contactera bientôt avec des recommandations adaptées.",
    reset: "Envoyer une autre demande",
  },
  ar: {
    title: "أخبرنا بما تحتاجه",
    helper:
      "لا تحتاج إلى معرفة كل التفاصيل التقنية. أخبرنا بالسوق والكمية المتوقعة ونمط المنتج، وسنساعدك في اختيار النماذج المناسبة.",
    name: "الاسم",
    namePlaceholder: "اسمك",
    whatsapp: "واتساب",
    whatsappPlaceholder: "رقم واتساب",
    country: "الدولة",
    countryPlaceholder: "دولتك",
    email: "البريد الإلكتروني",
    emailPlaceholder: "name@company.com",
    company: "الشركة",
    companyPlaceholder: "اسم الشركة",
    message: "ما الذي تبحث عنه؟",
    messagePlaceholder: "مثال: مصابيح سقف لسوق تشيلي، طلب تجريبي 50 قطعة، نمط حديث",
    submit: "إرسال الاستفسار",
    whatsappCta: "تواصل عبر واتساب",
    successTitle: "شكراً لك.",
    successText: "ستتواصل معك Growcean Lighting قريباً بتوصيات منتجات مناسبة.",
    reset: "إرسال استفسار آخر",
  },
  ru: {
    title: "Расскажите, что вам нужно",
    helper:
      "Не обязательно знать все технические детали. Укажите рынок, примерный объем и стиль продукта. Мы поможем подобрать подходящие модели.",
    name: "Имя",
    namePlaceholder: "Ваше имя",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Ваш номер WhatsApp",
    country: "Страна",
    countryPlaceholder: "Ваша страна",
    email: "Email",
    emailPlaceholder: "name@company.com",
    company: "Компания",
    companyPlaceholder: "Название компании",
    message: "Что вы ищете?",
    messagePlaceholder: "Например: потолочные светильники для Чили, пробный заказ 50 шт., современный стиль",
    submit: "Отправить запрос",
    whatsappCta: "Связаться в WhatsApp",
    successTitle: "Спасибо.",
    successText: "Growcean Lighting скоро свяжется с вами и предложит подходящие модели.",
    reset: "Отправить еще один запрос",
  },
};

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mike%40growcean.com";

export function InquiryForm({ locale = "en" }: { locale?: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const f = formText[locale];
  const whatsappHref = createWhatsAppLink();

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
    payload.set("_subject", `New Growcean inquiry: ${formData.get("country") || "Website Lead"}`);
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
        <h3>{f.successTitle}</h3>
        <p>{f.successText}</p>
        <button className="button" onClick={() => setSubmitted(false)}>{f.reset}</button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <h3>{f.title}</h3>
      <p className="form-helper">{f.helper}</p>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="field-row">
        <label><span>{f.name} *</span><input required name="name" autoComplete="name" placeholder={f.namePlaceholder} /></label>
        <label><span>{f.whatsapp} *</span><input required name="whatsapp" autoComplete="tel" placeholder={f.whatsappPlaceholder} /></label>
      </div>
      <div className="field-row">
        <label><span>{f.country} *</span><input required name="country" autoComplete="country-name" placeholder={f.countryPlaceholder} /></label>
        <label><span>{f.email}</span><input type="email" name="email" autoComplete="email" placeholder={f.emailPlaceholder} /></label>
      </div>
      <label><span>{f.company}</span><input name="company" autoComplete="organization" placeholder={f.companyPlaceholder} /></label>
      <label><span>{f.message} *</span><textarea required name="message" rows={4} placeholder={f.messagePlaceholder} /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions-row">
        <button className="button submit-button" type="submit" disabled={submitting} data-event="inquiry_form_submit">
          {submitting ? "Sending..." : f.submit} <Send size={18} />
        </button>
        <a className="button button-outline-blue" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click">
          <MessageCircle size={18} /> {f.whatsappCta}
        </a>
      </div>
    </form>
  );
}
