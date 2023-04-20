import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware/Validation'

interface ICity {
  name: string,
  state: string,
}

interface IFilter {
  filter?: string,
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().optional().min(3),
  }))
}))

export const Create = async (req: Request<{}, {}, ICity>, res: Response) => {
  return res.status(StatusCodes.ACCEPTED).send('cidade cadastrada com sucesso')
}