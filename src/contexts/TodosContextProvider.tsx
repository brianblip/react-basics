import { Todo } from "@/lib/types";
import React, { createContext, useEffect, useState } from "react";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  totalCompletedTodos: number;
  handleAddTodo: (newTodo: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  //initial todos

  const initialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  };
  //state
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  //derive states
  const totalNumberOfTodos = todos.length;
  const totalCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  //event handlers / actions
  const handleAddTodo = (newTodo: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: newTodo,
          isCompleted: false,
        },
      ]);

      console.log("New todo added: ", newTodo);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //side effect
  /*  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://bytegrad.com/course-assets/api/todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []); */

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        totalCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
