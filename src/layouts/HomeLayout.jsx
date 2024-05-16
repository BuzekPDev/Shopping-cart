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
                </div>
            </div>
        </main>
    )
}