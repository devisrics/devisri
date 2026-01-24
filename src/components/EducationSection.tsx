import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    title: 'B.E. Computer Science and Engineering',
    institution: 'University College of Engineering Panruti, Cuddalore',
    period: '2022 - 2026',
    details: 'CGPA: 8.16 / 10 (Honours)',
    highlight: true,
  },
  {
    icon: Award,
    title: 'Higher Secondary (12th)',
    institution: 'Tamil Nadu State Board',
    period: '2022',
    details: 'Score: 90.5%',
  },
  {
    icon: BookOpen,
    title: 'Secondary (10th)',
    institution: 'Tamil Nadu State Board',
    period: '2020',
    details: 'Score: 97.2%',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Education items */}
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative pb-10 last:pb-0 ${
                  index === 0 ? 'animate-fade-in-up' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="timeline-dot top-1" />

                {/* Content card */}
                <div
                  className={`ml-6 card-elevated p-6 ${
                    item.highlight ? 'border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                      <p className="text-foreground font-medium">{item.details}</p>
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

export default EducationSection;
