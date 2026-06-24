const Footer = () => {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-16">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting beautiful and functional web experiences with modern technologies and AI innovation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition font-medium">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition font-medium">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition font-medium">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition font-medium">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Social</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition font-medium">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="mailto:112301034@smail.iitpkd.ac.in" className="hover:text-blue-400 transition font-medium">Email</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">LinkedIn</a></li>
              <li><p className="font-medium">Nellore, India</p></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2024 Uppalapati Sai Hanuma Vignesh. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Built with <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-cyan-400 font-semibold">React</span> & <span className="text-blue-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
