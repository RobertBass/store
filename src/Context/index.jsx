import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    
    // PRODUCT DETAIL
    const [isActive, setIsActive] = useState(false);
    const openProductDetail = () => setIsActive(true);
    const closeProductDetail = () => setIsActive(false);

    const [detail, setDetail] = useState({});
    const showProduct = (product) => {
        closeShoppingCart();
        openProductDetail();
        setDetail(product);
    }

    // SHOPPING CART
    const [counter, setCounter] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);


    const addProductToCart = (event, product) => {
        event.stopPropagation();
        setCounter(counter + 1);
        setCartProducts([...cartProducts, product]);
    }

    const openShoppingCart = () => {
        setIsCartOpen(true);
        closeProductDetail();
    }
    const closeShoppingCart = () => setIsCartOpen(false);

    return (
        <Context.Provider value={{
            counter,
            setCounter,
            isActive,
            openProductDetail,
            closeProductDetail,
            detail,
            setDetail,
            showProduct,
            cartProducts,
            setCartProducts,
            addProductToCart,
            isCartOpen,
            setIsCartOpen,
            openShoppingCart,
            closeShoppingCart,
        }}>
            {children}
        </Context.Provider>
        
    )
}