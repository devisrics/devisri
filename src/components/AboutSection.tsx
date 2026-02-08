import { Code2, Cpu, Globe, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Building scalable MERN stack applications with RESTful APIs, structured backend architecture, and optimized MongoDB data models.',
  },
  {
  icon: Cpu,
  title: 'DSA & Problem Solving',
  description:
    'Consistently practicing Data Structures and Algorithms on LeetCode and HackerRank to strengthen analytical thinking and improve solution optimization skills.',
  },
  {
    icon: Layers,
    title: 'Core Computer Science Fundamentals',
    description:
      'Strong grasp of Object-Oriented Programming, Operating Systems, Computer Networks, and Database Management Systems, enabling the development of reliable and efficient software systems.',
  },
  {
    icon: Globe,
    title: 'Production-Ready',
    description:
      'Experience working with Git workflows, AWS EC2 deployment, and building production-ready full-stack applications during internships and personal projects.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Text Content */}
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-primary font-bold uppercase tracking-wider text-sm">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Building Production-Ready Web Applications
              </h2>
            </div>

            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                I’m <strong>Devisri V E</strong>, a final-year Computer Science Engineering student at Anna University, focused on building production-ready web applications with clean architecture, scalable logic, and real-world usability.
              </p>

              <p>
                I specialize in the <strong>MERN stack</strong> and <strong>Python</strong>, with a strong interest in backend engineering. My work involves designing efficient MongoDB schemas, building and optimizing REST APIs, and ensuring reliable application deployment in cloud environments.
              </p>

              <p>
                During my tenure as a <strong>Web Development Intern at NLC India Limited</strong>, I owned the end-to-end development of a Local Service Community Provider platform. I translated functional requirements into a complete MERN-based solution, strengthening my problem-solving abilities and reinforcing a builder-first engineering mindset.
              </p>

              <p className="border-l-4 border-primary pl-4 italic">
                Currently open to Software Engineering and Full-Stack Developer roles where I can contribute to scalable, production-grade systems and continue growing as an engineer.
              </p>
              
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group card-elevated p-6 space-y-3 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};


export default AboutSection;
