# 🧠 Graph-Driven Portfolio — Algorithms in Motion

A modern, interactive developer portfolio where **computer science fundamentals directly power the visuals**.  
Instead of static backgrounds or decorative animations, this project renders a **real graph data structure** and animates it using **actual algorithmic logic** such as BFS traversal, weighted edges, and linear-algebra-inspired transformations.

This portfolio is designed to reflect how I **think as an engineer**: data-driven, systems-oriented, and algorithmically precise.

The background visualization is generated at runtime using a sparse graph with nodes placed in normalized 2D space and randomly assigned weighted edges. An adjacency list is maintained internally, enabling real traversal algorithms to run on the structure. Breadth-First Search (BFS) is implemented using a proper queue and visited set, and the traversal order is used directly to drive animation timing — guaranteeing correctness rather than visual approximation.

Scrolling the page transitions the system through multiple **algorithmic phases**. Early scroll positions emphasize projection and layout (inspired by linear algebra and coordinate transformations). Mid-scroll activates BFS traversal, where nodes illuminate strictly in the order discovered by the algorithm. Further scrolling introduces weighted edges and shortest-path intuition, and the final phase applies matrix-like morphing and transformations to the graph structure. The scroll position effectively becomes a timeline for algorithm execution.

Every visual element has semantic meaning: nodes represent states or data points, edges represent relationships, weights encode cost or distance, glowing waves represent traversal frontiers, and matrix distortions reflect transformations. No animation exists purely for decoration — everything is tied back to a concrete CS concept.

The project is built using **React (Vite)** for a component-driven architecture, **SVG** for precise and performant rendering, **Tailwind CSS** for a dark, minimal aesthetic, and **Lucide Icons** for clean vectorography. The contact system is production-ready using an external mail API, and the site is deployed globally on **Vercel** with CDN support.

This portfolio intentionally goes beyond listing projects. It demonstrates **how algorithms, data structures, and systems thinking translate into real, interactive software**. The goal is not to impress with effects, but to communicate clarity of thought, correctness, and engineering discipline.

Live Demo: https://spexcher.vercel.app  
GitHub: https://github.com/spexcher  
LinkedIn: https://linkedin.com/in/gourabmodak  
Codeforces: https://codeforces.com/profile/spexcher  
CLIST: https://clist.by/coder/spexcher  
Email: gourabmodak28092003@gmail.com

“Algorithms are not just code — they are systems that evolve, propagate, and interact.”

