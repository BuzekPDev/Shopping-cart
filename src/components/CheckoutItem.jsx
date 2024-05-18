import { Link } from "react-router-dom";
import { salePercentage } from "../helpers/salePercentage";

export function CheckoutItem({ item, amountHandler, deleteHandler }) {


    return (
        <div className="relative flex lg:items-center border-2 border-neutral-300 rounded-lg w-full py-4 md:px-12 sm:px-4 xs:flex-col">
            <div className="mr-8 sm:mr-4">
                <Link to={`/products/${item.type}/${item.id}`}>
                    <img loading="lazy" className=" min-w-28 min-h-28 w-28 h-28 flex-0" src={item.image+'MINI.webp'} />
                </Link>
            </div>
            <div className="flex justify-between w-full flex-col lg:flex-row lg:items-center mr-10">
                <div>
                    <Link to={`/products/${item.type}/${item.id}`}>
                        <div className="text-lg font-medium">{item.productName}</div>
                    </Link>
                    <div className={`${item.stock > 10 ? 'text-green-600' : 'text-amber-600'} text-base`}>Stock: {item.stock > 36 ? '>36' : item.stock}pcs</div>
                </div>
                <div className="grid md:grid-cols-3 md:items-center sm:flex-col md:min-w-[25rem] md:w-[25rem] lg:min-w-[23rem] lg:w-[23rem]">
                    <div className="font-medium text-nowrap mr-auto">
                        <div className={`text-base ${item.onSale && 'text-emerald-700'}`}>
                            {item.price},- czk/pc
                        </div>
                        {item.onSale &&
                            <h2 className="text-sm flex">
                                <span className="text-emerald-700 mr-2">{salePercentage(item)}% off</span>
                                <span className=" line-through decoration-2 text-red-600">{item.originalPrice},- czk</span>
                            </h2>
                        }
                    </div>
                    <div className=' flex lg:justify-center'>
                        <button className="relative font-medium group text-lg flex justify-center items-center w-8 h-8 bg-neutral-200 rounded-l-md" onClick={() => amountHandler(item.qty - 1, item)} type="button">
                            <span className="absolute z-10 w-full h-full flex justify-center group-hover:text-white transition-colors duration-200 items-center">-</span>
                            <div className="absolute bg-teal-600 w-full h-full rounded-l-md [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-200"></div>
                        </button>
                        <input className="w-10 h-8 text-sm px-2 text-center bg-neutral-100" max={99} value={item.qty} onChange={(e) => amountHandler(e.target.value, item)} type="number"></input>
                        <button className="relative font-medium group text-lg flex justify-center items-center bg-neutral-200 rounded-r-md w-8 h-8" onClick={() => amountHandler(item.qty + 1, item)} type="button">
                            <span className="absolute z-10 w-full h-full flex justify-center group-hover:text-white transition-colors duration-200 items-center">+</span>
                            <div className="absolute bg-teal-600 w-full h-full rounded-r-md [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-200"></div>
                        </button>
                    </div>

                    <span className={`text-xl md:ml-auto font-medium ${item.onSale && 'text-emerald-700'}`}>{item.price * item.qty},- czk</span>
                </div>
                <button type="button" onClick={() => deleteHandler(item)} className="group flex justify-center rounded-full items-center absolute top-[calc(50%-0.75rem)] xs:top-8 right-8 w-6 h-6 bg-neutral-300 transition-colors duration-150 hover:bg-red-600">
                    <svg className="w-4 h-4 fill-black transition-colors duration-150 group-hover:fill-white" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" ></path></g></svg>
                </button>
            </div>
        </div>
    )
}