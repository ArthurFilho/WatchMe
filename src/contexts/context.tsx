import { useState, createContext } from "react";

interface ContextType {
    HandleGetId: (props:any) => void;
  }

export const ContextContents = createContext({} as ContextType)

export function ContextProvider({children}: any) {

    const [idMovie, setIdMovie] = useState()
    
    function HandleGetId(props: any){
        setIdMovie(props)
    }
    return(
        <ContextContents.Provider
          value={{
            HandleGetId,
          }}
        >
        {children}
        </ContextContents.Provider>
    )
}