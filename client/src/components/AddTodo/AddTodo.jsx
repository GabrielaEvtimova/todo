import PropTypes from "prop-types";
import Select from "react-select";
import { useState } from "react";
import { reactSelectStyles } from "../../services/react-select-styles";

const options = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export default function AddTodo({ showAddTodo }) {
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    showAddTodo && (
      <div className="grid mt-28 justify-center items-center shadow-black shadow-lg w-[520px] md:w-[720px] py-4 pb-8 ">
        <h1 className="flex items-center py-4 text-4xl w-full justify-center rounded-md text-white mb-4 shadow-inner shadow-neutral-900 mt-8">
          Create New Task
        </h1>

        <form className="w-full" onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Add title..."
            className="w-[500px] md:w-[560px] py-2 my-4 border-none outline-none rounded-md pl-2 placeholder:text-neutral-500"
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            value={selectedOption}
            placeholder="Select a priority label"
            styles={reactSelectStyles}
          />

          <input
            type="date"
            className="py-2 my-4 rounded-md px-2 outline-none w-full text-neutral-800 text-[11pt]"
            placeholder="Due date"
          />
          <textarea
            name="textArea"
            id="textArea"
            cols="30"
            rows="5"
            className="w-full outline-none px-2 py-2 rounded-md  placeholder:text-neutral-500"
            placeholder="Add description..."
          ></textarea>

          <button className=" bg-[#ffea00] py-2 my-2 rounded-md mb-2 w-full font-semibold mt-8">
            Add Todo
          </button>
        </form>
      </div>
    )
  );
}

AddTodo.propTypes = {
  showAddTodo: PropTypes.bool,
};
