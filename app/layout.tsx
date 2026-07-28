import type { Metadata, Viewport } from "next";

import "../styles/reset.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/animations.css";
import "../styles/owl.carousel.css";
import "../styles/magnific-popup.css";
import "../styles/main.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeeshan Tariq - Full Stack Developer",
  description: "Zeeshan Tariq - Full Stack Developer",
  keywords:
    "full stack developer, web developer, frontend developer, react developer, angular developer, nextjs developer, react native developer, portfolio",
  authors: [{ name: "Zeeshan Tariq" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
