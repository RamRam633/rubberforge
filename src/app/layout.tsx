import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { UserModeProvider } from "@/components/brand/UserModeProvider";
import { RunProvider } from "@/components/run/RunProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "RubberForge by VayuAI is a digital twin-style virtual rubber factory prototype for industrial digitalization. Explore the production floor, QA Lab, ISO 9001-aligned QMS model, materials, chemistry, traceability, and the digital thread, then generate factory outputs such as RFQ packages, audit reports, quality plans, and bills of process.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rubberforge.vayuai.ai"),
  title: "RubberForge by VayuAI · A virtual rubber factory",
  description: DESCRIPTION,
  applicationName: "RubberForge",
  authors: [{ name: "VayuAI", url: "https://www.vayuai.ai" }],
  keywords: [
    "virtual factory",
    "digital twin",
    "rubber manufacturing",
    "industrial digitalization",
    "QMS",
    "ISO 9001 aligned",
    "RFQ",
    "VayuAI",
  ],
  openGraph: {
    type: "website",
    siteName: "RubberForge by VayuAI",
    title: "RubberForge by VayuAI · A virtual rubber factory",
    description:
      "A digital twin-style virtual rubber factory prototype for industrial digitalization: production floor, QA Lab, ISO 9001-aligned QMS model, materials, chemistry, traceability, and factory outputs.",
    url: "https://rubberforge.vayuai.ai",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RubberForge by VayuAI",
    description:
      "A digital twin-style virtual rubber factory prototype for industrial digitalization, by VayuAI.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f7f9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <UserModeProvider>
          <RunProvider>
            <SiteNav />
            <main className="relative min-h-[calc(100dvh-3.5rem)]">{children}</main>
            <Footer />
          </RunProvider>
        </UserModeProvider>
      </body>
    </html>
  );
}
