import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./store/Provider";




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full `}>
      <body className={cn("relative h-full font-sans antialiased")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
