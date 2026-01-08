import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* Email */}
                <a
                  href="mailto:sharmilajagan2003@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/20">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">sharmilajagan2003@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/sharmi2011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/20">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-muted-foreground">github.com/sharmi2011</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sharmila-j-2011sharmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/20">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/sharmila-j-2011sharmi</p>
                  </div>
                </a>

              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-hero hover:scale-105 transform transition-all duration-300 glow-effect"
                  >
                    Send Message 🚀
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

