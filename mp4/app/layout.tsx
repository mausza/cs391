import Header from "@/components/Header"
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
