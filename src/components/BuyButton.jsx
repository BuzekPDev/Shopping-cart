import { useContext } from "react"
import CartContext from "../context/CartContext"


export function BuyButton ({ item }) {

    const [cart, setCart] = useContext(CartContext)

    function cartHandler (item, amount = 1) {
        const inCart = cart.find(cartItem => cartItem.id === item.id)
        if (inCart) return

        const addedItem = {
            id: item.id,
            productName: item.productName,
            price: item.price,
            originalPrice: item.originalPrice,
            onSale: item.onSale,
            stock: item.stock,
            type: item.type,
            image: item.image.first,
            qty: amount
        }

        setCart([...cart, addedItem])
    }

    return (
        <>
        {item.stock > 0 ? (
            <button onClick={() => cartHandler(item)} className='relative group box-border h-[48px] w-[90px] mb-4 bg-neutral-200 rounded-md p-1'>
                <span className='text-base z-10 relative text-nowrap group-hover:text-white transition-colors duration-200 font-medium'>{item.released ? "Buy now" : 'Pre-order'}</span>
                <div className='absolute w-full h-full bg-teal-600 [transform:rotateY(90deg)] rounded-md group-hover:[transform:rotateY(0deg)] duration-100 top-0 z-[0] left-[0px]'></div>
            </button>
        ) : (
            <button disabled className='relative group bg-neutral-400 rounded-md h-[48px] w-[90px] mb-4 p-1 '>
                <span className='text-base z-10 text-black relative text-nowrap font-medium'>Sold out</span>
            </button>
        )}
        </>
    )
}