import { motion } from "framer-motion";
import { Sparkles, Zap, Palette, Wand2, Share2, Crown } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Prompts",
    description: "Generate stunning prompts with advanced AI technology",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get high-quality outputs in seconds, not minutes",
  },
  {
    icon: Palette,
    title: "Style Customization",
    description: "Fine-tune every aspect of your creative vision",
  },
  {
    icon: Wand2,
    title: "Magic Enhancement",
    description: "Automatically enhance and optimize your prompts",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your creations across all platforms instantly",
  },
  {
    icon: Crown,
    title: "Premium Quality",
    description: "Professional-grade results every single time",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Why Choose <span className="text-primary">PromptKit?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to create perfect AI prompts, all in one app.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
