import { CartContextProvider } from "../context/CartContextProvider"
import { CheckoutBody } from "../components/CheckoutBody"

export function Checkout () {

    return (
        <>
            <CartContextProvider>
                <CheckoutBody />
            </CartContextProvider>
        </>
    )
}
