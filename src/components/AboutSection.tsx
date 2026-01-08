import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET ME <span className="gradient-text">INTRODUCE</span> MYSELF
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I fell in love with programming and I have at least learnt something, I think... 🥰
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am fluent in classics like <span className="text-primary font-semibold">python</span>, 
                  <span className="text-primary font-semibold"> HTML,CSS</span> and 
                  <span className="text-primary font-semibold"> Javascript</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My field of interests are building new 
                  <span className="gradient-text font-semibold"> Web Technologies and Products</span> and 
                  also in areas related to <span className="gradient-text font-semibold">AI & Machine Learning</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                Whenever possible, I apply my passion for creating 
              <span className="text-accent font-semibold"> interactive and efficient web applications</span> 
                using <span className="text-accent font-semibold"> modern web technologies</span>.
             </p>
              </CardContent>
            </Card>
          </div>

          {/* Avatar/Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="text-9xl animate-float" style={{ animationDelay: "0.5s" }}>
                  👩🏼‍💻
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-glow" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-glow" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;