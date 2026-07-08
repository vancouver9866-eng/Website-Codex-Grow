import { ArrowRight, Camera, ClipboardCheck, MessageCircle, PackageCheck, Sparkles } from "lucide-react";
import { createWhatsAppLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    label: "SAFE SOURCING",
    title: "How to Buy Safely from Growcean",
    subtitle:
      "For first-time buyers, we help reduce sourcing risk with clear communication, sample discussion, product checking, and shipment preparation.",
    cta: "Start a Safe Order",
    whatsapp: "Ask on WhatsApp",
    steps: [
      {
        title: "Start with Your Requirement",
        text: "Send us your target product, country, quantity idea, or reference photos. You do not need to know all technical details at the beginning.",
      },
      {
        title: "Product Recommendation",
        text: "We help recommend suitable lighting models based on your market, application, style, budget, and order plan.",
      },
      {
        title: "Sample Discussion",
        text: "Samples can be arranged or discussed before bulk orders. Sample details, cost, and timing will be confirmed according to the selected model.",
      },
      {
        title: "Order Confirmation",
        text: "Before production, we confirm model, quantity, body color, light color mode, voltage requirements, packaging, and shipping details.",
      },
      {
        title: "Photos Before Shipment",
        text: "Before shipment, Growcean can provide product photos, lighting test photos or videos, packaging photos, and shipment preparation updates.",
      },
    ],
  },
  es: {
    label: "ABASTECIMIENTO SEGURO",
    title: "Cómo comprar de forma segura con Growcean",
    subtitle:
      "Para compradores nuevos, ayudamos a reducir riesgos con comunicación clara, discusión de muestras, revisión de productos y preparación del envío.",
    cta: "Iniciar pedido seguro",
    whatsapp: "Preguntar por WhatsApp",
    steps: [
      {
        title: "Empiece con su requisito",
        text: "Envíenos producto objetivo, país, cantidad estimada o fotos de referencia. No necesita conocer todos los detalles técnicos al inicio.",
      },
      {
        title: "Recomendación de productos",
        text: "Recomendamos modelos según mercado, aplicación, estilo, presupuesto y plan de pedido.",
      },
      {
        title: "Discusión de muestras",
        text: "Las muestras se pueden organizar o discutir antes del pedido grande. Los detalles, costo y tiempo se confirman por modelo.",
      },
      {
        title: "Confirmación del pedido",
        text: "Antes de producción, confirmamos modelo, cantidad, color del cuerpo, modo de luz, voltaje, embalaje y envío.",
      },
      {
        title: "Fotos antes del envío",
        text: "Antes del envío, Growcean puede proporcionar fotos del producto, pruebas de iluminación, embalaje y preparación del envío.",
      },
    ],
  },
} as const;

const icons = [MessageCircle, Sparkles, ClipboardCheck, PackageCheck, Camera] as const;

export function SafeBuyingSection({ compact = false, locale = "en" }: { compact?: boolean; locale?: Locale }) {
  const copy = locale === "es" ? content.es : content.en;
  const whatsappHref = createWhatsAppLink(
    "Hello Growcean Lighting, I want to start a safe lighting order. Please help recommend suitable models.",
  );

  return (
    <section className={compact ? "safe-buying-section compact" : "section safe-buying-section"} id={compact ? undefined : "safe-buying"}>
      <div className="container">
        <div className={compact ? "safe-buying-head compact" : "section-heading centered narrow"}>
          <p className="section-label">{copy.label}</p>
          <h2>{copy.title}</h2>
          <p>{copy.subtitle}</p>
        </div>
        <div className={compact ? "safe-buying-grid compact" : "safe-buying-grid"}>
          {copy.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article className="safe-step-card" key={step.title}>
                <span className="safe-step-index">{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
        {!compact && (
          <div className="safe-buying-actions">
            <a className="button" href="#inquiry" data-event="safe_order_click">
              {copy.cta} <ArrowRight size={18} />
            </a>
            <a className="button button-outline-blue" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click">
              <MessageCircle size={18} /> {copy.whatsapp}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
