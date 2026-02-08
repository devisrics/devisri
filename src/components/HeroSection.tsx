import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
const HeroSection = () => {
  return <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">Devisri V E</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                <span className="text-gradient font-semibold">Software Development Engineer</span>
                <br />
                <span className="text-lg">Full-Stack Developer (MERN)</span>
              </p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg animate-fade-in-up animation-delay-100">
              I focus on building applications that solve real-world problems while maintaining clean architecture and smooth user experience. Currently expanding my expertise through hands-on development and continuous problem-solving practice.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
              <a href="https://linkedin.com/in/devisri-v-e-a046372bb" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/devisrics" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:devisrics13@gmail.com" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden card-elevated">
                <img src={profilePhoto} alt="Devisri V E - Software Developer" className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/5 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;