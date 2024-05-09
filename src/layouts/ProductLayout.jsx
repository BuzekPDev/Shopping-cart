import { useParams } from "react-router"
import { Product } from "../components/Product"
import { useEffect, useState } from "react"
import { filter } from "../helpers/filter"

export function ProductLayout () {

    const {categoryId} = useParams()
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const expansions = ['Scarlet & Violet','Crown Zenith','Silver Tempest', 'Lost Origin','Pokémon GO','Astral Radiance']

    useEffect(() => {
        let ignore = false
        const url = '/products.json'

        if (!ignore) {
            fetch(url)
                .then(res => res.json())
                .then(json => setProducts(json.filter(product => product.type === categoryId)))
        }
        return () => { ignore = true }
    }, [categoryId])

    function checkboxHandler (e, val) {
        const tempFilters = structuredClone(filters)
        if (e.target.checked) {
            tempFilters.push(val)
            setFilters(tempFilters)
            return
        } else {
            const index = tempFilters.indexOf(val)
            tempFilters.splice(index,1)
            console.log("working:"+index)
            setFilters(tempFilters)
        }
    }

    const shownProducts = filter(products, filters)

    return (
        <div className="flex justify-center w-full">
            <main className="flex max-w-[1420px] gap-4 justify-center sm:flex-col sm:p-4 md:p-12">
                <div className="lg:w-[45rem] md:w-[30rem] sm:w-full border-black border-2">
                    {
                        expansions.map((self,id) => (
                            <label className="block">
                                {self}
                                <input key={self} type="checkbox" onChange={(e) => checkboxHandler(e, self)}></input>
                            </label>
                        ))
                    }
                </div>
                <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 xs:flex flex-col gap-4">
                <Product products={shownProducts}/>
                </div>
            </main>
        </div>
    )
}