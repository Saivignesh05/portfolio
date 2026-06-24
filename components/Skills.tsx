const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'Assembly'],
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB','Next.js','tailwind CSS'    ],
    },
    {
      category: 'AI & Data Science',
      icon: '🤖',
      skills: ['Machine Learning', 'NumPy', 'Pandas', 'Matplotlib', 'Librosa', 'OpenSmile'],
    },
    {
      category: 'Developer Tools',
      icon: '⚙️',
      skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'JWT', 'bcrypt'],
    },
    {
      category: 'Core Competencies',
      icon: '🎯',
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'RISC-V ISA', 'Full-Stack Development'],
    },
  ];

  return (
    <section id="skills" className="py-24 scroll-mt-20 w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 w-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/60 transition duration-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
