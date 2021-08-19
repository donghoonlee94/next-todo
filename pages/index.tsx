import { NextPage } from 'next';
import React from 'react';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';

const todos: TodoType[] = [
  { id: 1, text: '마트가서 장보기', color: "red", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;