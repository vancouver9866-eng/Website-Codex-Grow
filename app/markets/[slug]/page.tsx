import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { getMarketPage, marketPages, type MarketPage } from "@/lib/market-pages";

const siteUrl = "https://growcean.com";

export function generateStaticParams() {
  return marketPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketPage(slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: `/markets/${slug}`,
      languages: {
        en: `/markets/${slug}`,
        es: `/es/markets/${slug}`,
        fr: `/fr/markets/${slug}`,
        ar: `/ar/markets/${slug}`,
        ru: `/ru/markets/${slug}`,
        "x-default": `/markets/${slug}`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}/markets/${slug}`,
    },
  };
}

function JsonLd({ page }: { page: MarketPage }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />;
}

export default async function MarketPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getMarketPage(slug);
  if (!page) notFound();

  return (
    <main className="catalog-page">
      <JsonLd page={page} />
      <section className="catalog-hero blog-hero">
        <div className="container">
          <p className="catalog-eyebrow">MARKET SOURCING GUIDE</p>
          <h1>{page.title}</h1>
          <p className="catalog-lead">{page.intro}</p>
          <div className="catalog-actions">
            <a className="button" href="/#inquiry">
              <MessageCircle size={18} /> {page.cta}
            </a>
            {page.internalLinks.map((link) => (
              <a className="button button-outline-dark" href={link} key={link}>
                View Related Page <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <article className="section blog-article">
        <div className="container blog-layout">
          <aside className="blog-toc" aria-label="Market page contents">
            <strong>In this guide</strong>
            {page.sections.map((section) => (
              <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={section.heading}>
                {section.heading}
              </a>
            ))}
            <a href="#faq">FAQ</a>
          </aside>

          <div className="blog-content">
            {page.sections.map((section, index) => (
              <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {index === 1 ? (
                  <div className="blog-cta">
                    <div>
                      <p className="section-label">MARKET SOURCING SUPPORT</p>
                      <h2>Need Ceiling Lighting for Your Market?</h2>
                      <p>
                        Send your target country, product type, quantity, application, wattage, CCT and packaging
                        requirements. Growcean will help review practical options for quotation or sample discussion.
                      </p>
                    </div>
                    <a className="button" href="/#inquiry">
                      {page.cta} <ArrowRight size={18} />
                    </a>
                  </div>
                ) : null}
              </section>
            ))}

            <h2 id="faq">FAQ</h2>
            <ul className="blog-checklist">
              {page.faq.map((item) => (
                <li key={item.q}>
                  <CheckCircle2 /> <span><strong>{item.q}</strong><br />{item.a}</span>
                </li>
              ))}
            </ul>

            <div className="blog-cta blog-cta-final">
              <div>
                <p className="section-label">CONTACT GROWCEAN</p>
                <h2>Send Your Market Requirement</h2>
                <p>
                  Share your target country, product type, quantity, application, wattage, CCT, voltage and packaging
                  needs. Growcean can help shortlist catalog-backed ceiling lighting options for B2B sourcing.
                </p>
              </div>
              <a className="button" href="/#inquiry">
                {page.cta} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
