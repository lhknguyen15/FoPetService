import type { Metadata } from "next";
import "./globals.css";
import { FopetProviders } from "./providers";

export const metadata: Metadata = {
  title: "FoPet Service | Chăm bé bằng cả sự dịu dàng",
  description:
    "Tắm gội, spa, tỉa lông và chăm sóc thú cưng ban ngày tại FoPet Service.",
  icons: {
    icon: "/images/fopet-logo-transparent.png",
    apple: "/images/fopet-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body><FopetProviders>{children}</FopetProviders></body>
    </html>
  );
}
