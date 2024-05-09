import { Sidebar } from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import twimasq from '../assets/FeaturedArt/twimasq.webp'
import { Link } from 'react-router-dom'
import { Product } from '../components/Product'

export function HomeLayout() {

    const { categoryId } = useParams()
    const [frontPage, setFrontPage] = useState([])

    useEffect(() => {
        let ignore = false
        const url = '/products.json'

        if (!ignore) {
            fetch(url)
            .then(res => res.json())
            .then(json => setFrontPage(json.filter(item => item.expansion === 'Twilight Masquarade')))
        }
        return () => {ignore=false}
    },[])

    return (
        <main className="flex justify-center items-center flex-col md:p-12 lg:px-24 ">
            <div className='xl:max-w-[1100px]'>
                <img className='mb-8 sm:mb-2' src={twimasq} />
                <h1 className='text-3xl sm:w-full block text-white font-medium sm:text-center mb-2 p-2 bg-teal-600' htmlFor="container">Coming soon </h1>
                <div className='grid sm:py-4 gap-4 lg:grid-cols-3 xs:flex flex-col items-center sm:px-4 sm:grid-cols-2 md:grid-cols-2 w-full h-fit ' name='container'>
                    <Product products={frontPage}/>
                    {/* { frontPage.map(item => (
                    <div key={self.id} className='flex flex-col h-full border-black border-2 md:pt-4'>
                        <Link to={`products/${item.type}/${item.id}`}>
                            <img className='mb-4 scale-[65%] hover:scale-[75%] transition-transform duration-200' src={item.image} />
                            <h3 className='text-center px-4 lg:text-xl sm:text-xl md:text-xl text-wrap'>{item.productName}</h3>
                        </Link>
                        { item.stock > 0 ? (
                            <h3 className='text-green-600 font-medium text-center'>Stock: {item.stock > 36 ? '>36' : item.stock}pcs</h3>
                         ) : (
                            <h3 className=' font-medium text-center text-red-500'>Sold out</h3>
                         )}
                         <div className='flex justify-end h-full flex-col'>
                            <div className='flex justify-between h-fit sm:justify-end sm:flex-col mt-4 items-center mx-4'>
                                <h3 className={`md:text-xl sm:text-2xl mb-4 block ${item.onSale ? 'text-emerald-700' : 'text-black'} border-transparent border-2 font-medium text-yello w-700 p-2 relative`}>
                                    { item.onSale &&
                                        <span className='absolute text-base text-red-600 p-1 leading-none top-[-10px] left-[-2px] font-medium line-through decoration-2'>
                                            {item.originalPrice}
                                        </span>
                                    }
                                    {item.price},- czk
                                </h3>
                                { item.stock > 0 ? (
                                    <button className='relative group mb-4 border-black border-2 p-2'>
                                        <span className='md:text-xl sm:text-2xl z-10 relative group-hover:text-white transition-colors duration-200 font-medium'>{item.released ? "Buy now" : 'Pre-order'}</span>
                                        <div className='absolute w-[calc(100%)] h-full bg-teal-600 [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-100 top-0 z-[0] left-[0px]'></div>
                                    </button>
                                ) : (
                                    <button disabled className='relative group bg-gray-300 mb-4 border-black border-2 p-2'>
                                        <span className='md:text-xl sm:text-2xl z-10 text-black relative font-medium'>Unavailable</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    ))} */}
                </div>
            </div>
        </main>
    )
}