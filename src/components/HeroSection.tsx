import PhoneMockup from "./PhoneMockup";
import DownloadButtons from "./DownloadButtons";
import { Brain, Sparkles, Wand2, Zap, Lightbulb, Bot, MessageSquare, Stars } from "lucide-react";

const orbitingIcons = [
  { icon: Brain, delay: 0 },
  { icon: Sparkles, delay: 3 },
  { icon: Wand2, delay: 6 },
  { icon: Zap, delay: 9 },
  { icon: Lightbulb, delay: 12 },
  { icon: Bot, delay: 15 },
  { icon: MessageSquare, delay: 18 },
  { icon: Stars, delay: 21 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Ripples with Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          {/* Static Circles */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-muted-foreground/10"
              style={{
                transform: `scale(${0.3 + i * 0.18})`,
              }}
            />
          ))}

          {/* Orbiting AI Icons on outermost circle */}
          {orbitingIcons.map((item, index) => {
            const Icon = item.icon;
            // Outermost circle: scale(1.2) on 800px container = 400 * 1.2 = 480px radius
            const radius = 480;
            const duration = 24;
            
            return (
              <div
                key={index}
                className="absolute inset-0 animate-orbit"
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `-${item.delay}s`,
                }}
              >
                {/* Icon positioned at the right edge of the circle */}
                <div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translateX(${radius}px) translateY(-50%)`,
                  }}
                >
                  <Icon 
                    className="text-muted-foreground/40" 
                    size={22} 
                  />
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
