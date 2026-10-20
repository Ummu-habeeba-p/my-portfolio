import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "../components/Navbar";
export const metadata: Metadata = {
  title: "Ummu Habeeba | Junior Full Stack Developer",
  description:
    "Portfolio of Ummu Habeeba, a Junior Full Stack Developer specializing in React, Next.js, TypeScript, Python and Django.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navbar />
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
