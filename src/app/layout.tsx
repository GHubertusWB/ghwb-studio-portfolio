import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";
import CursorFollower from "@/components/CursorFollower";
import NavigationLoader from "@/components/NavigationLoader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GHWB Studio - Gerd-Hubertus Weidenbrücher-Britze",
  description: "Kreative Lösungen für UX/UI Design, Fotografie und Kunst. Von digitalen Erlebnissen über authentische Porträts bis hin zu innovativen AR-Kunstwerken.",
  keywords: ["UX/UI Design", "Fotografie", "Kunst", "Portfolio", "Kreativ", "AR", "Gerd-Hubertus Weidenbrücher-Britze"],
  authors: [{ name: "Gerd-Hubertus Weidenbrücher-Britze" }],
  creator: "Gerd-Hubertus Weidenbrücher-Britze",
  icons: {
    icon: '/icons/logo/logo.svg',
    shortcut: '/icons/logo/logo.svg',
    apple: '/icons/logo/logo.svg',
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ghwb.studio",
    title: "GHWB Studio - Gerd-Hubertus Weidenbrücher-Britze",
    description: "Kreative Lösungen für UX/UI Design, Fotografie und Kunst. Von digitalen Erlebnissen über authentische Porträts bis hin zu innovativen AR-Kunstwerken.",
    siteName: "GHWB Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHWB Studio - Gerd-Hubertus Weidenbrücher-Britze",
    description: "Kreative Lösungen für UX/UI Design, Fotografie und Kunst. Von digitalen Erlebnissen über authentische Porträts bis hin zu innovativen AR-Kunstwerken.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className="transition-colors duration-300">
      <body
        className={`${poppins.variable} ${atkinsonHyperlegible.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* WCAG 2.4.1: Skip to main content */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:font-semibold focus:rounded focus:shadow-lg focus:outline-2 focus:outline-blue-600"
          >
            Zum Hauptinhalt springen
          </a>
          <NavigationLoader />
          {/* Dekorative Elemente für Screenreader ausblenden */}
          <div aria-hidden="true">
            <CursorFollower />
            <StarField />
          </div>
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
