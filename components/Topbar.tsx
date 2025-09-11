"use client";

import React, { useContext } from "react";
import { Button } from "./ui/button";
import { ToggleContext } from "@/app/toggle-povider";

const Topbar = () => {
  const ctx = useContext(ToggleContext);

  const toggle = ctx?.toggle ?? false;
  const setToggle = ctx?.setToggle ?? (() => {});

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className="flex justify-between items-center py-4 px-8 border">
      <div className="flex items-center">
        <h1>BlockchainPoll</h1>
      </div>

      <Button onClick={handleClick}>create poll</Button>
    </div>
  );
};

export default Topbar;
