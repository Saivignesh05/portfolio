const Projects = () => {
  const projects = [
    {
      title: 'Hospital Emergency Resource Sharing System',
      description: 'MERN stack application enabling hospitals to request and share emergency resources using radius-based discovery. Implements real-time communication and resource management.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      icon: '🏥',
      link: '#',
    },
    {
      title: 'MERN Authentication System',
      description: 'Secure user authentication and profile management system with JWT tokens and bcrypt password hashing. Features include registration, login, and profile management.',
      tags: ['MERN', 'JWT', 'bcrypt', 'Authentication'],
      icon: '🔐',
      link: '#',
    },
    {
      title: 'RISC-V Processor Simulation',
      description: 'Implemented a simulated RISC-V processor with instruction execution, pipelining, and forwarding mechanisms. Deep dive into computer architecture and ISA.',
      tags: ['Python', 'RISC-V', 'Architecture', 'Simulation'],
      icon: '⚡',
      link: '#',
    },
    {
      title: 'Customer Churn Analysis and Prediction',
      description: 'Machine learning project analyzing customer churn patterns and building predictive models. Includes data analysis, feature engineering, and model evaluation.',
      tags: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas'],
      icon: '📊',
      link: '#',
    },
    {
      title: 'Memory Game',
      description: 'Interactive 4x4 grid memory game built with Python and Pygame. Features tile matching mechanics, attempt tracking, and game statistics.',
      tags: ['Python', 'NumPy', 'Pygame', 'Game Development'],
      icon: '🎮',
      link: '#',
    },
    {
      title: 'API Image Fetcher',
      description: 'Web application that fetches and displays images from a public API based on user search input. Clean UI with responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
      icon: '🖼️',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 scroll-mt-20 w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, idx) => (
            <a
              key={idx}
              className="w-full"
              href={project.link}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-400 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition transform">{project.icon}</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition line-clamp-2">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
