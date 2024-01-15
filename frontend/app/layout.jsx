import "./globals.css";

export const metadata = { title: "Escrow App" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="#"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
