
import Categories from "../../Components/Categories";
import { useRoutes } from 'react-router-dom';
import Home from "../Home";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";

import Products from "../../Components/Products"


import { useInfo } from "../../Hooks/UseInfo";
import  InfoPro  from "../../Components/InfoPro";
import { useContext } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import { AppContext } from "../../Context";
import  Cart  from "../../Components/Cart";




export const AppRoutes = () => {
  




  let routes = useRoutes([
    { path: '/', element: <Categories />  },
    { path: '/my-account', element: <MyAccount /> },
    { path: 'categories/id', element: <InfoPro  /> },
    { path: 'infopro', element:<InfoPro  />},
    {path: 'products', element: <Products/>},

    //{ path: '/sign-in', element: <SignIn /> },
    {path: 'cart', element: <Cart/>}
  ]);

  return routes;
};
