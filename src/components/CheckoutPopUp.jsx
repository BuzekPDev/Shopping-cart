import { Link } from "react-router-dom"

export function CheckoutPopUp ({ checkoutHandler }) {


    return (
        <div className="fixed flex justify-center items-center w-full h-full top-0 z-50 bg-[rgb(0,0,0,0.4)]">
            <div className="bg-white p-8 modal">
                <span className="text-2xl w-full block font-medium text-center">Thank you for your purchase!</span>
                <div className="mt-8 flex justify-between sm:flex-col sm:items-center text-lg font-medium">
                    <button className="p-4 hover:underline underline-offset-2 decoration-2" onClick={checkoutHandler}>Back to cart</button>
                    <Link className="relative p-4 w-fit bg-neutral-200 rounded-lg flex items-center group" to='/'>
                        <span className="flex items-center justify-center left-0 w-full h-full z-20 group-hover:text-white transition-colors duration-200">Continue shopping</span>
                        <div className="absolute left-0 rounded-lg w-full h-full [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] transition-transform duration-200 bg-teal-600"></div>
                    </Link>
                </div>                
            </div>
        </div>
    )
}