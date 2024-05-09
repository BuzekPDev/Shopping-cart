import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { ProductView } from "../components/productView";
import { HomeLayout } from '../layouts/HomeLayout'
import { ProductLayout } from "../layouts/ProductLayout";

export function Home () {

    const { categoryId } = useParams()

    return (
        <>
            <Header></Header>
            { categoryId ? 
                <ProductLayout /> 
                :
                <HomeLayout />
            }
        </>
    )
}