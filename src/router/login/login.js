async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return { hello: "login" };
  });
}

export default routes;
