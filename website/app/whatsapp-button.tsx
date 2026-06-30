"use client";

declare function gtag(...args: unknown[]): void;

export function WhatsAppButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        typeof gtag !== "undefined" &&
        gtag("event", "conversion", {
          send_to: "AW-18234770301/_6juCLmc1cIcEP2GgvdD",
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}
