import type { ReactNode } from "react";
import socialLinks from "@/lib/social-links.json";

type SocialPlatform = "facebook" | "instagram" | "linkedin";
type SocialLink = { platform: SocialPlatform; label: string; url: string };

const icons: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7.1 2.8h9.8a4.3 4.3 0 0 1 4.3 4.3v9.8a4.3 4.3 0 0 1-4.3 4.3H7.1a4.3 4.3 0 0 1-4.3-4.3V7.1a4.3 4.3 0 0 1 4.3-4.3Zm0 1.8a2.5 2.5 0 0 0-2.5 2.5v9.8a2.5 2.5 0 0 0 2.5 2.5h9.8a2.5 2.5 0 0 0 2.5-2.5V7.1a2.5 2.5 0 0 0-2.5-2.5H7.1Zm10.2 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M5.2 8.2H2.1V21h3.1V8.2ZM3.7 2.8A1.8 1.8 0 1 0 3.7 6.4a1.8 1.8 0 0 0 0-3.6ZM21.9 13.7c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.2-3.8 2.1V8.2h-3.1V21h3.1v-6.4c0-1.7.3-3.4 2.5-3.4 2.1 0 2.2 2 2.2 3.5V21H21v-7.3Z" />
    </svg>
  ),
};

export function SocialLinks({
  variant = "footer",
  className = "",
}: {
  variant?: "footer" | "floating";
  className?: string;
}) {
  const links = socialLinks as SocialLink[];

  return (
    <div className={`social-links social-links-${variant} ${className}`.trim()} aria-label="Growcean social media">
      {links.map((item) =>
        item.url ? (
          <a
            key={item.platform}
            className="social-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Growcean on ${item.label}`}
            title={item.label}
          >
            {icons[item.platform]}
          </a>
        ) : (
          <span
            key={item.platform}
            className="social-link social-link-disabled"
            aria-label={`${item.label} account link pending`}
            title={`${item.label} account link pending`}
          >
            {icons[item.platform]}
          </span>
        ),
      )}
    </div>
  );
}
