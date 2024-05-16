import { useParams } from "react-router"
import { Link } from "react-router-dom"
import homeIcon from '../assets/icons/home.svg'

export function Timeline({ item }) {

    const { categoryId } = useParams()
    const prettyText = categoryId.replaceAll('-', ' ')

    return (
        <h5 className="flex w-full text-sm max-w-[1420px] p-4">
            <Link to='/' className="flex justify-center items-center relative mr-4 after:absolute after:-right-3 after:content-['/']">
                <svg className="w-4 h-4 min-w-4 max-w-4 transition-colors duration-200 fill-black hover:fill-teal-600" fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="home-alt-3" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z" ></path></g></svg>
            </Link>
            { item ? 
            <>
                <Link to={`/products/${categoryId}`} className=" hover:underline capitalize text-nowrap mr-4 relative after:absolute after:-right-3 after:content-['/']">
                    {prettyText}
                </Link>
                <p className="cursor-default text-nowrap text-ellipsis overflow-hidden"> {item.productName}</p>
            </> 
            : 
            <p to={`/products/${categoryId}`} className="capitalize mr-4 text-nowrap relative cursor-default">
                {prettyText}
            </p>
            }
        </h5>
    )
}