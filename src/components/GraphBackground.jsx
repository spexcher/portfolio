import { useEffect, useRef, useState } from "react";

const NODE_COUNT = 28;

/**
 * Graph generator (sparse, realistic)
 */
function generateGraph() {
  const nodes = [];
  const edges = [];
  const adj = {};

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
    });
    adj[i] = [];
  }

  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      if (Math.random() > 0.93) {
        const weight = Math.floor(Math.random() * 9) + 1;
        edges.push({ from: i, to: j, weight });
        adj[i].push({ to: j, weight });
        adj[j].push({ to: i, weight });
      }
    }
  }

  return { nodes, edges, adj };
}

/**
 * BFS traversal (true order)
 */
function bfs(adj, start = 0) {
  const visited = new Set();
  const queue = [start];
  const order = [];

  visited.add(start);

  while (queue.length) {
    const u = queue.shift();
    order.push(u);
    for (const v of adj[u]) {
      if (!visited.has(v.to)) {
        visited.add(v.to);
        queue.push(v.to);
      }
    }
  }
  return order;
}

export const GraphBackground = () => {
  const [{ nodes, edges, adj }, setGraph] = useState(generateGraph);
  const [bfsOrder, setBfsOrder] = useState([]);
  const [phase, setPhase] = useState(0);
  const frame = useRef(0);

  // BFS computation
  useEffect(() => {
    setBfsOrder(bfs(adj, 0));
  }, [adj]);

  // Scroll-driven phases
  useEffect(() => {
    const onScroll = () => {
      const progress =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      setPhase(
        progress < 0.25 ? 0 :
        progress < 0.5  ? 1 :
        progress < 0.75 ? 2 : 3
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none graph-container">
      <svg className="w-full h-full">
        {/* EDGES */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={`${nodes[e.from].x}%`}
            y1={`${nodes[e.from].y}%`}
            x2={`${nodes[e.to].x}%`}
            y2={`${nodes[e.to].y}%`}
            className={`
              graph-edge
              ${phase >= 1 ? "edge-active" : ""}
              ${phase >= 2 ? "edge-weighted" : ""}
            `}
          />
        ))}

        {/* NODES */}
        {nodes.map((n) => {
          const bfsIndex = bfsOrder.indexOf(n.id);
          return (
            <circle
              key={n.id}
              cx={`${n.x}%`}
              cy={`${n.y}%`}
              r="2"
              className={`
                graph-node
                ${phase >= 0 ? "node-project" : ""}
                ${phase >= 1 && bfsIndex !== -1 ? "node-bfs" : ""}
                ${phase >= 2 ? "node-dijkstra" : ""}
                ${phase >= 3 ? "node-matrix" : ""}
              `}
              style={{
                animationDelay:
                  bfsIndex !== -1 ? `${bfsIndex * 0.15}s` : "0s",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
