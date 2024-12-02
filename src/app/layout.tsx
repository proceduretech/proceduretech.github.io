import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/AppLayout/Header";
import Footer from "@/components/AppLayout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Procedure",
    default: "Home | Procedure", // a default is required when creating a template
  },
  description: "Think. Build. Measure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        <main className="pt-12">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-2KW21KL401" />
      </body>
    </html>
  );
}
