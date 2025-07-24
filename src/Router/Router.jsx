import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Profile from '../Page/Profile';
import ErrorPage from '../Page/ErorrPage';
import Home from '../Page/Home';
import Login from '../Page/Login'
import ProtectRouter from '../Components/ProtectRouter';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <ErrorPage/>,
            children: [ 
                {index: true, element: <Home/>},
                {path: '/login', element: <Login/>},
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