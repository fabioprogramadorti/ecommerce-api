import { getConnection } from 'typeorm'
import { ProductEntity } from '../database/entities/product.entity'
import { ProductRepositorie } from '../repository/product.repository'

export class ProductService {
  private productRepositorie: ProductRepositorie

  constructor() {
    
    this.productRepositorie = getConnection("ecommerce").getCustomRepository(ProductRepositorie)
  }

  public list = async () => {
    const products = await this.productRepositorie.find()
    return products
  }

  public create = async (product: ProductEntity) => {
    const newProduct = await this.productRepositorie.create(product)
    return newProduct
  }

  public get = async (id: number) => {
    const product = await this.productRepositorie.find({id})
    return product
  }

  public update = async (product: ProductEntity, id: number) => {
    const productUpdated = await this.productRepositorie.update(id, product)
    return productUpdated
  }

  public delete = async (id: number) => {
    const product = await this.productRepositorie.find({ id })
    product[0].active = false
    const deletedProduct = await this.productRepositorie.update(id, product[0])
    return deletedProduct 
  }
}