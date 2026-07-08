export const growceanEmail = "mike@growcean.com";
export const growceanWhatsAppDisplay = "+86 13533372025";
export const growceanWhatsAppDigits = "8613533372025";

export const defaultWhatsAppMessage =
  "Hello Growcean Lighting, I am interested in your lighting products. My target market is [country]. Please recommend suitable models.";

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${growceanWhatsAppDigits}?text=${encodeURIComponent(message)}`;
}
