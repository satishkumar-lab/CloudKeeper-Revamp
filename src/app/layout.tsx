import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Roboto_Condensed } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/config/site";

import "./globals.css";

const metropolis = localFont({
  src: [
    {
      path: "../../public/fonts/metropolis/Metropolis-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#161b22" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${metropolis.variable} ${geistMono.variable} ${robotoCondensed.variable}`}
    >
      <head>
        {/* Disable browser scroll restore before paint so refresh always starts at top */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration'in history)history.scrollRestoration='manual';window.scrollTo(0,0)}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
