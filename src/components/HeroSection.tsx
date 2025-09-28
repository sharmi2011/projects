import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ASPIRING SOFTWARE DEVELOPER";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi There! 👋
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                I'm <span className="gradient-text">Sharmila</span>
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">{displayText}</span>
                <span className="animate-blink">|</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Passionate about creating amazing web experiences and solving complex problems through code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('/assets/Sharmila_J_Resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-primary transition-colors"
                onClick={() => window.open('https://github.com/sharmi2011', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-primary transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/sharmila-j-2011sharmi', '_blank')}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-primary transition-colors"
                onClick={() => window.open('mailto:sharmilajagan2003@gmail.com', '_blank')}
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Right Content - Developer Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-hero rounded-full opacity-20 animate-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl md:text-9xl animate-float">💻</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;