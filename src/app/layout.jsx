import { B612 } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";

const font = B612({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
  author: "Seereen Yangpaknam",
  keywords: ["portfolio", "web development", "projects", "skills"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="secondary-color flex-grow flex items-center justify-center">
            <div className="max-w-full max-h-full mt-20">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
