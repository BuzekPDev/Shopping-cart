import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ImageSlider } from "../components/ImageSlider";
import { Timeline } from "../components/Timeline";
import { ProductCard } from "../components/ProductCard";
import { ProductInfo } from "../components/ProductInfo";
import { CartContextProvider } from "../context/CartContextProvider";
import { Filler } from "../components/Filler";
import { Footer } from "../components/Footer";

export function ProductPage() {

    const { categoryId, productId } = useParams()
    const [displayedItem, setDisplayedItem] = useState({})
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        let ignore = false

        const url = `/data/products.json`
        if (!ignore) {
            fetch(url)
                .then(res => res.json())
                .then(json => json.find(item => item.id === productId))
                .then(product => { setDisplayedItem(product) })
        }
        return () => { ignore = true }
    }, [categoryId, productId])

    function selectedHandler(val) {
        setSelected(val) 
    }

    document.title = displayedItem.productName + ' | PokéStore'

    return (
        <>
        <CartContextProvider>
            <Header />
            <Filler/>
            <main className="flex mx-auto flex-col w-full max-w-[1420px] sm:p-4 md:p-12">
                <Timeline item={displayedItem}/>
                <div className="w-full h-fit gap-8 md:items-center lg:items-start flex sm:flex-col md:flex-col lg:flex-row">
                    <ImageSlider item={displayedItem} selected={selected} selectedHandler={selectedHandler}/>
                    <ProductCard item={displayedItem}/>
                </div>
                <ProductInfo item={displayedItem}/>
            </main>
            <Footer />
        </CartContextProvider>
        </>
    )
}