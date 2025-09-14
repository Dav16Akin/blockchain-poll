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
    <div className="flex justify-between items-center py-4 px-8 border-b">
      <div className="flex items-center">
        <h1>Blockchain Polls</h1>
      </div>

      <Button onClick={handleClick}>Create Poll</Button>
    </div>
  );
};

export default Topbar;
