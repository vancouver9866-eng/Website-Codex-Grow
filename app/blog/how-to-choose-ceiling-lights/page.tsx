import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose Ceiling Lights | Growcean Buyer Guide",
  description: "A practical B2B guide to choosing LED ceiling lights by wattage, room size, CRI, RG0 low blue light, control method and supplier support.",
  alternates: { canonical: "/blog/how-to-choose-ceiling-lights" },
};

export default function BlogPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">BUYER GUIDE</p>
          <h1>How to choose ceiling lights for B2B sourcing</h1>
          <p className="catalog-lead">Start with room size, wattage, CRI, RG0 blue-light positioning, driver quality, control method and supplier reliability. For private-label programs, confirm voltage, packaging, warranty and sample terms before mass production.</p>
        </div>
      </section>
    </main>
  );
}
