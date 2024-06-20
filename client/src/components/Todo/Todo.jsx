import React, { useState } from "react";
import PropTypes from "prop-types";
import { fetchDeleteTodo } from "../../services/api-client.js";
import toast from "react-hot-toast";
import Modal from "react-modal";

export default function Todo({
  todo,
  setChangeTodoList,
  setShowAddTodo,
  showAddTodo,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  const deleteTodo = (e, todo) => {
    e.preventDefault();
    fetchDeleteTodo(todo._id);

    toast.success(`Todo has been successfully deleted.`);
    setChangeTodoList(true);
  };

  const handleEditTodo = (todo) => {
    setOnEdit(!onEdit);
    setShowAddTodo(!showAddTodo);
  };

  return (
    <div
      key={todo._id}
      className="shadow-inner shadow-neutral-800 p-4 rounded-md 
      w-[320px] md:w-[700px] sm:w-[500px] lg:w-[720px] xl:w-[850px] mx-auto 
      mb-8"
    >
      <h1
        className="font-bold bg-[#0e1645] text-white rounded-md p-2 px-4 text-xl cursor-pointer"
        onClick={() => setOnEdit(!onEdit)}
      >
        {todo.todoTitle}
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="mt-4 px-4 font-medium text-[13pt]">
            Due date: {new Date(todo.dueDate).toLocaleDateString()}
          </p>
          <p className="mt-1 px-4 font-medium text-[13pt]">
            Priority: {todo.label}
          </p>
        </div>
        <div className="">
          <button className="mt-4 mb-1 py-1 px-[9px] mx-2 bg-[#ffea00] border-2 border-[#0e1645] rounded-md text-sm font-medium shadow-md shadow-black transform hover:scale-110 transition duration-200">
            Complete
          </button>
          <br />
          <button
            className="mt-2 py-1  px-5 mx-2 border-2 border-[#0e1645] rounded-md text-center text-sm font-medium shadow-md shadow-black transform hover:scale-110 transition duration-200"
            onClick={(e) => deleteTodo(e, todo)}
          >
            Delete
          </button>
        </div>
      </div>
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
      {onEdit && (
        <Modal
          isOpen={onEdit}
          className="min-w-fit max-h-fit 
        cursor-pointer select-none
        px-12 py-2
        absolute bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%] rounded-lg outline-none opacity-95 bg-[#ffea00] border-2 border-[#0e1645] shadow-black shadow-lg"
          onRequestClose={() => setOnEdit(false)}
          ariaHideApp={false}
        >
          <h4
            className="font-bold text-xl"
            onClick={() => handleEditTodo(todo)}
          >
            Edit Todo
          </h4>
        </Modal>
      )}
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  setChangeTodoList: PropTypes.func,
  setShowAddTodo: PropTypes.func,
  showAddTodo: PropTypes.bool,
};
