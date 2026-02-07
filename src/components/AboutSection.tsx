import { Code2, Cpu, Globe, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Architecture',
    description: 'Engineering scalable systems using the MERN stack with a focus on RESTful API design and database optimization.',
  },
  {
    icon: Layers,
    title: 'Modern Frontend',
    description: 'Building responsive, high-performance UIs with React, Tailwind CSS, and Framer Motion for seamless UX.',
  },
  {
    icon: Cpu,
    title: 'Systems & Performance',
    description: 'Applying core CS fundamentals—OS, DBMS, and Computer Networks—to write optimized, low-latency code.',
  },
  {
    icon: Globe,
    title: 'Production-Ready',
    description: 'Experience in version control (Git), CI/CD workflows, and deploying robust applications to cloud environments.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-bold uppercase tracking-wider text-sm">Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Turning Technical Constraints into Scalable Solutions
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Software Engineer specializing in the <strong>MERN Stack</strong>, focused on bridging the gap between complex backend logic and intuitive frontend experiences. 
              </p>
              <p>
                Beyond writing code, I prioritize <strong>maintainability and performance</strong>. Whether it’s optimizing MongoDB queries or architecting reusable React components, my goal is to build software that scales without breaking.
              </p>
              <p className="border-l-4 border-primary pl-4 italic">
                Currently open to Software Engineering roles where I can apply my expertise in full-stack development to high-impact projects.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group card-elevated p-6 space-y-3 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-height-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;