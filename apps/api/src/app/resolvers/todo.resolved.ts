import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { dataSource } from '../config/ormconfig';
import { ServerResult } from '../entities/ServerResult';
import { Todo } from '../entities/Todo';

@InputType()
class TodoInput {
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  body: string;
  @Field({ nullable: true })
  archived: boolean;
  @Field({ nullable: true })
  completed: boolean;
}

@Resolver()
export class TodoResolver {
  @Query(() => Todo, { nullable: true })
  async getTodo(@Arg('id', () => String) id: string): Promise<Todo | null> {
    const todos = await dataSource.manager.findOneBy(Todo, {
      id,
    });
    return todos;
  }

  @Query(() => [Todo], { nullable: true })
  async getTodos(): Promise<Todo[]> {
    const todos = await dataSource.manager.find(Todo);
    return todos.filter((todo) => !todo.archived);
  }

  @Mutation(() => Todo)
  async createTodo(@Arg('todo') todo: TodoInput) {
    const newTodo = await dataSource.manager.save(Todo, todo);
    return newTodo;
  }

  @Mutation(() => Todo)
  async updateTodo(@Arg('id') id: string, @Arg('todo') todo: TodoInput): Promise<Todo> {
    await dataSource.manager.update(Todo, { id }, todo);
    const todoData = dataSource.manager.findOneBy(Todo, { id });
    return todoData;
  }

  @Mutation(() => ServerResult)
  async deleteTodo(@Arg('id') id: string): Promise<ServerResult> {
    const result = await dataSource.manager.delete(Todo, { id });
    return { success: !!result.affected };
  }
}
