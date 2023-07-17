import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { Context, ContextProvider, initLocalStorage} from '../../Context';
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
  const context = useContext(Context);
  let routes = useRoutes([
    {path: '/', element: context.hasUserAnAccount &&  !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/electronics', element: context.hasUserAnAccount &&  !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/jewelery', element: <Home />},
    {path: '/mensclothing', element: context.hasUserAnAccount &&  !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/womensclothing', element: context.hasUserAnAccount &&  !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
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
  initLocalStorage();
  
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
