import { useTodos } from "@/lib/hooks";

export default function Counter() {
  const { totalCompletedTodos, totalNumberOfTodos } = useTodos();
  return (
    <p>
      <b>{totalCompletedTodos}</b>/ {totalNumberOfTodos}
      todos completed
    </p>
  );
}
