import { ClipboardCheck, Clock3, PackageCheck, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    label: "BUYING INFORMATION",
    title: "Clear Buying Information for First-Time Buyers",
    subtitle: "We make lighting sourcing easier for importers, distributors, project buyers, and small business owners.",
    cards: [
      {
        title: "MOQ Starts from 50 pcs",
        text: "For many standard lighting models, MOQ starts from 50 pcs. Final MOQ depends on model, finish, packaging, and customization requirements.",
      },
      {
        title: "Sample First",
        text: "Samples can be discussed before bulk orders. Sample cost and sample lead time will be confirmed based on the selected model.",
      },
      {
        title: "Production Time",
        text: "Production time depends on product model, order quantity, finish, and packaging requirements. We will confirm the schedule before order confirmation.",
      },
      {
        title: "Flexible Model Selection",
        text: "If you are not sure which products fit your market, send us your target country, budget, quantity idea, or reference photos. We will help recommend suitable models.",
      },
    ],
  },
  es: {
    label: "INFORMACIÓN DE COMPRA",
    title: "Información clara para compradores nuevos",
    subtitle: "Facilitamos el abastecimiento de iluminación para importadores, distribuidores, compradores de proyectos y pequeños negocios.",
    cards: [
      {
        title: "MOQ desde 50 piezas",
        text: "Para muchos modelos estándar, el MOQ empieza desde 50 piezas. El MOQ final depende del modelo, acabado, embalaje y requisitos de personalización.",
      },
      {
        title: "Muestra primero",
        text: "Las muestras se pueden discutir antes de pedidos grandes. El costo y el tiempo de muestra se confirman según el modelo seleccionado.",
      },
      {
        title: "Tiempo de producción",
        text: "El tiempo de producción depende del modelo, cantidad, acabado y embalaje. Confirmaremos el calendario antes de confirmar el pedido.",
      },
      {
        title: "Selección flexible de modelos",
        text: "Si no sabe qué productos encajan con su mercado, envíenos país, presupuesto, cantidad estimada o fotos de referencia. Le recomendaremos modelos adecuados.",
      },
    ],
  },
} as const;

const icons = [PackageCheck, ClipboardCheck, Clock3, Sparkles] as const;

export function CommercialInfoSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? content.es : content.en;

  return (
    <section className="section commercial-info-section" id="buying-information">
      <div className="container">
        <div className="section-heading centered narrow">
          <p className="section-label">{copy.label}</p>
          <h2>{copy.title}</h2>
          <p>{copy.subtitle}</p>
        </div>
        <div className="commercial-card-grid">
          {copy.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <article className="commercial-card" key={card.title}>
                <div className="commercial-card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
