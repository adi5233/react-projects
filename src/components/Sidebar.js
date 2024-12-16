import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSideBarOpen = useSelector((state) => state.menu.isSideBarOpen);
  if (!isSideBarOpen) return null;
  return (
    <div className="w-[20rem] shadow-sm h-[100vh] bg-slate-50">Sidebar</div>
  );
};

export default Sidebar;
