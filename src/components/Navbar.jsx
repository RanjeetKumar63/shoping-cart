import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoA8_KlXNdLtAEODIWGB7KT6sI5O4UlMoxHQ&s"
              className="h-14 border rounded-full"
            />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 gap-8">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 justify-center items-center animate-bounce rounded-full text-white flex ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
