import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount/Index';
import { MyOrder } from '../MyOrder/Index';
import { MyOrders } from '../MyOrders/index';
import { NotFound } from '../NotFound/index';
import { SignIn } from '../SignIn/index';
import { NavBar } from "../../Components/NavBar";
import { ShoppingCart } from '../../Components/ShoppingCart';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/jewelery', element: <Home />},
    {path: '/mensclothing', element: <Home />},
    {path: '/womensclothing', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])

  return routes;
}

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <ShoppingCart />
      </BrowserRouter>
    </ContextProvider>
    
  )
}

export { App };
