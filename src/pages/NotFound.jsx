import { ArrowLeft, AlertTriangle } from "lucide-react";

export const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] bottom-0 right-0" />
      </div>

      <div className="relative z-10 max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10">
            <AlertTriangle className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          404
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-4">
          Node Not Found
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          The path you’re trying to reach does not exist in the current graph.
          Either the node was removed, or the traversal took a wrong turn.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="cosmic-button flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>

        {/* Algorithmic hint */}
        <p className="mt-8 text-xs text-muted-foreground font-mono">
          Hint: Try BFS from the root ( / )
        </p>
      </div>
    </section>
  );
};
