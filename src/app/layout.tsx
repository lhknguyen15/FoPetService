import type { Metadata } from "next";
import { Nunito_Sans, Varela_Round } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const varela = Varela_Round({
  variable: "--font-varela",
  subsets: ["latin", "vietnamese"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FoPet Service | Chăm bé bằng cả sự dịu dàng",
  description:
    "Tắm gội, spa, tỉa lông và chăm sóc thú cưng ban ngày tại FoPet Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${nunito.variable} ${varela.variable}`}>
      <body>{children}</body>
    </html>
  );
}
