import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT — TEXT */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Gourab
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-delay-2">
              Modak
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            Computer Science undergraduate with strong expertise in
            <span className="text-foreground font-medium">
              {" "}Data Structures & Algorithms
            </span>
            , applied Machine Learning, and scalable software systems.
            Experienced in building ML pipelines on real-world biomedical data
            and developer tools used by competitive programmers.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl scale-110" />

            {/* Image */}
            <img
              src="/me.jpeg"
              alt="Gourab Modak"
              className="relative w-100 h-64 md:w-100 md:h-72
                         object-cover rounded-2xl
                         border border-border
                         shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
