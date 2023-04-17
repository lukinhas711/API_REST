import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CitiesControllers } from '../controllers'


const router = Router()

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá, estou funcionando! ( * w * )')
})

router.post('/cidades', CitiesControllers.Create)


export { router }