import NotFound from "../NotFound/NotFound"
import About from "../About/About"
import Home from "../Home/Home"


const MenuRouter= [
    {
        path: "/",
        element: <Home/>,
        title: "Home"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About"
    },
    {
        path: "*",
        element: <NotFound/>,
        title: "Not Found"
    },
]

export default MenuRouter;