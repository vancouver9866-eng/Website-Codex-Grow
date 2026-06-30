import { BadgeCheck, Boxes, MessageCircle, PackageCheck, ShieldCheck, Wrench } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "2-Year Warranty Options" },
  { icon: BadgeCheck, label: "Flicker-Free Driver Options" },
  { icon: Boxes, label: "Export Packaging" },
  { icon: PackageCheck, label: "Pre-Shipment Inspection" },
  { icon: Wrench, label: "OEM / ODM Support" },
  { icon: MessageCircle, label: "WhatsApp Fast Response" },
];

export function TrustBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "trust-badges compact" : "trust-badges"}>
      {badges.map(({ icon: Icon, label }) => (
        <div className="trust-badge" key={label}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
