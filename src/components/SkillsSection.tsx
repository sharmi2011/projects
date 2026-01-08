import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "💛" },
    { name: "Python", icon: "🐍" },
    { name: "Basic SQL", icon: "🗄️" },
    { name: "Power BI", icon: "📊" },
    { name: "React.JS", icon: "📊" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            MY <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold gradient-text">
                  {skill.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Always <span className="gradient-text">Learning</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm constantly exploring new technologies and staying up-to-date with the latest trends in software development. 
                Currently expanding my knowledge in <span className="text-primary font-semibold">Data Analytics</span>, 
                <span className="text-primary font-semibold"> Web Development</span>, and 
                <span className="text-primary font-semibold"> Database Management</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;