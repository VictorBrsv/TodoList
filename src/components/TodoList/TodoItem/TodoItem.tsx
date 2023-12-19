import React, { FC } from "react";
import { Todo } from "../../../App";
import { Button } from "../../Button/Button";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectEditTodo: (id: Todo["id"]) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectEditTodo,
}) => {
  return (
    <div className={styles.todo_item_container}>
      <div>
        <div
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? "line-through" : "none",
          }}
          onClick={() => checkTodo(todo.id)}
          className={styles.todo_item_title}
        >
          {todo.name}
        </div>
        <div className={styles.todo_item_description}>{todo.description}</div>
      </div>
      <div className={styles.todo_item_button_container}>
        <Button color={"orange"} onClick={() => selectEditTodo(todo.id)}>
          EDIT
        </Button>
        <Button color={"red"} onClick={() => deleteTodo(todo.id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
