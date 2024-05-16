import { ProductLayout } from "../layouts/ProductLayout.jsx";
import { Home } from "../pages/Home.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";
import { Error } from "./ErrorPage.jsx";
import { Checkout } from '../pages/Checkout.jsx'

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/products/:categoryId",
                element: <ProductLayout />
            },
            
        ],
    },
    
    {
        path: "/products/:categoryId/:productId",
        element: <ProductPage />
    },
    {
        path: "/checkout",
        element: <Checkout />
    }
    

]

export default routes