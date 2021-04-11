import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @Column('float')
  price: number
  
  @Column('date')
  published_at: Date;

  @Column('boolean')
  active: boolean
}