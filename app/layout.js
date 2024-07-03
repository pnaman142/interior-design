import { Sen } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
//Theme Provider
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Template from "./template";

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppresshydrationwarnings="true">
      <body className={Josef.className}>
        <Template>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Template>
      </body>
    </html>
  );
}
