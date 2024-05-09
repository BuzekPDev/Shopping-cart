import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Error } from "./ErrorPage"
import etb from '../assets/ETB/SV1_ETB_01.webp'
import tin from '../assets/TINS/PAF_TIN_03.webp'

export function Product({ products }) {

    function getPercent (originalPrice, price) {
        const ogPrice = Number(originalPrice)
        const newPrice = Number(price)
        
        const dif = ogPrice - newPrice
        const avg = (ogPrice+newPrice)/2
        const percentage = Math.floor((dif/avg)*100)
        console.log(percentage)

        return percentage
    }

    return (
            <>
            {products.map(item => (
                <div key={self.id} className='flex flex-col h-full border-black border-2 md:pt-4'>
                    <Link to={`products/${item.type}/${item.id}`}>
                        <img className='mb-4 scale-[65%] hover:scale-[75%] transition-transform duration-200' src={item.image} />
                        <h3 className='text-center px-4 lg:text-xl sm:text-xl font-medium md:text-xl text-wrap'>{item.productName}</h3>
                    </Link>
                    {item.stock > 0 ? (
                        <h3 className='text-green-600 font-medium text-center'>Stock: {item.stock > 36 ? '>36' : item.stock}pcs</h3>
                    ) : (
                        <h3 className=' font-medium text-center text-red-500'>Sold out</h3>
                    )}
                    <div className='flex justify-end h-full flex-col'>
                        <div className='flex justify-between h-fit sm:justify-end sm:flex-col mt-4 items-center mx-4'>
                            <h3 className={`xl:text-xl lg:text-lg md:text-xl sm:text-xl mb-4 block ${item.onSale ? 'text-emerald-700' : 'text-black'} border-transparent border-2 font-medium text-yello w-700 p-2 relative`}>
                                {item.onSale &&
                                    <span className='absolute text-base text-red-600 p-1 leading-none top-[-10px] left-[-2px] font-medium line-through decoration-2'>
                                        {item.originalPrice}
                                    </span>
                                }
                                {item.price},- czk
                            </h3>
                            {item.stock > 0 ? (
                                <button className='relative group box-content mb-4 border-black border-2 p-2'>
                                    <span className='xl:text-xl lg:text-lg md:text-lg sm:text-xl z-10 relative group-hover:text-white transition-colors duration-200 font-medium'>{item.released ? "Buy now" : 'Pre-order'}</span>
                                    <div className='absolute w-full h-full bg-teal-600 [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-100 top-0 z-[0] left-[0px]'></div>
                                </button>
                            ) : (
                                <button disabled className='relative group bg-gray-300 mb-4 border-black border-2 p-2'>
                                    <span className='xl:text-xl lg:text-lg md:text-lg sm:text-xl z-10 text-black relative font-medium'>Unavailable</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            </>
    )
}