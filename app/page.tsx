import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] grid-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16"
      >
        <div className="text-center fade-in-up max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              VASRAM ENTERPRISES
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-6">
            Your Complete IT Security Partner
          </p>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            CCTV • Biometric • Alarm • Fire Alarm • Home Automation • Sensors
            <br />
            Trusted security solutions in Kakinada for 15+ years.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00E5FF] text-black text-sm font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] hover:scale-105 transition-all min-w-[170px]"
            >
              Get Free Quote
            </a>
            <a
              href="tel:9502259293"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#00E5FF] text-[#00E5FF] text-sm font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-all min-w-[170px]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      <Industries />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}