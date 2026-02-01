import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bus Reservation System",
      description: "A comprehensive bus booking system with seat selection, payment processing, and booking management.",
      image: "🚌",
      technologies: ["Python", "Django", "Sqlite", "Javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/sharmi2011/Building-Bus-Reservation-System-using-Python-and-Django-SHARMILA-J--5033--KEC",
      featured: true
    },
    {
      title: "Resume Integrity Checker",
      description: "Built a Resume Integrity Checker to detect fraudulent resumes, with scope to add personalized job recommendations.",
      image: "📑",
      technologies: [ "python", "SQL", "Flask","HTML","CSS3","Javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/sharmi2011/projects/tree/main/Resume%20Integrity%20Checker",
      featured: true
    },
    {
      title: "Earthquake Prediction Model Using python",
      description: "A predictive model that analyzes seismic data to forecast the likelihood of earthquakes in real-time.",
      image: "🌍",
      technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/sharmi2011/AI",
      featured: true
    },
    {
      title: "Sales Analysis Dashboard",
      description: "Built an interactive Sales Analysis Dashboard with Excel and Power BI for data-driven insights and decision-making.",
      image: "📈",
      technologies: ["Excel", "Power BI"],
      liveUrl: "#",
      githubUrl: "https://github.com/sharmi2011/projects/tree/main/Sales%20Analysis%20Dashboard",
      featured: false
    },
    {
      title: "Budget Tracker App",
      description: "Developed a Budget Tracker using HTML, CSS, and JavaScript for easy tracking of income, expenses, and remaining balance.",
      image: "📱",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/sharmi2011/projects/tree/main/Budget%20Tracker%20App",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            MY <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mt-6"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-300 group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-6xl group-hover:animate-float">
                      {project.image}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <Github size={18} />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <ExternalLink size={18} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 hover:scale-105 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl group-hover:animate-float">
                      {project.image}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="hover:text-primary p-1">
                        <Github size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary p-1">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;
