import { useContext, useState, useMemo } from "react"
import CartContext from "../context/CartContext"
import { Header } from "./Header"
import { Filler } from "./Filler"
import { CheckoutItem } from "./CheckoutItem"
import { total } from "../helpers/total"
import { CheckoutPopUp } from "./CheckoutPopUp"
import { Footer } from "./Footer"
import { Link } from "react-router-dom"


export function CheckoutBody() {

    const [cart, setCart] = useContext(CartContext)
    const [modal, setModal] = useState(false)

    function amountHandler(val, item) {

        const maxValue = item.stock > 99 ? 99 : item.stock
        let amount = Number(val)

        if (amount > maxValue) amount = maxValue
        if (amount === 0) amount = 1

        const updatedQty = structuredClone(cart)
        const currentItem = updatedQty.find(curr => curr.id === item.id)
        const index = updatedQty.indexOf(currentItem)
        updatedQty[index].qty = amount

        setCart(updatedQty)
    }

    function deleteHandler (item) {

        const cartCopy = structuredClone(cart)
        const index = cart.indexOf(item)
        
        console.log(item)
        console.log(index)
        cartCopy.splice(index,1)

        setCart(cartCopy)
    }

    function checkoutHandler () {
        const body = document.querySelector('body')
        body.style.overflow = body.style.overflow === 'hidden' ? 'visible' : 'hidden'

        setModal(!modal)
    }

    const totalPrice = useMemo(() => total(cart),[cart])

    return (
        <>
            <Header />
            <Filler />
            <div className="flex flex-1 justify-center">
                <main className="flex m-auto gap-4 flex-col w-full h-full min-h-[30rem] max-w-[1420px] sm:p-4 md:p-12">
                    {
                        cart.map(item => (
                            <CheckoutItem key={item.id} item={item} amountHandler={amountHandler} deleteHandler={deleteHandler} />
                        ))
                    }
                    { cart.length ? (
                    <div className="w-full flex flex-col items-end px-8">
                        <div className="flex items-center mb-6">
                            <span>Total:</span>
                            <span className="ml-12 text-2xl font-medium">{totalPrice},- czk</span>
                        </div>
                        <button onClick={checkoutHandler} type="button" className="relative group flex items-center justify-center rounded-lg text-xl font-medium bg-neutral-200 w-32 h-16 xs:w-full">
                            <span className="absolute z-10 group-hover:text-white transition-colors duration-200 cursor-pointer">Checkout</span>
                            <div className="absolute w-full h-full transition-transform duration-200 rounded-lg  [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] bg-teal-600"></div>
                        </button>
                    </div>
                    ) : (
                    <div className="h-full w-full text-center m-auto">
                        <h1 className="text-3xl font-medium mb-8">No products in cart</h1>
                        <Link to='/' className="relative group flex m-auto items-center justify-center rounded-lg text-base font-medium bg-neutral-200 w-44 h-12">
                            <span className="absolute z-10 group-hover:text-white transition-colors duration-200 cursor-pointer">Back to shopping</span>
                            <div className="absolute w-full h-full transition-transform duration-200 rounded-lg  [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] bg-teal-600"></div>
                        </Link>
                    </div>
                    )}
                </main>
                {modal && <CheckoutPopUp checkoutHandler={checkoutHandler}/>}
            </div>
            <Footer />
        </>
    )
}