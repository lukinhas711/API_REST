import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface ICity {
  name: string,
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
  name: yup.string().required().min(3)
})

export const Create = async (req: Request<{}, {}, ICity>, res: Response) => {

  const data = req.body
  let validatedData: ICity | undefined = undefined

  try {
    validatedData = await bodyValidation.validate(data)
  } catch (error) {
    const validatedError = error as yup.ValidationError
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: validatedError.message
      }
    })
  }
  return res.status(StatusCodes.ACCEPTED).send(`Voce passou o valor ${data.name}`)
}