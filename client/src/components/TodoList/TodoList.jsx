import React, { useEffect, useState } from "react";
import { getTodos } from "../../services/api-client";
import Todo from "../Todo/Todo";
import PropTypes from "prop-types";

export default function TodoList({ showAddTodo, setShowAddTodo }) {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos([...todos]));
  }, []);

  return (
    <div className={`${!showAddTodo && "min-h-[84vh]"}`}>
      <h1
        className={`flex justify-center mb-12 text-4xl text-white font-semibold ${
          !showAddTodo ? "mt-80" : "mt-2"
        } ${todos.length > 1 && !showAddTodo && "mt-[80px]"}`}
      >
        Todo List
      </h1>
      <div className="pb-28">
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <div key={todo._id}>
                <Todo todo={todo} />
              </div>
            );
          })
        ) : (
          <p className="flex justify-center pb-4">
            Good job! All todos are completed!
            <span className="pl-1 hover:underline cursor-pointer" onClick={() => setShowAddTodo(!showAddTodo)}>
              Do you want to create one?
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  showAddTodo: PropTypes.bool,
  setShowAddTodo: PropTypes.func
};
