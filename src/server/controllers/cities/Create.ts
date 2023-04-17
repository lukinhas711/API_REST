import { Request, Response } from 'express'

interface ICity {
  name: string,
}

export const Create = (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body.name)

  return res.send('Create!')
}