import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function Sidebar() {

    const [categories, setCategories] = useState([])
    const url = 'https://fakestoreapi.com/products/categories'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(json => setCategories(json))
    })
    

    return (
        <aside className="flex-none bg-slate-500 w-72">
            swag
        </aside>
    )
}