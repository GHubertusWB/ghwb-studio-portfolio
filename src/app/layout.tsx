import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
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
