import { ExternalLink, Github, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
  title: 'LocalConnect – Community Service Booking Platform',
  description:
    'A comprehensive full-stack application designed to connect users with reliable local service providers. Supports service discovery, appointment scheduling, and booking management through secure authentication and a responsive interface.',
  techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'AWS EC2', 'Nginx'],
  features: [
    'User Authentication',
    'Service Discovery & Category Filtering',
    'Service Booking & Scheduling',
    'Booking Management Dashboard'
  ],
  github: 'https://github.com/devisrics/localconnect',
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'A full-stack eCommerce application that enables users to explore products, place orders, and track purchases. Includes secure authentication, an administrative dashboard, and integrated online payment processing.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap','AWS EC2', 'Stripe'],
    features: ['User Authentication', 'Admin Dashboard', 'Stripe Payment Integration', 'Order Tracking'],
    github: 'https://github.com/devisrics/ECOMMERCE_CART',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4">
            Real-world applications showcasing my full-stack development skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated p-6 sm:p-8 space-y-6 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Layers className="w-7 h-7 text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              </div>

              {/* Project Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Key Features:</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-border">
                <p className="text-sm font-medium text-foreground">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
