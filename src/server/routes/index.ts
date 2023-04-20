import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CitiesControllers } from '../controllers'


const router = Router()

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá, estou funcionando! ( * w * )')
})

router.get('/cidades', CitiesControllers.getAllValidation, CitiesControllers.GetAll)
router.get('/cidades/:id', CitiesControllers.getByIdValidation, CitiesControllers.GetById)
router.post('/cidades', CitiesControllers.createValidation, CitiesControllers.Create)


export { router }