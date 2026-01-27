# 🧠 Graph-Driven Portfolio — Algorithms in Motion

A modern, interactive developer portfolio where **computer science fundamentals directly power the visuals**.

Instead of static backgrounds or decorative animations, this project renders a **real graph data structure** at runtime and animates it using **actual algorithmic logic**. Every visual change on the screen is tied to a concrete data structure, traversal rule, or mathematical transformation.

This portfolio is designed to communicate **how I think as an engineer**: data-driven, systems-oriented, and correctness-first.

---

## ⚙️ System Architecture — What’s Really Running

When the page loads, the background initializes a **sparse weighted graph** with a bounded number of nodes to maintain visual clarity and performance.

Each node:
- Has a stable ID
- Is placed in **normalized 2D space** `[-1, 1]`
- Maintains an explicit algorithmic state

The graph is stored internally as an **adjacency list**, not a visual-only abstraction.  
All algorithms operate directly on this structure.


Node {
  id
  position: (x, y)
  state: idle | discovered | visited
}

Graph {
  adjacencyList: Map<Node, Edge[]>
}
Edges are generated with controlled randomness and optional weights.
Weights are reused later to demonstrate shortest-path intuition, not decoration.

Edges are created using **controlled randomness** with optional weights.  
These weights are later reused to convey **shortest-path intuition**, serving a functional purpose rather than visual ornamentation.

---

## 🧮 Layout, Projection & Mathematical Control

Before any traversal occurs, the graph enters a layout phase grounded in **linear algebra and coordinate geometry**.

- Vector normalization and projection establish spatial consistency  
- Distance-based scaling prevents node clustering  
- Matrix-style transformations (scale, shear, rotate) introduce controlled morphing  
- Normalized coordinates enable resolution-independent rendering  

Because all node positions live in normalized space, transformations are applied via **matrix operations**, not pixel-based adjustments.

This phase visually demonstrates how **mathematical transformations shape data representation**.

---

## 🔁 BFS Traversal as the Animation Engine

The animation system is driven by a **true Breadth-First Search (BFS)** algorithm.

- A strict FIFO queue enforces traversal order  
- A visited set guarantees correctness  
- Traversal is fully deterministic  
- Animation timing is derived directly from BFS execution  

```text
enqueue(start)
mark visited

while queue not empty:
  node = dequeue
  animate(node)
  for each neighbor:
    if not visited:
      mark visited
      enqueue(neighbor)
```
There is **no visual approximation** at any stage.  
A node becomes active *only* when it is reached by BFS at that exact traversal step.

The characteristic BFS **wavefront** emerges organically and is rendered as expanding glows, forming a strict one-to-one mapping:

> algorithmic state → animation state

---

## 📐 Scroll as an Algorithmic Timeline

Scroll position serves as a **continuous control signal**, converting the page into an algorithmic timeline rather than a set of CSS-driven triggers.

- Early scroll → layout, projection, and spatial organization  
- Mid scroll → BFS traversal and frontier expansion  
- Late scroll → weighted edges and cost emphasis  
- Final phase → matrix-inspired distortions and structural morphing  

Scrolling advances **system state**, not merely visual effects.

---

## 🧭 Weighted Edges & Path Intuition

Edges may optionally carry weights, influencing:

- Visual thickness  
- Glow intensity  
- Cost-aware traversal emphasis  

While not a full Dijkstra visualization, the system introduces **path-cost intuition**, demonstrating how weights alter traversal behavior and overall system dynamics.

---

## 🎯 Semantic Visual Language

Nothing is decorative. Every visual element corresponds to a concrete computer science concept.

| Visual Element     | Represents                          |
|--------------------|--------------------------------------|
| Nodes              | States / data points                |
| Edges              | Relationships                       |
| Edge weight        | Cost / distance                     |
| Glow waves         | Traversal frontier                  |
| Color transitions  | Discovery → visit                   |
| Matrix distortions | Transformations / system evolution  |

If an effect exists, it carries **semantic meaning**.

---

## 🛠 Tech Stack & Engineering Choices

- **React (Vite)** — component-driven architecture with predictable state flow  
- **SVG** — precise, performant, mathematically controllable rendering  
- **Tailwind CSS** — minimal, dark UI with no visual noise  
- **Lucide Icons** — clean, consistent vectorography  
- **External Mail API** — production-ready contact handling  
- **Vercel** — global CDN-backed deployment  

Performance-sensitive logic (graph updates and traversal state) remains **deterministic** and isolated from presentational components.

---

## 🧠 Why This Portfolio Exists

This project intentionally goes beyond listing technologies or projects.

It demonstrates how **algorithms, data structures, and systems thinking** translate into real, interactive software.

The goal is not to impress with effects, but to communicate:

- clarity of thought  
- correctness  
- engineering discipline  

---

## 🔗 Links

- **Live Demo:** https://spexcher.vercel.app  
- **GitHub:** https://github.com/spexcher  
- **LinkedIn:** https://linkedin.com/in/gourabmodak  
- **Codeforces:** https://codeforces.com/profile/spexcher  
- **CLIST:** https://clist.by/coder/spexcher  
- **Email:** gourabmodak28092003@gmail.com


---

### Optional Enhancements

This repository can be extended further to showcase additional depth and context:

- **Badges** — tech stack, deployment status, and activity indicators  
- **Animated GIF preview** — short visual demo of graph traversal and scroll-driven phases  
- **Architecture diagram** — high-level system view of graph generation, traversal, and rendering pipeline  
- **Competitive Programming stats** — Codeforces / CodeChef / CLIST highlights  
- **Recruiter-optimized version** — concise, impact-focused README tailored for hiring managers  

These additions are intentionally optional to keep the core presentation clean, focused, and algorithm-centric.
And there already exists better implementations on the real websites.


---

> **“Algorithms are not just code — they are systems that evolve, propagate, and interact.”**

