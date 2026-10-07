import { Home, Store, Building2, Factory, Heart, GraduationCap, Landmark, Shield } from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: Home, title: "Residential", desc: "Homes, Apartments, Villas" },
    { icon: Store, title: "Small Shops", desc: "Retail Stores, Showrooms" },
    { icon: Building2, title: "Commercial", desc: "Offices, Malls, Complexes" },
    { icon: Factory, title: "Industrial", desc: "Factories, Warehouses" },
    { icon: Heart, title: "Healthcare", desc: "Hospitals, Clinics" },
    { icon: GraduationCap, title: "Education", desc: "Schools, Colleges" },
    { icon: Landmark, title: "Banking", desc: "Banks, ATMs" },
    { icon: Shield, title: "Government", desc: "Govt Offices, Institutions" },
  ];

  return (
    <section id="industries" className="py-24 px-4 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Who We Serve</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From small shops to large industries — we secure them all.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[#00E5FF]/20 to-[#3B82F6]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#00E5FF]" size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">{industry.title}</h3>
                <p className="text-gray-500 text-xs">{industry.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}