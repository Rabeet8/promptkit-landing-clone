import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">About PromptKit</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">
            PromptKit is your all-in-one solution for creating stunning AI prompts.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
            <p>
              We believe everyone should have access to powerful AI tools. PromptKit makes it easy 
              to create, organize, and share prompts that help you get the most out of AI.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A curated library of high-quality prompts</li>
              <li>Easy-to-use prompt builder</li>
              <li>Community sharing and collaboration</li>
              <li>Regular updates with new prompts and features</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Our Team</h2>
            <p>
              We're a passionate team of AI enthusiasts and developers dedicated to making 
              AI accessible and useful for everyone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              Have questions or feedback? We'd love to hear from you at hello@promptkit.app.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
