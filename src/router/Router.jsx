import { createBrowserRouter, } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/coverage/Coverage";
import Helicopter from "../Pages/Helicapter";
import PrivetRoutes from "../routes/PrivetRoutes";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DeshBoardLayout from "../Layout/DeshBoardLayout";
import MyParcels from "../Pages/Deshboard/MyParcels/MyParcels";
import Payment from "../Pages/Deshboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage
            },
            {
                path: 'about',
                Component: Helicopter
            },
            {
                path: 'sendParcel',
                element: <PrivetRoutes><SendParcel></SendParcel></PrivetRoutes>,
                loader: () => fetch('/warehouses.json')
            },

        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/deshboard',
        element: <PrivetRoutes><DeshBoardLayout></DeshBoardLayout></PrivetRoutes>,
        children: [
            {
                path: 'myparcels',
                Component: MyParcels
            },
            {
                path: 'payment/:id',
                Component: Payment
            }
        ]
    }
]);