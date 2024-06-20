import PropTypes from "prop-types";
import Select from "react-select";
import { useState } from "react";
import { reactSelectStyles } from "../../services/react-select-styles";
import { addTodo } from "../../services/api-client.js";
import toast from "react-hot-toast";
import Modal from "react-modal";

const options = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
  { value: "None", label: "None" },
];

export default function AddTodo({ showAddTodo, setShowAddTodo, setChangeTodoList }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [todo, setTodo] = useState({
    todoTitle: "",
    id: "",
    _id: "",
    label: "",
    dueDate: null,
    description: "",
    completed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const completedForm = e.currentTarget;

    // Validations
    if (completedForm.todoTitle.value === "") {
      toast.error("Please add a title for your task!");
    } else if (completedForm.label.value === "") {
      toast.error("Please select a priority!");
    } else if (completedForm.dueDate.value === null) {
      toast.error("You have to pick a deadline for your task!");
    } else if (new Date(completedForm.dueDate.value) < new Date() + 1) {
      toast.error("Due date should not be in the past!");

      // Add Todo in MongoDB
    } else {
      try {
        const todoTitle = completedForm.todoTitle.value;
        const id = completedForm.todoTitle.value
          .toLowerCase()
          .replace(/\s/g, "-");
        const label = completedForm.label.value;
        const dueDate = new Date(completedForm.dueDate.value);
        const description = completedForm.description.value;

        addTodo(todoTitle, id, label, dueDate, description).then((todo) =>
          setTodo(todo)
        );
        toast.success(
          `Todo with title ${todo.todoTitle} has been successfully created!`
        );
        setSelectedOption(null);
        setShowAddTodo(!showAddTodo);
        setChangeTodoList(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    showAddTodo && (
      <Modal
        isOpen={showAddTodo}
        className="min-w-fit max-h-fit 
        w-[85%] sm:w-[60%] md:w-[65%] lg:w-[560px]
        p-3 sm:p-6 py-4 
        absolute bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%] rounded-lg outline-none opacity-95 bg-custom-gradient shadow-black shadow-lg"
        onRequestClose={() => setShowAddTodo(false)}
        ariaHideApp={false}
      >
        <div className="grid justify-center items-center ">
          <h1 className="flex items-center py-4 sm:text-4xl text-2xl w-full justify-center rounded-md text-white mb-4 shadow-inner shadow-neutral-900">
            Create New Task
          </h1>

          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add title..."
              className="shadow-md shadow-black w-full py-2 my-4 border-none outline-none rounded-md pl-2 placeholder:text-neutral-500"
              name="todoTitle"
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              value={selectedOption}
              placeholder="Select a priority label"
              styles={reactSelectStyles}
              name="label"
              className="shadow-md shadow-black"
            />

            <input
              type="date"
              className="shadow-md shadow-black py-2 my-4 rounded-md px-2 outline-none w-full text-neutral-500 text-[11pt] valid:text-neutral-800"
              name="dueDate"
            />

            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              className="shadow-md shadow-black w-full outline-none px-2 py-2 rounded-md  placeholder:text-neutral-500"
              placeholder="Add description..."
            ></textarea>

            <button className=" bg-[#ffea00] py-2 border-2 border-[#0e1645] rounded-md w-full font-semibold mt-6 shadow-md shadow-black">
              Add Todo
            </button>
          </form>
        </div>
      </Modal>
    )
  );
}

AddTodo.propTypes = {
  showAddTodo: PropTypes.bool,
  setShowAddTodo: PropTypes.func,
  setChangeTodoList: PropTypes.func,
};
