import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { reactSelectStyles } from "../../services/react-select-styles";
import PropTypes from "prop-types";
import { fetchEditTodo } from "../../services/api-client";

const options = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
  { value: "None", label: "None" },
];

export default function EditTodo({
  todo,
  confirmEdit,
  setConfirmEdit,
  setChangeTodoList,
  setOnEdit,
  onEdit,
}) {
  const defaultLabelOption = options.find(
    (option) => option.value === todo.label
  );
  const [selectedOption, setSelectedOption] = useState(defaultLabelOption);

  const setDateForValidation = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const cancel = () => {
    setConfirmEdit(!confirmEdit);
    setOnEdit(!onEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completedForm = e.currentTarget;

    // Set date for validations
    const formDate = new Date(completedForm.dueDate.value);
    const setFormDateForValidation = setDateForValidation(formDate);

    const currentDate = new Date();
    const setCurrentDateForValidation = setDateForValidation(currentDate);

    // Validations
    if (completedForm.todoTitle.value === "") {
      toast.error("Please add a title for your task!");
    } else if (completedForm.label.value === "") {
      toast.error("Please select a priority!");
    } else if (completedForm.dueDate.value === "") {
      toast.error("You have to pick a deadline for your task!");
    } else if (setFormDateForValidation < setCurrentDateForValidation) {
      toast.error("Due date should not be in the past!");

      // Edit Todo in MongoDB
    } else {
      try {
        const todoTitle = completedForm.todoTitle.value;
        const id = completedForm.todoTitle.value
          .toLowerCase()
          .replace(/\s/g, "-");
        const label = completedForm.label.value;
        const dueDate = new Date(completedForm.dueDate.value);
        const description = completedForm.description.value;
        fetchEditTodo(
          todo._id,
          todo.completed,
          todoTitle,
          id,
          dueDate,
          label,
          description
        ).then(() => {
          setConfirmEdit(!confirmEdit);
          setChangeTodoList(true);
          setOnEdit(!onEdit);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    confirmEdit && (
      <Modal
        isOpen={confirmEdit}
        className="min-w-fit max-h-fit 
          w-[85%] sm:w-[60%] md:w-[65%] lg:w-[560px]
          p-3 sm:p-6 py-4 
          absolute bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%] rounded-lg outline-none opacity-95 bg-custom-gradient shadow-black shadow-lg"
        onRequestClose={() => setConfirmEdit(false)}
        ariaHideApp={false}
      >
        <div className="grid justify-center items-center ">
          <h1 className="flex items-center py-4 sm:text-4xl text-2xl w-full justify-center rounded-md text-white mb-4 shadow-inner shadow-neutral-900">
            Edit Todo
          </h1>
          {todo && (
            <form className="w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Add title..."
                className="shadow-md shadow-black w-full py-2 my-4 border-none outline-none rounded-md pl-2 placeholder:text-neutral-500"
                name="todoTitle"
                defaultValue={todo.todoTitle}
              />
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                value={selectedOption}
                styles={reactSelectStyles}
                name="label"
                className="shadow-md shadow-black"
              />

              <input
                type="date"
                className="shadow-md shadow-black py-2 my-4 rounded-md px-2 outline-none w-full text-neutral-500 text-[11pt] valid:text-neutral-800"
                name="dueDate"
                defaultValue={
                  new Date(todo.dueDate).toISOString().split("T")[0]
                }
              />

              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                className="shadow-md shadow-black w-full outline-none px-2 py-2 rounded-md  placeholder:text-neutral-500"
                placeholder="Add description..."
                defaultValue={todo.description}
              ></textarea>
              <div className="flex justify-between">
                <button className=" bg-[#ffea00] py-2 border-2 border-[#0e1645] rounded-md w-2/5 font-semibold mt-6 shadow-md shadow-black">
                  Save Changes
                </button>
                <button
                  className="py-2 border-2 border-[#0e1645] rounded-md w-2/5 font-semibold mt-6 shadow-md shadow-black"
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    )
  );
}

EditTodo.propTypes = {
  todo: PropTypes.object,
  setChangeTodoList: PropTypes.func,
  confirmEdit: PropTypes.bool,
  setConfirmEdit: PropTypes.func,
  setOnEdit: PropTypes.func,
  onEdit: PropTypes.bool,
};
