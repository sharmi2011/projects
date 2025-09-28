import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Python", "Express.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "VS Code", "Linux"]
    },
    {
      title: "Languages",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Go", "Rust"]
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
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
                I'm constantly exploring new technologies and staying up-to-date with the latest trends in web development. 
                Currently diving deeper into <span className="text-primary font-semibold">WebAssembly</span>, 
                <span className="text-primary font-semibold"> GraphQL</span>, and 
                <span className="text-primary font-semibold"> Microservices Architecture</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;