import { Libre_Baskerville } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";

const libre_Baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
  icons: {
    icon: "/logo.svg",
  },
  author: "Seereen Yangpaknam",
  keywords: ["portfolio", "web development", "projects", "skills"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libre_Baskerville.className}>
      <body>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="secondary-color flex-grow flex items-center justify-center">
            <div className="max-w-full max-h-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
