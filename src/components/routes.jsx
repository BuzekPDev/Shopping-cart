import { Home } from "../pages/Home.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";
import { Error } from "./ErrorPage.jsx";
import { ProductView } from "./productView.jsx";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/products/:categoryId",
                element: <ProductView />
            },
        ]
    },
    
    {
        path: "/products/:categoryId/:productId",
        element: <ProductPage />
    }

]

export default routes