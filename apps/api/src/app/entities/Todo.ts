import { ObjectType, Field, Int } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Todo extends BaseEntity {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  body!: string;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false, nullable: true })
  archived: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false, nullable: true })
  completed: boolean;
}
