import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";
// import Navbar from "@/components/Navbar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "@/components/topBar/TopBar";

import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

const tec = localfont({
  src: [
    {
      path: "../../../public/fonts/ITCAvantGardeStd-Md.ttf",
      weight: "500",
    },
  ],
  variable: "--font-tec",
});

export const metadata = {
  title: "Arozeen",
  description:
    "Arozeen E-Commerce Store, so now you can buy everything from here.",
};

export default function RootLayout({ children }) {
  const cookie = cookies();
  const token = cookie.get("token");
  return (
    <html lang="en" className={`${tec.variable} h-full `}>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ToastContainer />

        {token ? "" : <TopBar />}
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
