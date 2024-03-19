import React, { useContext, useRef } from "react";
import { ToDoList } from "../../Store/ToDoList";
import { MdAddAlert,MdAddAlarm } from "react-icons/md";

const AddItem = () => {
  const toDo = useContext(ToDoList);

  const text = useRef("");
  const date = useRef("");

  const addItem = () => {
    toDo.setToDO([
      ...toDo.items,
      { text: text.current.value, date: date.current.value },
    ]);
  };

  const submitForm = (event) => {
    event.preventDefault();
    addItem();
    text.current.value = "";
    date.current.value = "";
  };
  return (
    <>
      <form className="mt-10 flex justify-evenly" onSubmit={submitForm}>
        <div className="w-[22rem] flex justify-center">
          <input
            type="text"
            className="border px-2"
            placeholder="Enter here..."
            ref={text}
            required
            minLength={3}
          />
        </div>
        <div className="w-[8rem] flex justify-center">
          <input type="date" className="border px-1" ref={date} required />
        </div>
        <div>
          <button
            type="submit"
            className="border w-20 rounded bg-green-600 hover:bg-green-800 text-white font-bold flex justify-center py-1 "
          >
            <MdAddAlert className="animate-ping" /> <MdAddAlarm size={25}/>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItem;
