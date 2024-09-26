import type { Metadata } from "next";
import "./styles/custom.css";

export const metadata: Metadata = {
  title: "Lumo Winterfest",
  description: "Lumo Winter Season Fashion Launch",
  icons: {
    icon: "/favicon.png", // Specify the path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

