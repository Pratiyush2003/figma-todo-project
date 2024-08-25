import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import BottomBox from "./BottomBox";
import Handle from "./Handle";
import { useDispatch, useSelector } from "react-redux";
import { gettodo } from "../app/features/getUserSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [category, setcategory] = useState("General");

  useEffect(() => {
    dispatch(gettodo());
  }, [dispatch]);
  const { todos } = useSelector((state) => state.app);
  const [colour, setColour] = useState([
    { red: false, green: false, yellow: false, purple: false, gray: false },
  ]);

  return (
    <div className="w-full md:w-5/5 lg:w-3/5 xl:w-2/5 h-screen">
      <Header category={category} />
      <div className="p-4">
      <TodoList todos={todos} />
      <BottomBox colour={colour} setColour={setColour} />
      </div>
      <Footer />
      <Handle
        colour={colour}
        setColour={setColour}
        category={category}
        setcategory={setcategory}
      />
    </div>
  );
};

export default Main;
