"use client";

import Image from "next/image";
import { ArrowRight, Check, Download, FileText } from "lucide-react";
import { useState } from "react";

const gallery = [
  { src: "/images/product-ultra-thin/application.jpg", alt: "Ultra-thin ceiling light installed in a modern room" },
  { src: "/images/product-ultra-thin/rectangular.jpg", alt: "Rectangular ultra-thin ceiling light" },
  { src: "/images/product-ultra-thin/square.jpg", alt: "Square ultra-thin ceiling light" },
  { src: "/images/product-ultra-thin/round.jpg", alt: "Round ultra-thin ceiling light" },
];

const sizes = ["110 × 60cm", "90 × 50cm", "60 × 60cm", "50 × 50cm", "Round Ø50cm"];

export function ProductConfigurator() {
  const [image, setImage] = useState(0);
  const [size, setSize] = useState(sizes[0]);
  const [finish, setFinish] = useState("White");
  const [control, setControl] = useState("Standard");

  return (
    <div className="pd-hero-grid">
      <div className="pd-gallery">
        <div className="pd-main-image">
          <Image src={gallery[image].src} alt={gallery[image].alt} fill priority sizes="(max-width: 900px) 100vw, 56vw" />
        </div>
        <div className="pd-thumbnails" aria-label="Product gallery">
          {gallery.map((item, index) => (
            <button className={image === index ? "active" : ""} key={item.src} onClick={() => setImage(index)}>
              <Image src={item.src} alt={`${item.alt} thumbnail`} fill sizes="100px" />
            </button>
          ))}
        </div>
      </div>

      <div className="pd-summary">
        <p className="pd-model">MODEL QS-XDD-2.7XB-GLQD-090</p>
        <h1>2.7cm Ultra-Thin LED Ceiling Light</h1>
        <p className="pd-intro">A slim, high-color-rendering ceiling light available in multiple shapes and sizes for residential, distribution and private-label programs.</p>
        <div className="pd-facts">
          {["Ra ≥ 98.5", "RG0 Low Blue Light", "2.7cm Profile", "Isolated Driver"].map((fact) => <span key={fact}><Check size={14} />{fact}</span>)}
        </div>
        <OptionGroup label="Size" options={sizes} value={size} onChange={setSize} />
        <OptionGroup label="Finish" options={["White", "Custom finish"]} value={finish} onChange={setFinish} />
        <OptionGroup label="Control" options={["Standard", "3-color", "Custom"]} value={control} onChange={setControl} />
        <div className="pd-selection">
          <span>Selected configuration</span>
          <strong>{size} · {finish} · {control}</strong>
        </div>
        <a className="button pd-primary-cta" href="#product-inquiry">Request Pricing & MOQ <ArrowRight size={18} /></a>
        <a className="pd-download" href="/Growcean-Product-Catalog.pdf" download><Download size={17} /> Download Product Catalog</a>
        <p className="pd-note"><FileText size={15} /> Specifications and export options are confirmed by model and destination market.</p>
      </div>
    </div>
  );
}

function OptionGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <fieldset className="pd-options">
      <legend>{label}</legend>
      <div>{options.map((option) => <button type="button" className={value === option ? "active" : ""} key={option} onClick={() => onChange(option)}>{option}</button>)}</div>
    </fieldset>
  );
}
