import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Tilt_Warp, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import SideBar from "@/components/custom/sidebar";

const tiltWrap = Tilt_Warp({
  subsets: ["latin"],
  variable: "--font-tilt-warp-sans",
  weight: ["400"],
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist-sans",
  weight: ["200", "400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Elie Malthus",
    default: "Elie Malthus",
  },
  description: "le portfolio officiel pour developpeur junior javascript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tiltWrap.className} ${urbanist.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen md:overflow-hidden grid grid-cols-8">
            <div className="col-span-7 md:overflow-y-auto ">
              {children}
            </div>
            <div className="">
              <SideBar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
