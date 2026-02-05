import { motion } from "framer-motion";
const skillGroups = [
  {
    title: "Data Structures & Algorithms",
    highlight: true,
    skills: [
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & BST",
      "Graphs (BFS / DFS, Topological Sort)",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Binary Search",
      "Recursion & Backtracking",
      "Sliding Window",
      "Two Pointers",
    ],
    meta: "1500+ problems solved · CodeChef 3★ · Codeforces · LeetCode",
  },
  {
    title: "Programming Languages",
    highlight: true,
    skills: ["C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Distributed Systems",
    highlight: true,
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Distributed Workers",
      "Job Queues & Scheduling",
      "Concurrency & Locking",
      "Fault Tolerance",
      "Retries & Idempotency",
    ],
  },
  {
    title: "Databases & Storage",
    highlight: true,
    skills: [
      "MongoDB",
      "PyMongo",
      "MySQL",
      "Database Indexing",
      "Transactions",
      "Atomic Operations",
    ],
  },
  {
    title: "Machine Learning & Data Science",
    highlight: true,
    skills: [
      "Scikit-Learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "Web & Frontend Development",
    highlight: true,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Monaco Editor API",
      "Chakra UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Developer Tools & Platforms",
    highlight: true,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Linux",
    ],
  },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Technical <span className="text-primary">Expertise</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-8 relative overflow-hidden
                ${group.highlight ? "ring-1 ring-primary/40" : ""}`}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>

              {/* Meta info for DSA */}
              {group.meta && (
                <p className="text-sm text-primary mb-4">{group.meta}</p>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full
                               bg-secondary/40 border border-border/40
                               hover:bg-primary/20 hover:border-primary/50
                               transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle algorithmic glow */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none
                              bg-gradient-to-br from-primary/30 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
