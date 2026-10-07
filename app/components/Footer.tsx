import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "CCTV Surveillance",
    "Biometric Access",
    "Alarm Systems",
    "Fire Alarm Systems",
    "Home Automation",
    "Sensors & IoT",
    "Networking & IT",
    "AMC & Maintenance",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-4 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#3B82F6] flex items-center justify-center font-bold text-black text-lg">
                V
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  VASRAM
                </div>
                <div className="text-[#00E5FF] text-xs tracking-widest">
                  ENTERPRISES
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your Complete IT Security Partner. 15+ years of trusted security
              solutions in Kakinada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9502259293"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] transition-colors text-sm"
                >
                  <Phone size={16} className="text-[#00E5FF] flex-shrink-0" />
                  95022 59293
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@vasramenterprises.in"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] transition-colors text-sm break-all"
                >
                  <Mail size={16} className="text-[#00E5FF] flex-shrink-0" />
                  support@vasramenterprises.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#00E5FF] flex-shrink-0 mt-1" />
                Bhanugudi Junction, Kakinada
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VASRAM ENTERPRISES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}