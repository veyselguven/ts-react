import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
//  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: "t1", text: "finish the course" }];
  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((prev) => {
      return [...prev, { id: Math.random().toString(), text: text }];
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      Hello World
      {/* A Component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
