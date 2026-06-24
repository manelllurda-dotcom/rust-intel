import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rust Intel",
  description: "Rust Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-white">
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
            <h1 className="text-2xl font-bold mb-8">
              🦀 Rust Intel
            </h1>

            <nav className="space-y-3 flex flex-col">
              <Link href="/" className="hover:text-orange-400">
                📊 Dashboard
              </Link>

              <Link href="/jugadores" className="hover:text-orange-400">
                👥 Jugadores
              </Link>

              <Link href="/clanes" className="hover:text-orange-400">
                🏷️ Clanes
              </Link>

              <Link href="/vending" className="hover:text-orange-400">
                🛒 Vending
              </Link>

              <Link href="/estadisticas" className="hover:text-orange-400">
                📈 Estadísticas
              </Link>
              <Link href="/favoritos" className="hover:text-orange-400">
               ⭐ Favoritos
              </Link>
              <Link href="/vigilados">
                🎯 Vigilados
              </Link>
              <Link href="/clanes-vigilados">
              🎯 Clanes Vigilados
              </Link>
              <Link href="/alertas" className="hover:text-orange-400">
                🔔 Alertas
              </Link>
            </nav>
          </aside>

          {/* Contenido */}
          <main className="flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}