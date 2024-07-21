import React, { useState } from "react";

// Todoの型定義
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTodo }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-col">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center mb-2"
          >
            <span className="ml-2 w-64 truncate text-left">{todo.title}</span>
            <button
              className="ml-2 px-2 py-1 bg-blue-200 rounded w-20"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Component: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "7c3d8c4a-ff5c-4b7e-9156-7615b54a0b99",
      title: "First Todo",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "6f7d2a22-12f1-4ebc-8f69-912bb2ab9489",
      title: "Second Todo",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const handleClickAdd = (todoTitle: string) => {
    setTodos((prevTodos) =>
      [
        ...prevTodos,
        {
          id: `${Math.random().toString(36).substr(2, 9)}`,
          title: todoTitle,
          completed: false,
          createdAt: new Date(),
        },
      ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    );
  };

  const handleClickDelete = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">一覧</h1>
        <button
          className="px-4 py-2 bg-blue-200 rounded"
          onClick={() => handleClickAdd("New Todo")}
        >
          Add Todo
        </button>
      </div>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleClickDelete}
      />
    </div>
  );
};
