import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/menuSlice";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu({ nam: "aditys" }));
  };

  return (
    <div className="h-20 shadow-md flex justify-between">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsB8HM8jAceDhu3oLLuvumHRJ8obiQUOIswXYWIEGTUA&s"
          alt="logo"
          className="w-8 h-8 mx-8 cursor-pointer"
          onClick={handleMenuClick}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJpBAU3ikusFardpDW_tw9EO3B4AxwxIhvvQTo12l_Q&s"
          alt="logo"
          className="h-20"
        />
      </div>
      <div className="flex py-4 mr-10 w-1/2">
        <Search />
      </div>
    </div>
  );
};

export default Header;
