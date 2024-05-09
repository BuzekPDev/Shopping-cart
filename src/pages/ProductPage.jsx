import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import etb from '../assets/ETB/SV1_ETB_01.webp'
import tin from '../assets/TINS/PAF_TIN_03.webp'
import { useEffect } from "react";
import { useParams } from "react-router";

export function ProductPage () {

    const { categoryId, productId } = useParams()

    useEffect(() => {
        let ignore = false

        const url = `/${categoryId}.json`
        if (!ignore) {
            fetch(url)
            .then(res => res.json())
            .then(json => console.log(json))
        }
        return () => {ignore = true}
    },[categoryId, productId])

    return (
        <>
         <Header />
         <Sidebar />
         <h1>I am product</h1>
         <div>
            <img src={categoryId === 'tins' ? tin : etb}/>
         </div>
        </>
    )
}