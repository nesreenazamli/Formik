import React from 'react';
import {useRoutes} from "react-router-dom";
import NotFound from "./Home/NotFound";
import Home from "./Home/Home";
import About from "./Home/About";

function Router(props) {
    const routers = useRoutes([
        {path:"/", element:<Home/>},
        {path:"/about", element:<About/>},
        {path:"*", element:<NotFound/>},
    ])
    return routers
}

export default Router;