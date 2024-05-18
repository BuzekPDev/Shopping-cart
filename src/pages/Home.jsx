import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { HomeLayout } from '../layouts/HomeLayout'
import { ProductLayout } from "../layouts/ProductLayout";
import { CartContextProvider } from "../context/CartContextProvider";
import { Filler } from "../components/Filler";
import { Footer } from "../components/Footer";

export function Home () {

    const { categoryId } = useParams()
    const [param, setParam] = useState(categoryId)

    param !== categoryId && setParam(categoryId)

    return (
        <>
        <CartContextProvider>
            <Header />
            <Filler/>
            { categoryId ?
                <ProductLayout param={param}/> 
               
                :
                <HomeLayout />
            }
            <Footer />
        </CartContextProvider>
        </>
    )
}