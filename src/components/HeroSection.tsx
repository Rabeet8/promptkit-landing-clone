import PhoneMockup from "./PhoneMockup";
import DownloadButtons from "./DownloadButtons";
import { Brain, Sparkles, Wand2, Zap, Lightbulb, Bot, MessageSquare, Stars } from "lucide-react";

const orbitingIcons = [
  { icon: Brain, delay: 0, ring: 1 },
  { icon: Sparkles, delay: 2.5, ring: 1 },
  { icon: Wand2, delay: 5, ring: 1 },
  { icon: Zap, delay: 7.5, ring: 1 },
  { icon: Lightbulb, delay: 0, ring: 2 },
  { icon: Bot, delay: 3.3, ring: 2 },
  { icon: MessageSquare, delay: 6.6, ring: 2 },
  { icon: Stars, delay: 0, ring: 3 },
  { icon: Sparkles, delay: 5, ring: 3 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Ripples with Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          {/* Animated Circles */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-muted-foreground/10 animate-pulse-ring"
              style={{
                transform: `scale(${0.3 + i * 0.18})`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          {/* Orbiting AI Icons */}
          {orbitingIcons.map((item, index) => {
            const Icon = item.icon;
            const radius = item.ring === 1 ? 140 : item.ring === 2 ? 220 : 300;
            const duration = item.ring === 1 ? 20 : item.ring === 2 ? 30 : 40;
            
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                }}
              >
                <div
                  className="absolute left-1/2 top-1/2 animate-orbit"
                  style={{
                    '--orbit-radius': `${radius}px`,
                    '--orbit-duration': `${duration}s`,
                    animationDelay: `-${item.delay}s`,
                  } as React.CSSProperties}
                >
                  <div className="animate-float-icon" style={{ animationDelay: `${index * 0.3}s` }}>
                    <Icon 
                      className="text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors" 
                      size={item.ring === 1 ? 20 : item.ring === 2 ? 24 : 28} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Meet <span className="text-primary">PromptKit!</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your All-in-One solution for stunning AI prompts.
          </p>
        </div>

        {/* Phone Mockups */}
        <PhoneMockup />

        {/* Download Section */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-muted-foreground mb-6">
            Download for FREE!
          </p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
