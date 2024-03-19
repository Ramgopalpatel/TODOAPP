import { useState } from "react";
import Header from "./components/Header/Header";
import AddItem from "./components/AddItem/AddItem";
import Display from "./components/Display/Display";
import { ToDoList } from "./Store/ToDoList";


function App() {
  const [items, setToDO] = useState([]);

  return (
    <>
      <ToDoList.Provider value={{ items, setToDO }}>
        <Header />
        <AddItem />
        <Display />
      </ToDoList.Provider>
    </>
  );
}

export default App;
