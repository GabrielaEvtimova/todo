import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  return (
    <div className="bg-custom-gradient w-screen h-screen select-none">
      <Header setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
      <div className=" flex justify-center items-center">
        <AddTodo showAddTodo={showAddTodo} />
      </div>
    </div>
  );
}

export default App;
