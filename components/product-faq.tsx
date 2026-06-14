"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  ["Which sizes are available?", "The catalog lists rectangular, square and round options from Ø40cm to 110 × 60cm. Final availability is confirmed when quoting."],
  ["Can the voltage be customized?", "The catalog specifies 220V. Wide-voltage customization may be available and must be confirmed for the selected order and destination."],
  ["What control options are available?", "Standard, three-color-changing and customized control configurations may be discussed. Compatibility is confirmed by model."],
  ["Can I add my logo and packaging?", "Private-label support may include logo, labels, manuals and packaging after artwork and order requirements are approved."],
  ["Can I request a sample?", "Yes. Sample cost, specification, preparation time and shipping arrangement are confirmed before payment."],
];

export function ProductFaq() {
  const [open, setOpen] = useState(0);
  return <div className="pd-faq-list">{items.map(([q,a],i)=><div className={`pd-faq ${open===i?"open":""}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><Plus /></button><div><p>{a}</p></div></div>)}</div>;
}
