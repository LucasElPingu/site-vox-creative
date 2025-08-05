import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vox Creative - Agência de Marketing Digital e Design",
    template: "%s | Vox Creative"
  },
  description: "Agência nacional de marketing digital com sede em 4 cidades. Social Media, Design Estratégico, Tráfego Pago e Impressos Gráficos. Sua marca com identidade, estratégia e resultado real.",
  keywords: [
    "agência de marketing digital",
    "social media",
    "design estratégico", 
    "tráfego pago",
    "impressos gráficos",
    "identidade visual",
    "marketing digital"
  ],
  authors: [{ name: "Vox Creative" }],
  creator: "Vox Creative",
  publisher: "Vox Creative",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://voxcreative.com.br",
    siteName: "Vox Creative",
    title: "Vox Creative - Agência de Marketing Digital e Design",
    description: "Sua marca com identidade, estratégia e resultado real. Agência nacional com atendimento especializado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vox Creative - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vox Creative - Agência de Marketing Digital e Design",
    description: "Sua marca com identidade, estratégia e resultado real.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6B46C1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
