const whatsappUrl =
  "https://wa.me/8615602224748?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Growcean on WhatsApp"
      title="Chat with Growcean on WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        role="img"
      >
        <path
          fill="currentColor"
          d="M16.02 3.2A12.75 12.75 0 0 0 5.1 22.54L3.2 29.5l7.12-1.87a12.77 12.77 0 1 0 5.7-24.43Zm0 23.38a10.6 10.6 0 0 1-5.4-1.48l-.38-.23-4.23 1.11 1.13-4.12-.25-.42a10.63 10.63 0 1 1 9.13 5.14Zm5.82-7.96c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.55 9.55 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.66.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span className="sr-only">Open WhatsApp conversation</span>
    </a>
  );
}
