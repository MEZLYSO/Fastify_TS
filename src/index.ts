import fastify from "fastify";
import { userRouter } from './routes'

const app = fastify()

// Registro de la ruta con su prefijo para acceder 
app.register(userRouter, { prefix: "/user" })

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1)
  }
  console.log("Server run in PORT 3000");
})
