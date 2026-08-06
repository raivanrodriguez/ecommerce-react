import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { useFetch } from '../Hooks/UseFetch';



export const AppContext = createContext();

export const AppProvider =  ({children}) => {

    const [ident, setIdent] = useState();
    const [id, setId] = useState();
    const [counter, setCounter] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [ order, setOrder ] = useState([]);
    const [ prod, setProd ] = useState();
    const { data: categories } = useFetch(
    "https://japceibal.github.io/emercado-api/cats/cat.json"
);

    return (
        <AppContext.Provider value ={{
            ident,setIdent,
            id,setId,
            counter,setCounter,
            shoppingCart,setShoppingCart,
            order,setOrder,
            prod, setProd,categories
            

        }}>
            {children}
        </AppContext.Provider>
    )

    

}
AppProvider.propTypes = {
    children: PropTypes.node.isRequired
  }