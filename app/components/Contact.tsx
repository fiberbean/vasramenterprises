import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "95022 59293",
      href: "tel:9502259293",
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@vasramenterprises.in",
      href: "mailto:support@vasramenterprises.in",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Bhanugudi Junction, Kakinada",
      href: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9 AM - 8 PM",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Ready to secure your space? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#00E5FF]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{info.title}</h3>
                    <p className="text-gray-400 text-sm break-all">{info.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white focus:border-[#00E5FF] focus:outline-none transition-colors">
                  <option>CCTV Surveillance</option>
                  <option>Biometric Access</option>
                  <option>Alarm Systems</option>
                  <option>Fire Alarm Systems</option>
                  <option>Home Automation</option>
                  <option>Sensors & IoT</option>
                  <option>Networking & IT</option>
                  <option>AMC & Maintenance</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirement"
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00E5FF] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}