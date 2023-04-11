import React from "react";
import Sidebar from "../Sidebar";
import RightSide from "../RightSide";

function AppWrapper({ children }) {
  return (
    <div className="flex mx-auto w-3/4 flex-1 gap-8">
      <div className="flex-2 sticky top-0 h-screen w-64">
        <Sidebar />
      </div>
      <div className="flex-3 border border-gray-300 mt-3">
        <div className="body-section">{children}</div>
      </div>
      <div
        className="flex-2 sticky top-0 h-screen mt-3"
        style={{ width: "420px" }}
      >
        <RightSide />
      </div>
    </div>
  );
}

export default AppWrapper;
