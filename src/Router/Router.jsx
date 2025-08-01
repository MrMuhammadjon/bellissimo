import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from 'react';
import App from '../App';
import ErrorPage from '../Page/ErorrPage';
import ProtectRouter from '../Components/ProtectRouter';
import ComboDetalis from "../Page/ComboDetalis";
import PizzaDetalis from "../Page/PizzaDetalis";
const Home = lazy(() => import('../Page/Home'));
const Login = lazy(() => import('../Page/Login'));
const Register = lazy(() => import('../Page/Register'));
const Loyalty = lazy(() => import('../Page/Loyalty'));
const Cart = lazy(() => import('../Page/Cart'));
const Profile = lazy(() => import('../Page/Profile'));
const ProductDetalis = lazy(() => import('../Page/ProductDetalis'));
export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '',
                    element: <Home />,
                    children: [
                        { path: 'product/:code', element: <ProductDetalis /> },
                        { path: 'pizza/:code', element: <PizzaDetalis /> },
                    ]
                },
                { path: 'login', element: <Login /> },
                { path: 'cart', element: <Cart /> },
                { path: 'register', element: <Register /> },
                { path: 'combo/:code', element: <ComboDetalis /> },


                {
                    path: 'profile',
                    element: (
                        <ProtectRouter>
                            <Profile />
                        </ProtectRouter>
                    )
                },
                {
                    path: 'loyalty',
                    element: (
                        <ProtectRouter>
                            <Loyalty />
                        </ProtectRouter>
                    )
                }
            ]
        }
    ]);


    return <RouterProvider router={router} />;
}