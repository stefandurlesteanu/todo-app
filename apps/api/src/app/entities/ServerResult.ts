import { ObjectType, Field, Int } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class ServerResult {
  @Field()
  @Column()
  success!: boolean;
}
