import { useApolloClient } from '@apollo/client';
import { ITodo } from '@todo-app/common';
import { FC, FormEvent, useState } from 'react';
import { useDeleteTodoMutation } from '../generated/graphql';
import { StyledTask } from '../styles/task.style';
import Button from './Button';

export const TodoItem: FC<ITodo> = ({ id, title, body, archived, completed }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [deleteTodo] = useDeleteTodoMutation();
  const apolloClient = useApolloClient();

  const handleDelete = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await deleteTodo({
      variables: { id: id! },
    });
    if (result.data?.deleteTodo.success) {
      apolloClient.resetStore();
    }
  };

  return (
    <StyledTask>
      <div className="content">
        <h2>{title}</h2>
      </div>
      <div className="actions">
        <Button action="update" message="Update" onClick={handleDelete} />
        <Button action="delete" message="Delete" onClick={handleDelete} />
      </div>
    </StyledTask>
  );
};

export default TodoItem;
