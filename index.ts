import express, { Request, Response } from 'express'
import { ProductController } from './controllers/product.controller'

class Server {
  private productController: ProductController
  private app: express.Application
  
  constructor() {
    this.app = express()
    this.configuration()
    this.productController = new ProductController()
    this.routes()
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 5000)
  }

  public routes() {
    this.app.use('/api/product/', this.productController.router)
    this.app.get('/', (req: Request, res: Response) => {
      res.json('Hello world')
    })
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is runing at ${this.app.get('port')} port.`)
    })
  }
}

const server = new Server()
server.start()