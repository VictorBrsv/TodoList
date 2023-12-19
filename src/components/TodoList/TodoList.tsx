import React, { FC } from "react";
import { Todo } from "../../App";
import TodoItem from "./TodoItem/TodoItem";
import TodoPanel from "../TodoPanel/TodoPanel";

interface TodoListProps {
  todos: Todo[];
  editTodo: Todo["id"] | null;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectEditTodo: (id: Todo["id"]) => void;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  editTodo,
  checkTodo,
  deleteTodo,
  selectEditTodo,
  changeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === editTodo) {
          return (
            <TodoPanel
              key={todo.id}
              mode='edit'
              changeTodo={changeTodo}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        }
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectEditTodo={selectEditTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
