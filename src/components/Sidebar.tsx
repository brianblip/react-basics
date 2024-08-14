import AddTodoForm from "./AddTodoForm";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#F8FDCF] border-l border-black/10 px-5 pt-6 pb-5">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {" "}
        <Button className="w-full">Log in</Button>
        <Button className="w-full">Register</Button>
      </div>
    </section>
  );
}
