const Experience = () => {
  const experiences = [
    {
      role: 'Infosys Advanced AI Internship',
      company: 'Infosys',
      period: '2024',
      icon: '🚀',
      description: 'Developed audio fluency evaluation system using Python, Librosa, and OpenSmile. Implemented machine learning techniques for real-time audio analysis and fluency assessment.',
    },
    {
      role: 'Deputy Chess Secretary',
      company: 'IIT Palakkad',
      period: '2025-26',
      icon: '♟️',
      description: 'Leading chess club activities and organizing tournaments. Managing events and fostering a competitive chess culture within the institute.',
    },
    {
      role: 'Design Team Member',
      company: 'IAC 6.0, IIT Palakkad',
      period: '2024-25',
      icon: '🔧',
      description: 'Contributing to robotics and automation projects. Involved in design and development of innovative solutions for technical competitions.',
    },
  ];

  return (
    <section id="experience" className="py-24 scroll-mt-20 bg-slate-800/30 w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative group w-full"
            >
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition">
                          {exp.role}
                        </h3>
                        <p className="text-slate-400 text-lg">
                          {exp.company} • <span className="text-blue-400 font-semibold">{exp.period}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
              {idx !== experiences.length - 1 && (
                <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
