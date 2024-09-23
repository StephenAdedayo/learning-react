import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import SingleProducts from "./SingleProducts";

export const router = createBrowserRouter([
    {path:"/", element:<Home />},
    {path:"/create", element:<Create />},
    {path:"/shop/:id", element:<SingleProducts />}
])