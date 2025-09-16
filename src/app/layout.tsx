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
          <NavigationLoader />
          <CursorFollower />
          <StarField />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
