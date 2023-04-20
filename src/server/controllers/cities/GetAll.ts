import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware/Validation'

interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional()
  }))
}))

export const GetAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.body)
  return res.status(StatusCodes.METHOD_NOT_ALLOWED).send('Não implementado')
}