import "./globals.css";

export const metadata = {
  title: "Professional Law",
  description: "Professional Law - Making Compliances Easy for Startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
