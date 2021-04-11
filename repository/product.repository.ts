import { EntityRepository, Repository } from 'typeorm'
import { ProductEntity } from '../database/entities/product.entity'

@EntityRepository(ProductEntity)
export class ProductRepositorie extends Repository<ProductEntity> {
  
}