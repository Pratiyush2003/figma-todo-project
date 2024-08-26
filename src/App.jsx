import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditModal from "./Components/EditModal";
import Modal from "./Components/Modal";


const App = () => {
  return (
    <div className="flex justify-center h-screen w-full" id="js-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/EditModal/:id" element={<EditModal />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
