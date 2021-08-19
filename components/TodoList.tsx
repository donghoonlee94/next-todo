import React from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { TodoType } from "../types/todo";
import { useCallback, useMemo } from 'react';

interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px soild ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }
`

const TodoList: React.FC<IProps> = ({ todos }) => {
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach(todo => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;
        case "orange":
          orange += 1;
          break;
        case "yellow":
          yellow += 1;
          break;
        case "green":
          green += 1;
          break;
        case "blue":
          blue += 1;
          break;
        case "navy":
          navy += 1;
          break;
        default:
          break;
      }
    });

    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
  }, [todos]);

  // todos가 변경될 때만 함수와 변수를 재연산함

  const todoColorNums = useMemo(getTodoColorNums, [todos]);
  
  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO <span>{todos.length}개</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;