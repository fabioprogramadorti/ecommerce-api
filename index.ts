import express, { Request, Response } from 'express'
import { ProductController } from './controllers/product.controller'
import { createConnection } from 'typeorm'

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

  public async routes() {

    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "",
      database: "ecommerce",
      entities: ["build/database/entities/**/*.js/"],
      synchronize: true,
      name: "ecommerce"
    })

    this.app.get('/', (req: Request, res: Response) => {
      res.json('Hello world')
    })

    this.app.use('/api/product/', this.productController.router)
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is runing at ${this.app.get('port')} port.`)
    })
  }
}

const server = new Server()
server.start()