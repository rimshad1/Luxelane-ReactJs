import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/Home" },
    { name: "Shop", href: "/Shop" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div className="bg-slate-100 fixed w-full py-5 px-20 sm:px-6 lg:px-8 mx-auto">
      <nav className="flex items-center justify-between">
        <NavLink to="/Home" className="text-2xl font-bold">
          LUXELANE
        </NavLink>
        <ul className="flex text-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => {
                return (
                  "list-none inline-block px-4 font-bold" +
                  (!isActive
                    ? " hover:text-primary font-bold"
                    : " text-primary")
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
