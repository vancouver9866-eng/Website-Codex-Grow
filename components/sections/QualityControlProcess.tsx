import { ClipboardCheck, Factory, FileText, Lightbulb, PackageCheck, SearchCheck } from "lucide-react";

const steps = [
  { icon: SearchCheck, title: "Product Selection", text: "Choose suitable lighting models based on buyer market, application, and budget." },
  { icon: ClipboardCheck, title: "Sample Confirmation", text: "Confirm appearance, material, color temperature, wattage, and packaging details." },
  { icon: Factory, title: "Production Follow-Up", text: "Track production status and key specifications during manufacturing." },
  { icon: Lightbulb, title: "Lighting & Appearance Check", text: "Check lighting effect, product appearance, accessories, and labeling." },
  { icon: PackageCheck, title: "Packaging Inspection", text: "Confirm packaging condition, carton marks, and order quantity." },
  { icon: FileText, title: "Export Shipment", text: "Coordinate shipment documents and logistics for international buyers." },
];

export function QualityControlProcess({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section qc-process-section compact" : "section qc-process-section"}>
      <div className="container">
        <div className="section-heading centered narrow">
          <p className="section-label">QUALITY CONTROL PROCESS</p>
          <h2>Structured steps for export lighting orders</h2>
          <p>Growcean-supervised quality communication helps buyers confirm key details before shipment.</p>
        </div>
        <div className="qc-process-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div className="qc-process-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
