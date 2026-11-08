import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isigform.vercel.app"),
  title: "Formation informatique à Goma | Académie Numérique",
  description:
    "Découvrez des formations en développement web, réseaux et intelligence artificielle à Goma.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Académie Numérique | ISIGFORM",
    description:
      "Formez-vous aux métiers du numérique à Goma.",
    url: "/",
    siteName: "Académie Numérique",
    locale: "fr_CD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}