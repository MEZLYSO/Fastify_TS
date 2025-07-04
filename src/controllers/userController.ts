import { FastifyRequest } from 'fastify'

// Interface del body
interface reqBody {
  id: string
}

// Definicion del controlador donde ademas definimos una interface
// para poder definir que devuelve esta peticion en el body
export const userInfo = async (req: FastifyRequest<{ Body: reqBody }>) => {
  const { id } = req.body
  return { message: `Hi user number ${id}` }
}

export default { userInfo }
