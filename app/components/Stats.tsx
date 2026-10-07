export default function Stats() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Installations" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section className="py-16 px-4 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}