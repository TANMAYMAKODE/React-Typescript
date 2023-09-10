import "./App.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import InputField from "./components/InputField";
import React from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Tasksify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
