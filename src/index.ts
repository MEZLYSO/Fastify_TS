import fastify from "fastify";

const app = fastify()

app.get('/', async (_req, res) => {
  res.status(200).send({ message: "Hi Fastifyt" })
})

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1)
  }
  console.log("Server run in PORT 3000");

})
