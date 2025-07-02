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
import Loading from "../pages/Loading";
import { Component } from "react";
import Dashboard from "../pages/Dashboard/DashboardHome";
import DashboardLayout from "../pages/Dashboard/dashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import About from "../pages/About";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component:Home,
                hydrateFallbackElement: Loading
            },
            // {
            //     path: 'recommendations',
            //     element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe> </PrivateRoute>
            // },
            // {
            //     path :'myQueries',
            //     element: <PrivateRoute> <MyQueries></MyQueries></PrivateRoute>
            // },
            // {
            //     path: 'myRecommendation',
            //    element: <PrivateRoute><MyRecommendation></MyRecommendation> </PrivateRoute>
            // },
            {
                path:'login',
                Component: Signup
            },
            {
                path: 'register',
                Component: Register
            },
            // {
            //     path: 'addQuery',
            //     Component: AddQuery
            // },
            {
                path: 'queries/:id',
                loader: ({params}) => axios(`${import.meta.env.VITE_URL}/queries/${params.id}`),
                element : <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>
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
            {
                path:'/about',
                Component: About
            }


        ]
    },
    {
        path:'*',
        Component: NotPound
    },
    {
    path:'dashboard',
    Component:DashboardLayout,
    children:[
        {
            index:true,
            Component:DashboardHome
        },
         {
                path: 'addQuery',
                Component: AddQuery
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
               element: <PrivateRoute><MyRecommendation></MyRecommendation> </PrivateRoute>
            },
              {
                path: 'allQueries',
                Component: AllQueries
            },
    ]
    }
])