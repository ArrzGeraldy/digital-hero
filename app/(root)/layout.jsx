import AosWrapper from "@/components/AosWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Stars from "@/components/Stars";

export default function RootLayout({ children }) {
  return (
    <main>
      <AosWrapper>
        <Stars />
        <div className="flex-grow flex flex-col">
          <Navbar />
          {children}
        </div>
        <Footer />
      </AosWrapper>
    </main>
  );
}
