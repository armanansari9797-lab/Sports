import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock API for high-level security events
  app.get("/api/events", (req, res) => {
    res.json([
      { id: 1, type: "SYSTEM", message: "Global Node Synchronization Complete" },
      { id: 2, type: "SECURITY", message: "Dual-Layer Encryption Verified for Vault A-1" },
      { id: 3, type: "AI", message: "Predictive Models Updated: No significant drift detected" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SportShield AI Server running on http://localhost:${PORT}`);
  });
}

startServer();
