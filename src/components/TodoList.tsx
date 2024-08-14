import DeleteButton from "./DeleteButton";

import { useTodos } from "@/lib/hooks";

export default function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodos();

  return (
    <ul>
      {todos.length === 0 && (
        <li className="flex items-center justify-center h-full text-lg font-semibold">
          No todos yet
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between h-12 px-8 text-lg border-b cursor-pointer border-black/20"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
