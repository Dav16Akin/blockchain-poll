"use client";

import { createContext, useState } from "react";

export type SelectedPollContextType = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

export const SelectedContext = createContext<
  SelectedPollContextType | undefined
>(undefined);

export function SelectedProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(0);

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
}
