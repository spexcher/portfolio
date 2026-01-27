import { Brain, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold leading-snug">
              Computer Science Undergraduate <br />
              <span className="text-primary">
                Competitive Programmer · ML Enthusiast
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science undergraduate at Jalpaiguri Government
              Engineering College and a Data Science student at IIT Madras. My
              primary interests lie in solving complex algorithmic problems,
              building efficient systems, and applying machine learning to
              real-world data.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I actively practice competitive programming and have solved
              hundreds of problems across platforms like CodeChef, Codeforces,
              and LeetCode. I enjoy working close to the fundamentals — data
              structures, graph algorithms, dynamic programming, and
              optimization techniques.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Alongside problem solving, I have experience building full-stack
              applications and ML pipelines, with a strong focus on performance,
              correctness, and scalability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Gourab_Modak_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary
                           text-primary hover:bg-primary/10
                           transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* DSA */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Structures & Algorithms
                  </h4>
                  <p className="text-muted-foreground">
                    Strong foundation in arrays, trees, graphs, dynamic
                    programming, greedy algorithms, and problem-solving
                    techniques used in competitive programming.
                  </p>
                </div>
              </div>
            </div>

            {/* PROGRAMMING */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Experience building performant applications using C++,
                    Python, and JavaScript, with hands-on exposure to React,
                    Node.js, REST APIs, and system-oriented design.
                  </p>
                </div>
              </div>
            </div>

            {/* ML */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & Data Science
                  </h4>
                  <p className="text-muted-foreground">
                    Experience with data preprocessing, feature engineering,
                    model training, and evaluation using Python, NumPy, Pandas,
                    and Scikit-learn, with applications in healthcare and signal
                    processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
