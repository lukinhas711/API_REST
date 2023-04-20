import { RequestHandler } from 'express'
import { ValidationError, ObjectSchema, Maybe, AnyObject } from 'yup'
import { StatusCodes } from 'http-status-codes'


type TProperty = 'body' | 'header' | 'params' | 'query'

type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<any>

type TAllSchemas = Record<TProperty, ObjectSchema<any>>

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler


export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema)
  const listErrors: Record<string, Record<string, string>> = {

  }

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false })
    } catch (err) {
      const yupError = err as ValidationError
      const errors: Record<string, string> = {}

      yupError.inner.forEach(error => {
        if (!error.path) return
        errors[error.path] = error.message
      })

      listErrors[key] = errors
    }
  })

  if (Object.entries(listErrors).length === 0) {
    return next()
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: listErrors })
  }
}