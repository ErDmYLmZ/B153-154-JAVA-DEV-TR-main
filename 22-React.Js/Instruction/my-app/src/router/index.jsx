import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../components/00-home";
import HelloWorld from "../components/01-hello-world/HelloWorld";
import Countries from "../components/02-jsx/Countries";
import ExternalSass from "../components/03-styles/ExternalSass";
import AppLayout from "../layout";
import Clock from "../components/04-clock-1/Clock";
import Movies from "../components/26-router/movies";
import MovieDetail from "../components/26-router/movie-detail";
import Exchange from "../components/27-context-api/exchange";



const router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "hello-world",
                element: <HelloWorld/>
            },
            {
                path: "countries",
                element: <Countries/>,
            },
            {
                path: "external-sass",
                element: <ExternalSass/>
            },
            {
                path: "clock",
                element: <Clock/>
            },
            {
                path: "movies",
                children:[
                    {
                        index: true,
                        element: <Movies/>,
                    },
                    {
                        path:":movieId",
                        element: <MovieDetail/>,
                    }
                ]
            },
            {
                path: "exchange",
                element: <Exchange/>
            },
        ]

    },
    
])



const AppRouterProvider = () => {
  return <RouterProvider router={router} />
}

export default AppRouterProvider
