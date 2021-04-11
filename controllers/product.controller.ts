import { Router, Response, Request } from 'express'
import { ProductService } from '../services/product.service'

export class ProductController{
  public router: Router
  private productService: ProductService

  constructor() {
    this.router = Router()
    this.productService = new ProductService()
    this.routes()
  }

  public list = async (req: Request, res: Response) => {
    res.send(this.productService.list())
  }
  public update = async (req: Request, res: Response) => {
    res.send(this.productService.update())
  }
  public get = async (req: Request, res: Response) => {
    res.send(this.productService.get())
  }
  public create = async (req: Request, res: Response) => {
    res.send(this.productService.create())
  }
  public delete = async (req: Request, res: Response) => {
    res.send(this.productService.delete())
  }

  public routes() {
    this.router.get('/', this.list)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.get('/:id', this.get)
    this.router.delete('/:id', this.delete)
  }
}