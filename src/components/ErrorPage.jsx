import { CartContextProvider } from '../context/CartContextProvider'
import { Header } from './Header'
import { Link } from 'react-router-dom'

export function Error () {
    
    document.title = "404 Page not found | PokéStore"

    return (
        <>
        <CartContextProvider>
            <Header />
        </CartContextProvider>
        <main className='w-full h-full flex items-center'> 
            <div className='text-center w-full'>
                <h1 className='text-6xl font-medium'>404</h1>
                <h2 className='text-5xl font-medium'>Page not found</h2>
                <Link to='/' className='text-3xl py-4 block hover:underline'>Back to home page</Link>
            </div>
        </main>
        </>
    )
}