import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from 'react';
import App from '../App';
import ErrorPage from '../Page/ErorrPage';
import ProtectRouter from '../Components/ProtectRouter';
const Home = lazy(() => import('../Page/Home'));
const Login = lazy(() => import('../Page/Login'));
const Register = lazy(() => import('../Page/Register'));
const Profile = lazy(() => import('../Page/Profile'));
const Cart = lazy(() => import('../Page/Cart'));
export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <ErrorPage/>,
            children: [ 
                {index: true, element: <Home/>},
                {path: '/login', element: <Login/>},
                {path: '/cart', element: <Cart/>},
                {path: '/register', element: <Register/>},
                {
                    path: 'profile',
                    element: (
                        <ProtectRouter>  
                            <Profile/>
                        </ProtectRouter>
                    )
                }
            ]
        }
    ]);

    return <RouterProvider router={router}/>;
}