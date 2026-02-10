import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Competitive Programming IDE",
    description:
      "A browser-based IDE built for competitive programmers featuring multi-language support (C++, Python, Java), Monaco Editor IntelliSense, custom snippets, and low-latency execution.",
    image: "/projects/cp-ide.png",
    tags: ["ReactJS", "Node.js", "Monaco Editor", "Vercel"],
    demoUrl: "https://ceditor.vercel.app",
    githubUrl: "https://github.com/spexcher/ceditor",
  },
  {
    id: 2,
    title: "AegisQueue",
    description:
      "A distributed background job queue and scheduler with multiple workers, atomic MongoDB locking, priority-based scheduling, retries, and fault recovery via heartbeats and liveness checks.",
    image: "projects/aegis_queue_architecture.png",
    tags: [
      "FastAPI",
      "Python",
      "MongoDB",
      "Distributed Systems",
      "Concurrency",
      "Job Queues",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/spexcher/distributed-job-queue",
  },
  {
    id: 3,
    title: "Graph Visualizer",
    description:
      "Graph Algorithms, visualized. Built a React-based Graph Visualizer that animates BFS, DFS, Topological Sort, Hamiltonian Path, and Euler Cycle using real data structures and step-by-step explanations.",
    image: "/projects/gv.png",
    tags: ["ReactJS", "TailwindCSS", "Graph Algorithms", "Recursion", "Backtracking", "BFS", "DFS"],
    demoUrl: "https://graphvisualizer.vercel.app",
    githubUrl: "https://github.com/spexcher/graph_visualizer",
  },
  {
    id: 4,
    title: "DiabOptiSVM",
    description:
      "An optimized clinical prediction system using Support Vector Machines. Achieved strong validation accuracy through Bayesian Optimization, Grid Search, and feature engineering.",
    image: "/projects/diaboptisvm.png",
    tags: ["Python", "Scikit-Learn", "ML", "Bayesian Optimization"],
    demoUrl: "#",
    githubUrl: "https://github.com/spexcher/DiabOptiSVM",
  },
  {
  id: 5,
  title: "PARALLAX — The System",
  description:
    "A Solo Leveling–inspired life synchronization interface that gamifies discipline into measurable progression. Tasks are modeled as quests, consistency earns XP, ranks evolve from E to S, and inactivity triggers decay. Built with a no-motivation philosophy—only progression, penalties, and unlocks—backed by real-time analytics and immersive UI.",
  image: "/projects/parallax.png",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "TailwindCSS",
    "Gamification",
    "System Design",
    "UI/UX",
  ],
  demoUrl: "https://parallaxts.vercel.app/",
}

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my work in software engineering,
          machine learning, and system design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden
                         border border-border/50
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium
                                 rounded-full border
                                 bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary
                                 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary
                                 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GITHUB CTA */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/spexcher"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
