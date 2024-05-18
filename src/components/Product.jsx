import { Link} from "react-router-dom"
import { BuyButton } from "./BuyButton"

export function Product({ products }) {

    return (
            <>
            {products.map((item, id) => (
                <div key={self.id} className='flex flex-col h-full border-neutral-300 border-2 rounded-lg md:pt-4'>
                    <Link to={`products/${item.type}/${item.id}`}>
                        <img loading={id===0 ? "eager" : "lazy"} height={'200px'} width='200px' className='m-auto w-[200px] h-auto flex-1 scale-[65%] hover:scale-[75%] transition-transform duration-200' src={item.image.first+'MINI.webp'} />
                        <h3 className='text-center px-4 text-[1.1rem] font-medium text-wrap'>{item.productName}</h3>
                    </Link>
                    {item.stock > 0 ? (
                        <h3 className={`${item.stock > 10 ? 'text-green-600' : 'text-amber-600'} text-sm font-medium text-center`}>Stock: {item.stock > 36 ? '>36' : item.stock}pcs</h3>
                    ) : (
                        <h3 className=' font-medium text-sm text-center text-red-500'>Out of stock</h3>
                    )}
                    <div className='flex justify-end h-full flex-col'>
                        <div className='flex justify-between h-fit sm:justify-end sm:flex-col mt-4 items-center mx-4'>
                            <h3 className={` text-base mb-4 block ${item.onSale ? 'text-emerald-700' : 'text-black'} border-transparent border-2 font-medium text-yello w-700 p-2 relative`}>
                                {item.onSale &&
                                    <span className='absolute text-base text-red-600 p-1 leading-none top-[-10px] left-[-2px] font-medium line-through decoration-2'>
                                        {item.originalPrice}
                                    </span>
                                }
                                {item.price},- czk
                            </h3>
                            <BuyButton item={item}/>
                        </div>
                    </div>
                </div>
            ))}
            </>
    )
}