import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_SLOGAN, APP_DESCRIPTION } from "@/lib/constants";

 export const metadata: Metadata = {
   title: {
     template: `%s | ${APP_NAME}`,
     default: `${APP_NAME}. ${APP_SLOGAN}`,
   },
   description: APP_DESCRIPTION,
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
  
}
