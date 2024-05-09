import { useParams } from 'react-router'
import { Header } from './Header.jsx'
import { Product } from './Product.jsx'
import { Sidebar } from './Sidebar.jsx'
import { useEffect, useState } from 'react'
import { Error } from './ErrorPage.jsx'


export function ProductView ({}) {

    const { categoryId } = useParams()
    const [ product, setProduct ] = useState([])
    const [failed,setFailed] = useState(false)

    useEffect(() => {
        let ignore = false

        const url = `/products.json`
        if (!ignore) {
            fetch(url)
                .then(result => result.json())
                .then(json => { 
                    setProduct(json); 
                    setFailed(false) 
                })
                .catch(() => { setFailed(true) })
        }   
        return () => { ignore = true }
    }, [categoryId])

    return (
        <main className="flex flex-row flex-wrap justify-center gap-2 p-10 bg-sky-300">
        { failed ? ( 
            <Error /> 
            ) : (
            <Product prop={product} />
            )}
        </main>
    )
}