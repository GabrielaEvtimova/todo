import { useState } from "react";
import { Toaster } from "react-hot-toast";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [changeTodoList, setChangeTodoList] = useState(false);

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className={`bg-custom-gradient select-none w-full min-h-screen`}>
        <Header setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
        <div>
          <div className="flex justify-center items-center">
            <AddTodo
              showAddTodo={showAddTodo}
              setShowAddTodo={setShowAddTodo}
              setChangeTodoList={setChangeTodoList}
            />
          </div>
          <div className="flex justify-center mt-16 h-full">
            <TodoList
              showAddTodo={showAddTodo}
              setShowAddTodo={setShowAddTodo}
              changeTodoList={changeTodoList}
              setChangeTodoList={setChangeTodoList}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
