import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    label: "PRODUCT IN MOTION",
    title: "See the lighting details before you shortlist a model",
    intro:
      "A closer vertical view of the product appearance, light output and real-world presentation for overseas buyers.",
    points: [
      "Review the product form and visible finish",
      "Use the video during internal sourcing discussions",
      "Send us your target size, wattage and quantity",
    ],
    cta: "Discuss This Product",
    videoLabel: "Growcean ceiling light product demonstration",
    note: "Product video · Tap play to view with controls",
  },
  es: {
    label: "PRODUCTO EN MOVIMIENTO",
    title: "Vea los detalles de iluminación antes de seleccionar un modelo",
    intro:
      "Una vista vertical más cercana de la apariencia, la salida de luz y la presentación real del producto para compradores internacionales.",
    points: [
      "Revise la forma del producto y su acabado visible",
      "Utilice el video en sus reuniones internas de compra",
      "Envíenos el tamaño, la potencia y la cantidad requeridos",
    ],
    cta: "Consultar Este Producto",
    videoLabel: "Demostración de producto de iluminación Growcean",
    note: "Video del producto · Pulse reproducir para verlo",
  },
} as const;

export function ProductVideoShowcase({ locale = "en" }: { locale?: Locale }) {
  const content = locale === "es" ? copy.es : copy.en;

  return (
    <section className="product-video-section" aria-labelledby="product-video-title">
      <div className="container product-video-layout">
        <div className="product-video-copy">
          <p className="product-video-label">
            <Play size={14} aria-hidden="true" />
            {content.label}
          </p>
          <h2 id="product-video-title">{content.title}</h2>
          <p className="product-video-intro">{content.intro}</p>
          <ul className="product-video-points">
            {content.points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a className="product-video-cta" href="#inquiry">
            {content.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="product-video-stage">
          <div className="product-video-glow" aria-hidden="true" />
          <div className="product-video-frame">
            <video
              className="product-video"
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/ultra-thin.jpg"
              aria-label={content.videoLabel}
            >
              <source src="/videos/growcean-product-01.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="product-video-corners" aria-hidden="true" />
          </div>
          <p className="product-video-note">{content.note}</p>
        </div>
      </div>
    </section>
  );
}
