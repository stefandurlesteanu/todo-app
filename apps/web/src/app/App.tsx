import { FC } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { useTodosQuery } from './generated/graphql';
import { StyledSection } from './styles/tasks.style';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
