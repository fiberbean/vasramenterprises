import { Camera, Fingerprint, Bell, Flame, Home, Radio, Network, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "CCTV Surveillance",
      desc: "HD/4K cameras with night vision, remote monitoring, DVR/NVR setup.",
    },
    {
      icon: Fingerprint,
      title: "Biometric Access",
      desc: "Fingerprint, face recognition, attendance systems, door access control.",
    },
    {
      icon: Bell,
      title: "Alarm Systems",
      desc: "Intrusion alarms, motion sensors, siren, panic buttons for total safety.",
    },
    {
      icon: Flame,
      title: "Fire Alarm Systems",
      desc: "Smoke detectors, heat sensors, sprinkler systems, emergency alerts.",
    },
    {
      icon: Home,
      title: "Home Automation",
      desc: "Smart lighting, smart locks, voice control, smart curtains for modern homes.",
    },
    {
      icon: Radio,
      title: "Sensors & IoT",
      desc: "Motion, gas leak, water leak, temperature sensors for complete monitoring.",
    },
    {
      icon: Network,
      title: "Networking & IT",
      desc: "LAN/WAN setup, WiFi solutions, server setup, cable management.",
    },
    {
      icon: Wrench,
      title: "AMC & Maintenance",
      desc: "Annual maintenance, 24/7 support, repair services, system upgrades.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete IT security solutions — from small shops to large industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#3B82F6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#00E5FF]" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}