import React, { useContext } from "react";
import DisplayItem from "./DisplayItems/DisplayItems";
import DisplayMessage from "./DisplayMessage/DisplayMessage";
import { ToDoList } from "../../Store/ToDoList";

const Display = () => {
  const toDo=useContext(ToDoList)
  return (
    <>
      {toDo.items.length!==0?<DisplayItem />:
      <DisplayMessage />}
    </>
  );
};

export default Display;
