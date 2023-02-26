import { createContext, useContext, useState } from "react"

const cartContext = createContext();

export function CartContextProvider({children}){

    const [cartCountData , setCartCountData] = useState(0);
    
    return (
        <cartContext.Provider value={cartCountData}>
            {children}
        </cartContext.Provider>
    )
}

export function SharedData(){
    return useContext(cartContext);
}