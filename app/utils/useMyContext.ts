import { useContext } from "react";
import { myContext } from "./ContextProvider";

const useMyContext = () => {
    const context = useContext(myContext)
    if (!context) {
        throw new Error('Parent provider not found !');
      }
    return context;
}

export default useMyContext