const fastify = require("fastify")({ logger: true });

// Routes

// Healthcheck Route
fastify.get("/healthcheck", async (request, reply) => {
  return { status: "ok" };
});

// Start Server
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Start the server
start();
