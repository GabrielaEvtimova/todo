import PropTypes from "prop-types";

function Header({ setShowAddTodo, showAddTodo }) {
  return (
    <div
      className="flex mx-auto justify-between select-none fixed 
    w-full opacity-90"
    >
      <div className="w-full">
        <div
          className="flex space-x-8 font-bold text-2xl bg-[#0e1645] py-5 
   text-neutral-100 shadow-lg shadow-white
    px-12 items-center"
        >
          <h2>
            <span className="bg-[#ffea00] text-black p-1 rounded-md font-bold ">
              Todo
            </span>{" "}
            App
          </h2>

          <svg
            onClick={() => {
              setShowAddTodo(!showAddTodo);
            }}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 fill-white cursor-pointer transform hover:scale-110 transition duration-200"
          >
            <g data-name="51.Add">
              <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
              <path d="M11 6h2v12h-2z" />
              <path d="M6 11h12v2H6z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  setShowAddTodo: PropTypes.func,
  showAddTodo: PropTypes.bool,
};
