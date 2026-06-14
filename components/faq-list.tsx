"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const faqs = [
  ["What types of ceiling lights do you supply?", "Our current range includes LED, flush mount, ultra-thin, smart-control, dimmable, decorative, iron-art and wood-finish ceiling lights."],
  ["Can I customize the product and packaging?", "Customization may include size, wattage, CCT, control method, finish, logo, labels, manuals and packaging. Availability is confirmed by model."],
  ["What is the minimum order quantity?", "MOQ depends on the selected model and customization scope. Share the product and expected quantity for a specific quotation."],
  ["Can I order samples first?", "Sample support is available for product evaluation. Sample cost, preparation time and shipping are confirmed before the order."],
  ["What is the production lead time?", "Lead time varies by model, quantity and customization. We confirm a realistic schedule after all specifications are approved."],
  ["Do you support export shipping documents?", "We coordinate packing and standard export documentation according to the confirmed trade and shipping arrangement."],
];

const localizedFaqs: Record<string, string[][]> = {
  es: [["¿Qué tipos de luces de techo suministran?","LED, plafones, ultrafinos, inteligentes, regulables, decorativos y acabados en madera."],["¿Puedo personalizar producto y embalaje?","Podemos confirmar tamaño, potencia, CCT, control, acabado, logotipo, manual y embalaje según modelo."],["¿Cuál es el pedido mínimo?","El MOQ depende del modelo y la personalización. Envíenos producto y cantidad."],["¿Puedo pedir muestras?","Sí, confirmamos coste, preparación y envío antes del pedido."],["¿Cuál es el plazo de producción?","Depende del modelo, cantidad y personalización."],["¿Apoyan con documentos de exportación?","Coordinamos embalaje y documentación estándar según el acuerdo comercial."]],
  fr: [["Quels types de plafonniers proposez-vous ?","LED, saillie, ultra-fins, intelligents, dimmables, décoratifs et finitions bois."],["Le produit et l’emballage sont-ils personnalisables ?","Dimensions, puissance, CCT, contrôle, finition, logo, notice et emballage sont confirmés selon le modèle."],["Quelle est la quantité minimale ?","Le MOQ dépend du modèle et de la personnalisation."],["Puis-je commander des échantillons ?","Oui, coût, délai et expédition sont confirmés avant commande."],["Quel est le délai de production ?","Il varie selon le modèle, la quantité et la personnalisation."],["Fournissez-vous les documents export ?","Nous coordonnons emballage et documents standard selon l’accord commercial."]],
  ar: [["ما أنواع مصابيح السقف التي توفرونها؟","LED وسطحية ونحيفة وذكية وقابلة للتعتيم وزخرفية وتشطيبات خشبية."],["هل يمكن تخصيص المنتج والتغليف؟","يمكن تأكيد المقاس والقدرة واللون والتحكم والتشطيب والشعار والدليل والتغليف حسب الموديل."],["ما الحد الأدنى للطلب؟","يعتمد على الموديل ونطاق التخصيص."],["هل يمكن طلب عينات؟","نعم، نؤكد التكلفة والمدة والشحن قبل الطلب."],["ما مدة الإنتاج؟","تختلف حسب الموديل والكمية والتخصيص."],["هل تدعمون مستندات التصدير؟","ننسق التغليف ومستندات التصدير القياسية حسب الاتفاق."]],
  ru: [["Какие потолочные светильники вы поставляете?","LED, накладные, ультратонкие, умные, диммируемые, декоративные и под дерево."],["Можно кастомизировать продукт и упаковку?","Размер, мощность, CCT, управление, отделка, логотип, инструкция и упаковка согласуются по модели."],["Каков минимальный заказ?","MOQ зависит от модели и объема кастомизации."],["Можно заказать образцы?","Да, заранее согласуем стоимость, срок и доставку."],["Каков срок производства?","Он зависит от модели, количества и кастомизации."],["Вы предоставляете экспортные документы?","Мы координируем упаковку и стандартные документы по условиям сделки."]],
};

export function FaqList({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(0);
  const items = localizedFaqs[locale] ?? faqs;

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div className={`faq-item ${open === index ? "open" : ""}`} key={question}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{question}</span><Plus size={20} />
          </button>
          <div className="faq-answer"><p>{answer}</p></div>
        </div>
      ))}
    </div>
  );
}
