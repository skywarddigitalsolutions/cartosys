import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Carto Sys - Cartografía",
  description: "Diseño y Gestión de Moda",
  icons: {
    icon: "/fotoprueba.webp",
    shortcut: "/fotoprueba.webp",
    apple: "/fotoprueba.webp",
  },
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <link rel="canonical" href="https://sds.com.ar" />
            <link rel="icon" href="/fotoprueba.webp" />
          </head>
            <body className={inter.className}>{children}</body>
    </html>
  );
}