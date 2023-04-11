import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const pathName = location?.pathname;

  const addSelectedClass = (path) => {
    return pathName === path ? "text-blue-500" : "";
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <ul className="flex-grow">
        <li>
          <Link
            to="/"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/"
            )}`}
          >
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/explore"
            )}`}
          >
            <FaCompass className="mr-2" /> Explore
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/notifications"
            )}`}
          >
            <FaBell className="mr-2" /> Notifications
          </Link>
        </li>
        <li>
          <Link
            to="/messages"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/messages"
            )}`}
          >
            <FaEnvelope className="mr-2" /> Messages
          </Link>
        </li>
        <li>
          <Link
            to="/bookmark"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/bookmark"
            )}`}
          >
            <FaBookmark className="mr-2" /> Bookmark
          </Link>
        </li>
        <li>
          <Link
            to="/twitter-blue"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/twitter-blue"
            )}`}
          >
            <FaTwitter className="mr-2" /> Twitter Blue
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`flex items-center px-4 py-3 text-2xl hover:bg-gray-200 hover:text-blue-500 rounded-full ${addSelectedClass(
              "/profile"
            )}`}
          >
            <FaUser className="mr-2" /> Profile
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-center px-4 py-3 border-t">
        <span className="text-gray-600 whitespace-nowrap">
          &copy; 2023 Sabir Hussain.
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
