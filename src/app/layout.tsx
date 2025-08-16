import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VOX CREATIVE - Agência de Marketing Digital e Design",
    template: "%s | VOX CREATIVE"
  },
  description: "VOX CREATIVE - Agência de marketing digital especializada em jovens empreendedores. Equipe global com Larissa Soares, Laís Reis e mais. Design minimalista e estratégias eficazes.",
  keywords: [
    "vox creative",
    "agência de marketing digital",
    "jovens empreendedores",
    "design minimalista",
    "marketing digital",
    "identidade visual",
    "larissa soares",
    "laís reis",
    "thatiane",
    "eduarda",
    "head comercial",
    "design strategist",
    "web3",
    "inteligência artificial",
    "branding",
    "portfólio"
  ],
  authors: [{ name: "VOX CREATIVE", url: "https://www.landiva.com.br/" }],
  creator: "VOX CREATIVE",
  publisher: "VOX CREATIVE",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.landiva.com.br/",
    siteName: "VOX CREATIVE",
    title: "VOX CREATIVE - Agência de Marketing Digital e Design",
    description: "Agência de marketing digital especializada em jovens empreendedores. Equipe global com visão estratégica e design minimalista.",
    images: [
      {
        url: "/og-image-vox.jpg",
        width: 1200,
        height: 630,
        alt: "VOX CREATIVE - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOX CREATIVE - Agência de Marketing Digital e Design",
    description: "Design minimalista e estratégias eficazes para jovens empreendedores.",
    images: ["/og-image-vox.jpg"],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#918590" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
