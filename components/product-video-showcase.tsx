import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { createWhatsAppLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    label: "DESIGN VISUALIZATION",
    title: "Design Visualization",
    intro:
      "This video is a design visualization created to show the lighting style, atmosphere, and application idea. For real product confirmation, Growcean can provide showroom photos, sample photos, lighting test videos, and a live video call from Guangzhou.",
    points: [
      "Visual reference for style and application idea",
      "Request real product photos or sample confirmation",
      "Book a live video call from Guangzhou",
    ],
    realPhotos: "Request Real Product Photos",
    videoCall: "Book a Live Video Call",
    whatsapp: "Contact on WhatsApp",
    videoLabel: "Growcean ceiling light design visualization",
    note: "Visual reference only. Real product photos and sample confirmation are available on request.",
  },
  es: {
    label: "VISUALIZACIÓN DE DISEÑO",
    title: "Visualización de diseño",
    intro:
      "Este video es una visualización de diseño creada para mostrar el estilo de iluminación, la atmósfera y la idea de aplicación. Para confirmar el producto real, Growcean puede proporcionar fotos de showroom, fotos de muestra, videos de prueba de iluminación y una videollamada en vivo desde Guangzhou.",
    points: [
      "Referencia visual para estilo e idea de aplicación",
      "Solicite fotos reales o confirmación de muestra",
      "Reserve una videollamada desde Guangzhou",
    ],
    realPhotos: "Solicitar fotos reales",
    videoCall: "Reservar videollamada",
    whatsapp: "Contactar por WhatsApp",
    videoLabel: "Visualización de diseño de iluminación Growcean",
    note: "Referencia visual únicamente. Fotos reales y confirmación de muestra disponibles bajo solicitud.",
  },
} as const;

export function ProductVideoShowcase({ locale = "en" }: { locale?: Locale }) {
  const content = locale === "es" ? copy.es : copy.en;
  const whatsappHref = createWhatsAppLink("Hello Growcean Lighting, please send real product photos and help me confirm suitable lighting models.");

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
          <div className="product-video-actions">
            <a className="product-video-cta" href="#inquiry" data-event="request_real_photos_click">
              {content.realPhotos}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="product-video-cta secondary" href="#inquiry" data-event="book_video_call_click">
              {content.videoCall}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="product-video-cta secondary" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click">
              {content.whatsapp}
            </a>
          </div>
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
              preload="none"
              poster="/images/growcean-video-cover.jpg"
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
