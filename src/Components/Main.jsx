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
  
  const Inbox = todos.filter((p) => p.category == "Inbox");
  const Family = todos.filter((p) => p.category == "Family");
  const Shopping = todos.filter((p) => p.category == "Shopping");
  const Personal = todos.filter((p) => p.category == "Personal");
  const Work = todos.filter((p) => p.category == "Work");

  const [colour, setColour] = useState([
    { red: false, green: false, yellow: false, purple: false, gray: false },
  ]);

  const [toggleStates, setToggleStates] = useState(
    todos.reduce((acc, todo) => ({ ...acc, [todo.id]: false }), {})
  );

  const handleToggle = (id) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/5 h-screen">
      <Header category={category} />
      <div className="p-4">
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          toggleStates={toggleStates}
          setToggleStates={setToggleStates}
        />
        <BottomBox
          colour={colour}
          setColour={setColour}
          Inbox={Inbox}
          Family={Family}
          Shopping={Shopping}
          Personal={Personal}
          Work={Work}
        />
      </div>
      <Footer />
      <Handle
        Inbox={Inbox}
        Family={Family}
        Shopping={Shopping}
        Personal={Personal}
        Work={Work}
        colour={colour}
        setColour={setColour}
        category={category}
        setcategory={setcategory}
        handleToggle={handleToggle}
        toggleStates={toggleStates}
        setToggleStates={setToggleStates}
      />
    </div>
  );
};

export default Main;
