import { DataSource } from 'typeorm';
import { Todo } from '../entities/Todo';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 7891,
  username: 'root',
  password: '1234',
  database: 'todo_db',
  entities: [Todo],
  logging: true,
});
