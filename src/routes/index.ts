import { Router } from 'express'


const router = Router()

router.get('/', (req, res) => {
  return res.send('Primeira rota!')
})


export { router }