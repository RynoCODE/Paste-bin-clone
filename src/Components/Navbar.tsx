"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-14 px-5 shadow">
      <h1 className="text-xl font-extrabold">UniCode</h1>
      <div className="flex justify-between items-center gap-4">
        <a href="https://github.com/RynoCODE/Paste-bin-clone">Contribute</a>
      </div>
    </nav>
  );
};

export default Navbar;
