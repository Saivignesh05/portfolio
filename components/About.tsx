const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20 bg-slate-800/30 w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center md:justify-items-auto">
          <div className="space-y-6 text-slate-300 leading-relaxed w-full">
            <p className="text-lg">
              I'm an aspiring Software Engineer and AI enthusiast currently pursuing B.Tech in Computer Science and Engineering 
              at IIT Palakkad. With a strong foundation in full-stack development and machine learning, I'm passionate about 
              building scalable applications and solving complex problems.
            </p>
            <p className="text-lg">
              My expertise spans across modern web technologies like React, Node.js, and MERN stack, combined with machine learning 
              techniques in Python. I've worked on diverse projects ranging from hospital resource management systems to AI-based 
              audio fluency evaluation during my Infosys internship.
            </p>
            <p className="text-lg">
              I've solved 380+ LeetCode problems and secured AIR 2905 in JEE Main and AIR 4526 in JEE Advanced. I actively 
              contribute to the coding community and take leadership roles in my institute.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
              <h3 className="text-blue-300 font-bold text-lg mb-2">🎓 Education</h3>
              <p className="text-slate-200 font-semibold mb-1">B.Tech CSE, IIT Palakkad</p>
              <p className="text-slate-400 mb-4">CGPA: 8.58 (2023-Present)</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
              <h3 className="text-cyan-300 font-bold text-lg mb-2">📍 Location</h3>
              <p className="text-slate-200 font-semibold">Nellore, Andhra Pradesh</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-slate-600/10 p-8 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-blue-300 font-bold text-lg mb-4">🏆 Key Achievements</h3>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  JEE Advanced AIR 4526
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  380+ LeetCode Problems
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Infosys Advanced AI Intern
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
