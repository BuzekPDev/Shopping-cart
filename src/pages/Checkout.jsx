import { CartContextProvider } from "../context/CartContextProvider"
import { CheckoutBody } from "../components/CheckoutBody"

export function Checkout () {

    document.title = 'Checkout | PokéStore'

    return (
        <div className="flex flex-col min-h-full">
            <CartContextProvider>
                <CheckoutBody />
            </CartContextProvider>
        </div>
    )
}
