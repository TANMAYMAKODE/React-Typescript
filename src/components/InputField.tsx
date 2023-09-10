import "./styles.css";

import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({todo, setTodo}: Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task!"
        className="input_box"
      ></input>
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
