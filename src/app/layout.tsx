import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/AppLayout/Header";
import Footer from "@/components/AppLayout/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Procedure',
    default: 'Home | Procedure', // a default is required when creating a template
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
      </body>
    </html>
  );
}
