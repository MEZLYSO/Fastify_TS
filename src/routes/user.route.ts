import { FastifyInstance } from "fastify";
import userController from "../controllers/userController";

export const userRouter = async (app: FastifyInstance) => {

  // Definicion del metodo a usar para la peticion
  app.post(
    // Definicion de la ruta
    "/hi",
    // En este se define el controlador con el metodo
    userController.userInfo
  )

}
