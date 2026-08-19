import type { Metadata, Viewport } from "next";

import "../styles/reset.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/animations.css";
import "../styles/owl.carousel.css";
import "../styles/magnific-popup.css";
import "../styles/main.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZISHTECH - Software Studio",
  description:
    "ZISHTECH is a software studio that designs and ships web apps, mobile apps, ecommerce, and third-party integrations.",
  keywords:
    "zishtech, software studio, web development, mobile apps, ecommerce, react, nextjs, react native, angular, nodejs, api integrations",
  authors: [{ name: "ZISHTECH" }],
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
