'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IdContextValue {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

export const IdContext = createContext<IdContextValue | undefined>(
  undefined
);

interface IdProviderProps {
  children: React.ReactNode;
}

export function IdProvider({ children }: IdProviderProps) {
  const [id, setId] = useState('');

  console.log(id);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
}
