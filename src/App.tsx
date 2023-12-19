import React, { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoList from "./components/TodoList/TodoList";

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  { id: 3, name: "task 3", description: "description 3", checked: true },
];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [editTodo, setEditTodo] = useState<Todo["id"] | null>(null);

  const selectEditTodo = (id: Todo["id"]) => {
    setEditTodo(id);
  };

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    let newTodos;
    if (todos.length !== 0) {
      newTodos = [
        ...todos,
        {
          id: todos[todos.length - 1].id + 1,
          description,
          name,
          checked: false,
        },
      ];
    } else {
      newTodos = [{ id: 1, description, name, checked: false }];
    }
    setTodos(newTodos);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === editTodo) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setEditTodo(null);
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel mode='add' addTodo={addTodo} />
        <TodoList
          editTodo={editTodo}
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectEditTodo={selectEditTodo}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
