import { Button } from "./ui/button";
import { useState } from "react";
import { useTodos } from "@/lib/hooks";

export default function AddTodoForm() {
  const [newTodo, setNewTodo] = useState("");

  const { handleAddTodo } = useTodos();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(newTodo);
        setNewTodo("");
      }}
      className="  col-[1/3] row-[1/3] "
    >
      <h2 className="font-medium text-[#231d15]"> Add Todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/20 rounded-md my-4 text-lg block w-full px-4 "
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <Button className="w-full">Add to list</Button>
    </form>
  );
}
