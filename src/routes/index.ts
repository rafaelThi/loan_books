import { Router } from "express";

const routes = Router()

const user:any = []

routes.get('/', (request, response) => {
  return response.json({user})
})

routes.post('/post', (request, response) => {
  const { email, name } = request.body
  user.push(email, name);

  return response.json({email, name});
})


export default routes;