"use client";

import { createContext, useState } from "react";

export type ToggleContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToggleContext = createContext<ToggleContextType | undefined>(
  undefined
);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}
