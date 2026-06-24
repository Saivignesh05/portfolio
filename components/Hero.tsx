const Hero = () => {
  return (
    <section className="py-32 md:py-40 w-full">
      <div className="w-full text-center">
        <div className="mb-8">
          <p className="text-blue-400 font-semibold text-lg mb-4">Welcome to my portfolio</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sai Hanuma Vignesh
            </span>
          </h1>
        </div>
        
        <div className="mb-10">
          <p className="text-2xl md:text-3xl text-slate-200 font-semibold mb-4">
            Full Stack Developer | AI Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            B.Tech Computer Science Student at IIT Palakkad | Building scalable MERN applications | 
            Passionate about Machine Learning and solving real-world problems with code
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:scale-105 text-lg"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 text-lg"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <p className="text-slate-400 mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Next.js', 'Express', 'Machine Learning'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-blue-400/50 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
