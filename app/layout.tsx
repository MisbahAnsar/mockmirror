import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MockMirror - Instant API Mocking",
  description: "Create mock API endpoints instantly for development and testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}


