import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-js-seven-kappa.vercel.app/"),

  title: "Divyam Sirswal",
  authors: {
    name: "Divyam Sirswal",
  },

  description:
    "Based in India, I'm a Fullstack developer passionate about building a modern web application that users love and me tooo..",
  openGraph: {
    title: "Divyam Sirswal",
    description:
      "Based in India, I'm a Fullstack developer passionate about building a modern web application that users love and me tooo..",
    url: "https://portfolio-js-seven-kappa.vercel.app/",
    siteName: "Divyam Sirswal",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "divyam sirswal portfolio",
    "Divyam Sirswal",
    "Divyam Sirswal site",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
