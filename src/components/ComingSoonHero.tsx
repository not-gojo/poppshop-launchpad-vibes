import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Instagram, Twitter, Facebook, Sparkles, Shirt } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import poppshopLogo from "@/assets/poppshop-logo.png";

const ComingSoonHero = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as POPPSHOP launches!",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url('/src/assets/tshirt-pattern.png')`,
          backgroundSize: '300px 300px',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-bounce-gentle" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-brand-orange rounded-full opacity-15 animate-bounce-gentle" />
        
        {/* Moving particles */}
        <div className="absolute top-1/4 w-16 h-16 bg-gradient-primary rounded-full opacity-15 animate-drift-right" />
        <div className="absolute top-1/2 w-12 h-12 bg-gradient-secondary rounded-full opacity-10 animate-drift-left" />
        <div className="absolute top-3/4 w-20 h-20 bg-gradient-accent rounded-full opacity-12 animate-drift-right" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/3 w-8 h-8 bg-brand-pink rounded-full opacity-20 animate-drift-left" style={{ animationDelay: '8s' }} />
        
        {/* Spiral particles */}
        <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-gradient-warm rounded-full opacity-15 animate-spiral" />
        <div className="absolute top-1/4 left-3/4 w-10 h-10 bg-brand-blue rounded-full opacity-18 animate-spiral" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-secondary rounded-full opacity-12 animate-spiral" style={{ animationDelay: '7s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <img 
              src={poppshopLogo} 
              alt="POPPSHOP" 
              className="mx-auto h-20 w-auto hover-lift"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shirt className="w-5 h-5" />
            <span className="font-display text-lg">Fresh Threads, Cool Vibes</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-gradient-warm">Coming</span>
            <br />
            <span className="text-gradient-primary">Soon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get ready for the freshest t-shirt collection that'll make you stand out! 
            Unique prints, bold designs, and all the vibes you've been waiting for.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-12">
            <form onSubmit={handleEmailSubmit} className="flex gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-center bg-card/50 backdrop-blur-sm border-2 border-muted rounded-xl focus:border-primary glow-soft"
                required
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="h-12 px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-muted-foreground">
              Be the first to know when we drop! No spam, just pure awesomeness.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-16">
            {[
              { icon: Instagram, color: "hover:text-brand-pink", label: "Instagram" },
              { icon: Twitter, color: "hover:text-brand-blue", label: "Twitter" },
              { icon: Facebook, color: "hover:text-brand-purple", label: "Facebook" },
            ].map(({ icon: Icon, color, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className={`w-12 h-12 rounded-xl hover-bounce transition-colors ${color} hover:bg-card/50`}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </Button>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Unique Designs",
              description: "Hand-crafted prints that you won't find anywhere else",
              gradient: "bg-gradient-primary",
            },
            {
              title: "Premium Quality",
              description: "Soft, durable fabrics that feel as good as they look",
              gradient: "bg-gradient-secondary",
            },
            {
              title: "Express Yourself",
              description: "Bold statements and creative vibes for every mood",
              gradient: "bg-gradient-accent",
            },
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-muted hover-lift"
            >
              <div className={`w-16 h-16 ${feature.gradient} rounded-2xl mx-auto mb-4 glow-soft`} />
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;