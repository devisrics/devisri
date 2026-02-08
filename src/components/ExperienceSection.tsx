import { Briefcase, Building2 } from 'lucide-react';

const experienceData = [
  {
    title: 'Web Development Intern',
    company: 'NLC India Limited',
    period: 'July 2025',
    description: [
      'Built responsive user interfaces using React and Bootstrap, ensuring cross-browser compatibility',
      'Developed and optimized backend REST APIs using Node.js and Express.js to streamline data flow',
      'Collaborated in a Git-based environment to maintain code integrity and version control'
    ]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional Journey
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Experience items */}
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="timeline-dot top-1" />

                {/* Content card */}
                <div className="ml-6 card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{item.company}</span>
                      </div>
                      <ul className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>   
    </section>
  );
};

export default ExperienceSection;
