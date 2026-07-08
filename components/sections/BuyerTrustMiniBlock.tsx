import { Camera, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";

const items = [
  "MOQ starts from 50 pcs",
  "Sample discussion available",
  "Product photos before shipment",
  "Export packaging support",
  "WhatsApp communication",
];

export function BuyerTrustMiniBlock() {
  const icons = [ShieldCheck, PackageCheck, Camera, PackageCheck, MessageCircle] as const;

  return (
    <div className="buyer-trust-mini">
      {items.map((item, index) => {
        const Icon = icons[index];
        return (
          <span key={item}>
            <Icon aria-hidden="true" />
            {item}
          </span>
        );
      })}
    </div>
  );
}
