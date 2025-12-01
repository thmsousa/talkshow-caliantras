// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header"; 
import Footer from "./components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CALIANTRAS TALK SHOW | Vídeos, conteúdos, obras, livros e muito mais materiais",
  description: "Conteúdo exclusivo e análises aprofundadas com os maiores nomes do país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="container" style={{ paddingTop: '20px', paddingBottom: '50px' }}>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}