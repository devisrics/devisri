const skillCategories = [{
  title: 'Frontend Development',
  skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap']
}, {
  title: 'Backend Development',
  skills: ['Node.js', 'Express.js', 'REST APIs']
}, {
  title: 'Databases',
  skills: ['MongoDB', 'SQL']
}, {
  title: 'Programming Languages',
  skills: ['Python', 'JavaScript']
}, {
  title: 'Core CS Concepts',
  skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS']
}, {
  title: 'Tools & Platforms',
  skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Thunder Client', 'AWS EC2', 'Canva']
}, {
  title: 'Coding Platforms',
  skills: ['LeetCode', 'HackerRank']
}];
const SkillsSection = () => {
  return <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => <div key={category.title} className="card-elevated p-6 space-y-4">
              <h3 className="font-semibold text-foreground text-lg border-b border-border pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;