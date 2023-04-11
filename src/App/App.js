import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";
import Bookmark from "../pages/Bookmark";
import TwitterBlue from "../pages/TwitterBlue";
import Profile from "../pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/twitter-blue" element={<TwitterBlue />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
