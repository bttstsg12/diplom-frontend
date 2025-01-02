import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "@/context/authContext";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Mongol Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>MongolArt</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jaini&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>

      <body style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', fontFamily: '"Open Sans", sans-serif' }}>
        <AuthProvider>
          <div style={{ width: '1366px' }}>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
