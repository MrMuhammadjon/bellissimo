import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Profile from '../Page/Profile';
import ErrorPage from '../Page/ErorrPage';
import Home from '../Page/Home';
import ProtectRouter from '../Components/ProtectRouter'; // Make sure to import this

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <ErrorPage/>,
            children: [ 
                {index: true, element: <Home/>},
                {
                    path: 'profile',
                    element: (
                        <ProtectRouter>  // Fixed typo ProtectRouter (if this was intentional)
                            <Profile/>
                        </ProtectRouter>
                    )
                }
            ]
        }
    ]);

    return <RouterProvider router={router}/>;
}