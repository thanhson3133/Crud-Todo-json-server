import React, { Suspense } from "react";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crudtodo from "./pages/Crud-todo";
import BasicSelect from "./pages/test";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/crud-todo" element={< Crudtodo/>} />
          <Route exact path="/mui" element={< BasicSelect/>} />
          <Route exact path="/" element={< SignUp/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
