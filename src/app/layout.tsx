import PlausibleProvider from "next-plausible";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
      <head>
        <PlausibleProvider domain="bettertexts.io" />
      </head>
      <body>{children}</body>
    </html>
  );
}
