import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <>
      <div className={`bg-custom-gradient select-none w-full min-h-screen`}>
        <Header setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />

        <div className="flex justify-center items-center">
          <AddTodo showAddTodo={showAddTodo} />
        </div>
        <div className="flex justify-center mt-16 h-full">
          <TodoList showAddTodo={showAddTodo} setShowAddTodo={setShowAddTodo}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
