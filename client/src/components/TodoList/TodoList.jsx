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
        className={`flex justify-center mb-12 text-4xl text-white ${
          !showAddTodo ? "mt-80" : "mt-2"
        } ${todos.length > 0 && !showAddTodo && "mt-[80px]"}`}
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
            <p
              className="text-center w-[530px] md:w-[720px]"
              onClick={() => setShowAddTodo(!showAddTodo)}
            >
              Great job! It seems you have completed all todos or never used
              this TodoApp!{" "}<span className="hover:underline text-center cursor-pointer">Do you want to create one?</span>
            </p>
        )}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  showAddTodo: PropTypes.bool,
  setShowAddTodo: PropTypes.func,
};
