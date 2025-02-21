import type { Metadata } from "next";
import { Shadows_Into_Light_Two, Ubuntu } from "next/font/google";
import "./globals.css";

const primaryFont = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const secondaryFont = Shadows_Into_Light_Two({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SketchFlow - Let Your Imagination & Creativity Unleash Its Flow",
  description:
    "SketchFlow is a web-based drawing application. Create, share and collaborate on diagrams, flowcharts, mind maps, and more. It is similar to Excalidraw, but with more features and a better user experience. Give it a try and unleash your creativity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} bg-[#f4ecff]  `}>
        {children}
      </body>
    </html>
  );
}
