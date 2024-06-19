import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Todo({ todo }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      key={todo._id}
      className="shadow-inner shadow-neutral-800 p-4 rounded-md 
      w-[320px] md:w-[700px] sm:w-[500px] lg:w-[720px] xl:w-[850px] mx-auto 
      mb-8"
    >
      <h1 className="font-bold bg-[#0e1645] text-white rounded-md p-2 px-4 text-xl">
        {todo.todoTitle}
      </h1>
      <p className="mt-4 px-4 font-medium text-[13pt]">
        Due date: {new Date(todo.dueDate).toLocaleDateString()}
      </p>
      <p className="mt-1 px-4 font-medium text-[13pt]">
        Priority: {todo.label}
      </p>
      <h2
        className="mt-4 px-4 text-[13pt] text-violet-900 border-t border-neutral-400 pt-2 hover:underline cursor-pointer"
        onClick={() => setShowDescription(!showDescription)}
      >
        Show description
      </h2>
      {showDescription && (
        <p className=" px-4">
          {todo.description !== "" ? todo.description : "No description"}
        </p>
      )}{" "}
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
};
