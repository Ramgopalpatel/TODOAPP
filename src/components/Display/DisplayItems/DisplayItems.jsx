import React, { useContext } from "react";
import { ToDoList } from "../../../Store/ToDoList";
import { MdAutoDelete,MdDelete  } from "react-icons/md";

const DisplayItems = () => {
  const toDo = useContext(ToDoList);

  const handleDeleteItem = (deleteitem) => {
    const newToList = toDo.items.filter((item, index) => index !== deleteitem);
    toDo.setToDO(newToList);
  };
  return (
    <>
      {toDo.items.map((item, index) => {
        return (
          <div className="mt-10 flex justify-evenly" key={index}>
            <div className="w-[22rem] px-5">{item.text}</div>
            <div className="w-[8rem]">{item.date}</div>
            <div>
              <button
                type="submit"
                className="border w-20 rounded bg-red-600 hover:bg-red-800 text-white font-bold flex justify-center py-1 "
                onClick={() => handleDeleteItem(index)}
              >
                <MdAutoDelete className="animate-ping" /> <MdDelete size={25}/>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayItems;
