import { ITodo } from '@todo-app/common';
import React, { useState, ChangeEvent, FormEvent, createRef, useRef, SyntheticEvent } from 'react';
import { useCreateTodoMutation } from '../generated/graphql';
import { StyledForm } from '../styles/form.style';
import Button from './Button';
import { useApolloClient } from '@apollo/client';

const initalState: ITodo = {
  title: '',
  body: '',
};

export const TodoForm: React.FC = () => {
  const [state, setState] = useState(initalState);
  const [createTodo] = useCreateTodoMutation();
  const apolloClient = useApolloClient();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await createTodo({
      variables: { todo: state },
    });
    setState(initalState);
    apolloClient.resetStore();
  };

  return (
    <div id="form-wrapper" className="hidden">
      <StyledForm>
        <input
          type="text"
          value={state?.title!}
          name="title"
          className="input-field"
          placeholder="Title"
          onChange={(ev) => setState({ ...state, title: ev.target.value })}
        />
        <input
          type="text"
          value={state?.body!}
          name="body"
          className="input-field"
          placeholder="Body"
          onChange={(ev) => setState({ ...state, body: ev.target.value })}
        />
        <Button type="submit" onClick={handleSubmit} action={'create'} message="Create" />
      </StyledForm>
    </div>
  );
};
