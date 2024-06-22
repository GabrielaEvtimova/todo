import React, { useEffect, useState } from "react";
import { getTodos } from "../../services/api-client";
import Todo from "../Todo/Todo";
import PropTypes from "prop-types";

export default function TodoList({
  showAddTodo,
  setShowAddTodo,
  changeTodoList,
  setChangeTodoList,
}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos([...todos]));
    if (changeTodoList) {
      getTodos().then((todos) => setTodos([...todos]));
      setChangeTodoList(false);
    }
  }, [changeTodoList]);

  const completedTodos =
    todos.length > 0 && todos.filter((todo) => todo.completed === true).length;

  return (
    <div className={`${!showAddTodo && "min-h-[84vh]"}`}>
      <h1
        className={`flex justify-center text-center ${
          completedTodos === 0 ? "mb-12" : "mb-4"
        } text-3xl sm:text-4xl md:text-6xl text-white
        ${
          todos.length > 0
            ? "mt-[80px]"
            : " absolute bottom-[60%] translate-y-[60%] right-[50%] translate-x-[50%]"
        }`}
      >
        Todo List
      </h1>
      {completedTodos !== 0 && (
        <p className="flex justify-center text-lg text-white mb-12 md:text-2xl font-thin text-opacity-70">
          {todos.length > 0 &&
            (completedTodos === 1
              ? `${completedTodos} task complete. Nice work!`
              : `${completedTodos} tasks complete. Nice work!`)}
        </p>
      )}

      <div className="pb-28 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-center justify-center py-4">
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <div key={todo._id}>
                <Todo
                  todo={todo}
                  setChangeTodoList={setChangeTodoList}
                  changeTodoList={changeTodoList}
                />
              </div>
            );
          })
        ) : (
          <div className="text-center w-full px-4 absolute bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%] md:text-2xl">
            <p
              className="mt-4"
              onClick={() => setShowAddTodo(!showAddTodo)}
            >
              Great job! It seems you have completed all todos! Or maybe you
              have never used this TodoApp?{" "}
            </p>
            <p className="hover:underline text-center cursor-pointer text-violet-900 py-2">
              Do you want to create one?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  showAddTodo: PropTypes.bool,
  setShowAddTodo: PropTypes.func,
  changeTodoList: PropTypes.bool,
  setChangeTodoList: PropTypes.func,
};
