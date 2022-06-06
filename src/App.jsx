import React, { Suspense } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Search2 from "./pages/Search2";
import Admin from "./pages/Admin";
import CompleteProfile from "./pages/CompleteProfile";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/search2" element={<Search2 />} />
          <Route exact path="/quantri" element={<Admin />} />
          <Route exact path="/hoanthienhoso" element={<CompleteProfile />} />
          <Route exact path="/baikiemtra" element={<TestPage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
