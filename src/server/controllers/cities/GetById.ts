import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware/Validation'

interface IParamsProps {
  id?: number
}

export const getByIdValidation = validation((getSchema) => ({
  query: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}))

export const GetById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.body)
  return res.status(StatusCodes.METHOD_NOT_ALLOWED).send('Não implementado')
}