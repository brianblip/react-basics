import { Button } from "./ui/button";

type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

export default function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
      variant="ghost"
      size="icon"
    >
      ❌
    </Button>
  );
}
