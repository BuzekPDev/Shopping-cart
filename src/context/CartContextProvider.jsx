import { useContext, useEffect, useMemo, useState } from "react";
import CartContext from "./CartContext";
import { json } from "react-router";

export function CartContextProvider ({ children }) {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || [] 
    )

    const value = useMemo(() => [cart, setCart], [cart])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}