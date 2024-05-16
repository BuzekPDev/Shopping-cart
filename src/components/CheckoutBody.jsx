import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Header } from "./Header"
import { Filler } from "./Filler"
import { CheckoutItem } from "./CheckoutItem"
import { total } from "../helpers/total"
import { CheckoutPopUp } from "./CheckoutPopUp"


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

    const totalPrice = total(cart)

    return (
        <>
            <Header />
            <Filler />
            <div className="flex justify-center">
                <main className="flex mx-auto gap-4 flex-col w-full h-full max-w-[1420px] sm:p-4 md:p-12">
                    {
                        cart.map(item => (
                            <CheckoutItem key={item.id} item={item} amountHandler={amountHandler} deleteHandler={deleteHandler} />
                        ))
                    }
                    <div className="w-full flex flex-col items-end px-8">
                        <div className="flex items-center mb-6">
                            <span>Total:</span>
                            <span className="ml-12 text-2xl font-medium">{totalPrice},- czk</span>
                        </div>
                        <button onClick={checkoutHandler} type="button" className="relative group flex items-center justify-center rounded-lg text-xl font-medium bg-neutral-200 w-32 h-16 xs:w-full">
                            <span className="absolute z-20 group-hover:text-white transition-colors duration-200 cursor-pointer">Checkout</span>
                            <div className="absolute w-full h-full transition-transform duration-200 rounded-lg  [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] bg-teal-600"></div>
                        </button>
                    </div>
                </main>
                {modal && <CheckoutPopUp checkoutHandler={checkoutHandler}/>}
            </div>
        </>
    )
}