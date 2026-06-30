import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { blogBriefPages, getBlogBriefPage } from "@/lib/blog-brief-pages";

const siteUrl = "https://growcean.com";

export function generateStaticParams() {
  return blogBriefPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getBlogBriefPage(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: page.url,
      languages: {
        en: page.url,
        es: `/es${page.url}`,
        fr: `/fr${page.url}`,
        ar: `/ar${page.url}`,
        ru: `/ru${page.url}`,
        "x-default": page.url,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${page.url}`,
      images: [page.image],
    },
  };
}

function JsonLd({ page }: { page: NonNullable<ReturnType<typeof getBlogBriefPage>> }) {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    image: [`${siteUrl}${page.image}`],
    author: { "@type": "Organization", name: "Growcean Lighting" },
    publisher: {
      "@type": "Organization",
      name: "Growcean Lighting",
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/growcean-logo.png` },
    },
    mainEntityOfPage: `${siteUrl}${page.url}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((question) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prepare product type, target market, quantity, wattage, CCT, application and packaging requirements so Growcean can recommend practical catalog options and quotation details.",
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default async function BlogBriefPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getBlogBriefPage(slug);
  if (!page) notFound();

  return (
    <main className="catalog-page">
      <JsonLd page={page} />
      <section className="catalog-hero blog-hero">
        <div className="container">
          <p className="catalog-eyebrow">{page.contentType.toUpperCase()} GUIDE</p>
          <h1>{page.title}</h1>
          <p className="catalog-lead">{page.intro}</p>
          <div className="catalog-actions">
            <a className="button" href="/#inquiry"><MessageCircle size={18} /> Send Your Requirements</a>
            {page.internalLinks.map((link) => (
              <a className="button button-outline-dark" href={link} key={link}>View Related Products <ArrowRight size={18} /></a>
            ))}
          </div>
        </div>
      </section>

      <article className="section blog-article">
        <div className="container blog-layout">
          <aside className="blog-toc" aria-label="Article contents">
            <strong>In this guide</strong>
            {page.sections.map((section) => (
              <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={section.heading}>{section.heading}</a>
            ))}
            <a href="#faq">FAQ</a>
          </aside>

          <div className="blog-content">
            <figure className="blog-image-wide">
              <Image src={page.image} alt={page.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 760px" />
            </figure>
            <p className="blog-caption">Growcean lighting selection reference for B2B buyers.</p>

            {page.sections.map((section, index) => (
              <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {index === 1 ? (
                  <div className="blog-cta">
                    <div>
                      <p className="section-label">BUYER SUPPORT</p>
                      <h2>Need a Practical Growcean Recommendation?</h2>
                      <p>Send your product type, target market, quantity, wattage, CCT and packaging needs. Growcean will help shortlist catalog options for quotation.</p>
                    </div>
                    <a className="button" href="/#inquiry">{page.cta} <ArrowRight size={18} /></a>
                  </div>
                ) : null}
              </section>
            ))}

            <h2 id="faq">FAQ</h2>
            <ul className="blog-checklist">
              {page.faq.map((question) => (
                <li key={question}><CheckCircle2 /> {question}</li>
              ))}
            </ul>

            <div className="blog-cta blog-cta-final">
              <div>
                <p className="section-label">START A SOURCING CONVERSATION</p>
                <h2>Send Growcean Your Lighting Requirements</h2>
                <p>Share application, quantity, target country, wattage, CCT, style and packaging requirements so the team can reply with suitable model suggestions.</p>
              </div>
              <a className="button" href="/#inquiry">{page.cta} <ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
