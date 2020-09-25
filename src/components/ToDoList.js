import React from "react";

//Import components
import Todo from "./Todo";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todos) => (
          <Todo text={todos.text} key={todos.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
