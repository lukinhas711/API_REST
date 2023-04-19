import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface ICity {
  name: string,
  state: string,
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3)
})

export const Create = async (req: Request<{}, {}, ICity>, res: Response) => {

  const data = req.body
  let validatedData: ICity | undefined = undefined

  try {
    validatedData = await bodyValidation.validate(data, { abortEarly: false })
  } catch (err) {
    const yupError = err as yup.ValidationError
    const errors: Record<string, string> = {}

    yupError.inner.forEach(error => {
      if (!error.path) return
      errors[error.path] = error.message
    })

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    })
  }
  return res.status(StatusCodes.ACCEPTED).send(`A cidade de ${validatedData.name} no estado ${validatedData.state}`)
}