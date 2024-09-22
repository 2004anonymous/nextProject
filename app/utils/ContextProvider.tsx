import React, { useState } from "react";
import {ReactNode } from "react";

type ProviderProp = {
  children: ReactNode;
};

type MyContextType = {
  refetch: boolean;
  setRefetch: (refetch: boolean) => void;
};
const myContext = React.createContext<MyContextType | undefined>(undefined);

const ContextProvider = ({children}: ProviderProp) => {
  const [refetch, setRefetch] = useState(false)
  return (
    <myContext.Provider value={{refetch, setRefetch}}>
      {children}
    </myContext.Provider>
  )
};

export { ContextProvider, myContext };
