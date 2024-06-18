import PropTypes from "prop-types";

function Header({ setShowAddTodo, showAddTodo }) {
  return (
    <div className="flex mx-auto justify-between select-none">
      <div className="w-full">
        <div
          className="flex justify-between font-bold text-2xl bg-[#0e1645] py-5 
  lg:px-72 md:px-40 sm:px-24 px-16 text-neutral-100 shadow-lg shadow-white"
        >
          <h2 className="mt-[6px] cursor-pointer">
            <span className="bg-[#ffea00] text-black p-1 rounded-md font-bold">
              Todo
            </span>{" "}
            App
          </h2>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 fill-white cursor-pointer transform hover:scale-110 transition duration-200"
            onClick={() => {
              setShowAddTodo(!showAddTodo);
            }}
          >
            <path
              d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fillRule="nonzero"
            />
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
