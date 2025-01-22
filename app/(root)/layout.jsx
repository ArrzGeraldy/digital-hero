import AosWrapper from "@/components/AosWrapper";
import FooterV2 from "@/components/FooterV2";
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
        <FooterV2 />
      </AosWrapper>
    </main>
  );
}
