import {Layout} from "./components/layout/Layout.tsx";
import {createHashRouter, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'
import {Trends} from "./components/pages/Trends.tsx";
import {Payments} from "./components/pages/Payments.tsx";
import {Tickets} from "./components/pages/Tickets.tsx";
import {Tasks} from "./components/pages/Tasks.tsx";
import {ErrorPage} from "./components/pages/errorPage/ErrorPage.tsx";
import {MainPage} from "./components/pages/MainPage.tsx";
import {AllPayments} from "./components/pages/subPages/AllPayments.tsx";
import {ThesePayments} from "./components/pages/subPages/ThesePayments.tsx";
import {ThosePayments} from "./components/pages/subPages/ThosePayments.tsx";
import {FirstTask} from "./components/pages/subPages/FirstTask.tsx";
import {SecondTask} from "./components/pages/subPages/SecondTask.tsx";
import {ThirdTask} from "./components/pages/subPages/ThirdTask.tsx";


const routes: RouteObject[] = [
    {element: <MainPage/>, path: '/', errorElement: <ErrorPage/> },
    {element: <Trends/>, path: '/trends', errorElement: <ErrorPage/>},
    {element: <Tasks/>, path: '/tasks', errorElement: <ErrorPage/>},
    {element: <Tickets/>, path: '/tickets', errorElement: <ErrorPage/>},
    {element: <Payments/>, path: '/payments', errorElement: <ErrorPage/>},
    {element: <AllPayments/>, path: '/payments/all', errorElement: <ErrorPage/>},
    {element: <ThesePayments/>, path: '/payments/these', errorElement: <ErrorPage/>},
    {element: <ThosePayments/>, path: '/payments/those', errorElement: <ErrorPage/>},
    {element: <FirstTask/>, path: '/tasks/first', errorElement: <ErrorPage/>},
    {element: <SecondTask/>, path: '/tasks/second', errorElement: <ErrorPage/>},
    {element: <ThirdTask/>, path: '/tasks/third', errorElement: <ErrorPage/>},
]

const router = createHashRouter([
    {
        children: [
            {children: routes, element: <PublicRoutes/>},
        ],
        element: <Layout/>,
    },
])

export const Router = () => {
    return <RouterProvider router={router}/>
}


function PublicRoutes() {

    return <Outlet/>
}
