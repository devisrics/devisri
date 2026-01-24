import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'MERN Stack',
    description: 'Building full-stack applications with MongoDB, Express.js, React, and Node.js',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Strong foundation in DSA with regular practice on LeetCode & HackerRank',
  },
  {
    icon: Target,
    title: 'CS Fundamentals',
    description: 'Solid grasp of OOP, Operating Systems, Computer Networks, and DBMS',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Continuously learning new technologies and improving development skills',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Passionate About Building Impactful Software
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a final-year Computer Science Engineering student at University College of Engineering Panruti, affiliated with Anna University. My journey in tech has been driven by a deep curiosity for how software can solve real-world problems.
              </p>
              <p>
                With hands-on experience in full-stack web development using the MERN stack, I've built multiple projects from concept to deployment. I believe in writing clean, maintainable code and continuously improving my craft through practice and learning.
              </p>
              <p>
                Currently seeking entry-level Software Developer or Full-Stack Developer roles where I can contribute, learn, and grow alongside a passionate team.
              </p>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 space-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
