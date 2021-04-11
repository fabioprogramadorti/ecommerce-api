import { Router, Response, Request } from 'express'
import { ProductService } from '../services/product.service'
import { ProductEntity } from '../database/entities/product.entity'

export class ProductController{
  public router: Router
  private productService: ProductService

  constructor() {
    this.router = Router()
    this.productService = new ProductService()
    this.routes()
  }

  public list = async (req: Request, res: Response) => {
    const products = await this.productService.list()

    res.send(products).json()
  }

  public update = async (req: Request, res: Response) => {
    const product = req.body as ProductEntity
    const id = req.params['id']
    const updatedProduct = this.productService.update(product, Number(id))

    res.send(updatedProduct)
  }

  public get = async (req: Request, res: Response) => {
    const id = req.params['id']

    res.send(this.productService.get(Number(id)))
  }

  public create = async (req: Request, res: Response) => {

    const product = req.body as ProductEntity
    const newProduct = await this.productService.create(product)
    
    res.send(newProduct)
  }

  public delete = async (req: Request, res: Response) => {
    const id = req.params['id']

    res.send(this.productService.delete(Number(id)))
  }

  public routes() {
    this.router.get('/', this.list)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.get('/:id', this.get)
    this.router.delete('/:id', this.delete)
  }
}