import { Github, Linkedin, Mail} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground font-bold">
              D
            </div>
            <div>
              <p className="font-semibold">Devisri V E</p>
              <p className="text-sm text-background/70">Full-Stack Developer (MERN)</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/devisri-v-e-a046372bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/devisrics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:devisrics13@gmail.com"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/70 flex items-center gap-1">
            © {currentYear} Made by Devisri V E
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
