import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Signup from "../SocialLogin/Signup";
import Register from "../SocialLogin/Register";
import PrivateRoute from "./PrivateRoute";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import MyQueries from "../pages/MyQueries";
import NotPound from "../NotPound";
import AddQuery from "../pages/AddQuery";
import QueryDetails from "./QueryDetails";
import axios from "axios";
import UpdatePage from "../pages/UpdatePage";
import AllQueries from "../pages/AllQueries";
import MyRecommendation from "../pages/MyRecommendation";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component:Home
            },
            {
                path: 'recommendations',
                element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe> </PrivateRoute>
            },
            {
                path :'myQueries',
                element: <PrivateRoute> <MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: 'myRecommendation',
                Component: MyRecommendation
            },
            {
                path:'login',
                Component: Signup
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'addQuery',
                Component: AddQuery
            },
            {
                path: 'queries/:id',
                loader: ({params}) => axios(`${import.meta.env.VITE_URL}/queries/${params.id}`),
                Component: QueryDetails
            },
            {
                path: 'updatePage/:id',
                loader: ({params}) => axios(`${import.meta.env.VITE_URL}/queries/${params.id}`),
                Component: UpdatePage
            },
            {
                path: 'allQueries',
                Component: AllQueries
            },
            

        ]
    },
    {
        path:'*',
        Component: NotPound
    }
])