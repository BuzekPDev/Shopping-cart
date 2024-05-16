import { useState, useContext } from "react";
import { salePercentage } from "../helpers/salePercentage";
import { BuyButton } from "./BuyButton";
import CartContext from "../context/CartContext";


export function ProductCard({ item }) {

    const [cart, setCart] = useContext(CartContext)
    const [amount,setAmount] = useState(1)

    function amountHandler (val) {
        
        const maxValue = item.stock > 99 ? 99 : item.stock
        let amount = Number(val)

        if (amount > maxValue) amount = maxValue
        if (amount === 0) amount = 1
        console.log(amount)

        setAmount(amount)
    }

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
        <div className="p-4 flex flex-col md:items-center sm:items-center sm:justify-center md:justify-center lg:items-start lg:justify-normal w-full">
            <h1 className="text-3xl font-medium sm:text-center md:text-center lg:text-left w-full">{item.productName}</h1>
            { item.stock > 0 ? (
            <h3 className={`my-4 font-medium sm:text-center md:text-center lg:text-left w-full ${item.stock > 10 ? 'text-green-600' : 'text-amber-600'}`}>Stock: {item.stock < 36 ? item.stock : '>36'}pcs</h3>
            ) : (
                <h3 className="my-4 font-medium text-red-500">Out of stock</h3>
            )    
        }
        
       
            <div className="flex justify-between items-end lg:w-full sm:w-full max-w-[30rem] md:w-[30rem] mt-8">
                <div className={`text-2xl font-medium relative ${item.onSale && 'text-emerald-700'}`}>
                    {item.price},- czk
                    {item.onSale && 
                        <h2 className="text-sm flex">
                            <span className="text-emerald-700 mr-2">{salePercentage(item)}% off</span> 
                            <span className=" line-through decoration-2 text-red-600">{item.originalPrice},- czk</span> 
                        </h2>
                    }
                </div>
                {item.stock > 0 ? (
                    <div className="flex flex-col gap-2 justify-center">
                        <div className='flex justify-center'>
                            <button className="relative font-medium group text-lg flex justify-center items-center w-8 h-8 bg-neutral-200 rounded-l-md" onClick={() => amountHandler(amount-1)} type="button">
                                <span className="absolute z-20 w-full h-full flex justify-center group-hover:text-white transition-colors duration-200 items-center">-</span>
                                <div className="absolute bg-teal-600 w-full h-full rounded-l-md [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-200"></div>
                            </button>
                            <input className="w-14 h-8 text-sm px-2 text-center bg-neutral-100" max={99} min={1} value={amount} onChange={(e) => amountHandler(e.target.value)} type="number"></input>
                            <button className="relative font-medium group text-lg flex justify-center items-center bg-neutral-200 rounded-r-md w-8 h-8" onClick={() => amountHandler(amount+1)} type="button">
                                <span className="absolute z-20 w-full h-full flex justify-center group-hover:text-white transition-colors duration-200 items-center">+</span>
                                <div className="absolute bg-teal-600 w-full h-full rounded-r-md [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-200"></div>
                            </button>
                        </div>

                        <button onClick={() => cartHandler(item, amount)} className='relative group box-border h-[48px] w-[120px] bg-neutral-200 rounded-md p-1'>
                            <span className='text-base z-10 relative text-nowrap group-hover:text-white transition-colors duration-200 font-medium'>{item.released ? "Add to cart" : 'Pre-order'}</span>
                            <div className='absolute w-full h-full bg-teal-600 [transform:rotateY(90deg)] rounded-md group-hover:[transform:rotateY(0deg)] duration-100 top-0 z-[0] left-[0px]'></div>
                        </button>
                    </div>
                ) : (
                    <button disabled className='relative group bg-neutral-400 rounded-md h-[48px] w-[90px] p-1 '>
                        <span className='text-base z-10 text-black relative text-nowrap font-medium'>Sold out</span>
                    </button>
                )}
            </div>
            <ul className="mt-6 bg-neutral-200 rounded-xl py-2 px-4 max-w-[30rem]">
                <h3 className="font-medium">The {item.productName} contains:</h3>
                { item.contents &&
                item.contents.map((content) => (
                    <li className=" font-normal text-base list-disc list-inside" key={content}>{content}</li>
                ))}
            </ul>
           
        </div>
    )
}