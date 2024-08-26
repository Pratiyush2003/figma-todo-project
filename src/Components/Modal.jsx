import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { createtodo } from "../app/features/getUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Modal = ({ onClose, category }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { todos } = useSelector((state) => state.app);
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const Addtodo = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.ceil(Math.random() * 10000),
      todo,
      category,
    };
    dispatch(createtodo(obj));
    setTodo("");
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        handleClose();
      }
    };
     document.addEventListener("mousedown" , handler);
     return() => {
      document.removeEventListener("mousedown", handler)
     }
  },[])

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div ref={menuRef}
        className={`bg-white rounded-lg p-6 max-w-sm w-full h-auto flex flex-col 
          justify-between transform transition-transform duration-300 ease-out  ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
      >
        <h2
          className="text-xl font-bold cursor-pointer mb-4 text-gray-800"
          onClick={handleClose}
        >
          Add Todo
        </h2>
        <textarea
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4 text-gray-700"
          placeholder="Enter your text here..."
        ></textarea>
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleClose}
            className="text-blue-500 font-bold  px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={Addtodo}
            className="text-blue-500 font-bold px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
