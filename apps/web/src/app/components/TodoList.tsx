import { FC, FormEvent } from 'react';
import { useTodosQuery } from '../generated/graphql';
import { StyledMain } from '../styles/main.style';
import Button from './Button';
import { TodoForm } from './TodoForm';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const { data, loading, error } = useTodosQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data?.getTodos);

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
    const form = document.querySelector('#form-wrapper');
    console.log(form);
    form?.classList.contains('hidden') ? form?.classList.remove('hidden') : form?.classList.add('hidden');
  };

  return (
    <StyledMain>
      <Button action="create" message="Add TODO" onClick={handleClick}>
        TODO List
      </Button>
      <TodoForm></TodoForm>
      {data?.getTodos?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </StyledMain>
  );
};

export default TodoList;
