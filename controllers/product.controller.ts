import { Router, Response, Request } from 'express'

export class ProductController{
  public router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  public list = async (req: Request, res: Response) => {
    res.send('List')
  }
  public update = async (req: Request, res: Response) => {
    res.send('Update')
  }
  public get = async (req: Request, res: Response) => {
    res.send('Get')
  }
  public create = async (req: Request, res: Response) => {
    res.send('Create')
  }
  public delete = async (req: Request, res: Response) => {
    res.send('Delete')
  }

  public routes() {
    this.router.get('/', this.list)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.get('/:id', this.get)
    this.router.delete('/:id', this.delete)
  }
}