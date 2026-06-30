import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { getSolutionPage, solutionPages } from "@/lib/solution-pages";

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/solutions/${slug}`,
      languages: {
        en: `/solutions/${slug}`,
        es: `/es/solutions/${slug}`,
        fr: `/fr/solutions/${slug}`,
        ar: `/ar/solutions/${slug}`,
        ru: `/ru/solutions/${slug}`,
        "x-default": `/solutions/${slug}`,
      },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: [page.image],
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();

  const whatsappText = encodeURIComponent(`Hello Growcean, I want to discuss ${page.title}.`);

  return (
    <main className="factory-page">
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="catalog-lead">{page.lead}</p>
            <div className="catalog-category-pills">
              <span>{page.primaryKeyword}</span>
              {page.relatedKeywords.slice(0, 2).map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
            <div className="catalog-actions">
              <a className="button" href="#solution-inquiry">Request project quote <ArrowRight size={18} /></a>
              <a className="button button-outline-dark" href={`https://wa.me/8615602224748?text=${whatsappText}`}><MessageCircle size={18} />WhatsApp inquiry</a>
            </div>
          </div>
          <div className="product-detail-image">
            <Image src={page.image} alt={`${page.title} by Growcean`} fill sizes="(max-width: 900px) 92vw, 42vw" priority />
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">BUYER NEEDS</p>
            <h2>Start from the project, not a random catalog list</h2>
            <ul className="category-check-list">
              {page.buyerNeeds.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="section-label">PRODUCT MIX</p>
            <div className="catalog-feature-grid one-col">
              {page.productMix.map((item) => (
                <div className="catalog-feature" key={item}><CheckCircle2 /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-feature-band">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">PROJECT WORKFLOW</p><h2>How Growcean turns requirements into a quote</h2></div>
            <p>Use this structure when sending drawings, room lists, sample requirements or wholesale range plans.</p>
          </div>
          <div className="catalog-home-products">
            {page.process.map((step, index) => (
              <div key={step}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">FAQ</p>
            <div className="catalog-faq-list">
              {page.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </div>
          </div>
          <div id="solution-inquiry">
            <p className="section-label">PROJECT INQUIRY</p>
            <h2>Send your lighting requirement</h2>
            <p className="catalog-body-copy">Share project type, quantity, target style, wattage, CCT, packaging needs and destination market. Growcean will reply with suitable model suggestions and quotation options.</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
