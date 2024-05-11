import React, { useState } from "react";
import { List } from "../List/List";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Read book", done: true },
    { id: 2, name: "Write letter", done: false },
    { id: 3, name: "Edit cover", done: false },
  ]);
  const [todoText, setTodoText] = useState("");

  const onChangeInput = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmitTodo = () => {
    setTodos([...todos, { id: todos.length + 1, name: todoText, done: false }]);
    setTodoText("");
  };

  const onChangeBox = (item) => {
    setTodos(
      todos.map((el) => (el.id === item.id ? { ...el, done: !el.done } : el))
    );
  };

  const handleDel = (item) => {
    setTodos(todos.filter((el) => el.id !== item.id));
  };

  return (
    <>
      <h2>ToDo List:</h2>

      <List list={todos} onChangeBox={onChangeBox} handleDel={handleDel} />
      <div>
        <Input value={todoText} onChange={onChangeInput} />

        <Button onClick={onSubmitTodo}>Submit</Button>
      </div>
    </>
  );
};

export default App;
