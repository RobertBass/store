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

    // ADD PRODUCTS TO CART
    const addProductToCart = (event, item) => {
        event.stopPropagation();
        closeProductDetail();
        closeShoppingCart();
        setCounter(counter + 1);
        const productIndex = cartProducts.findIndex(product => product.id === item.id)
        let newCart = []
        if (productIndex >= 0) {
            newCart = [...cartProducts]
            newCart[productIndex].quantity++
            newCart[productIndex].subtotal = newCart[productIndex].price * newCart[productIndex].quantity
            
        } else {
            newCart = [...cartProducts, { ...item, quantity: 1, subtotal: item.price }]
        }
        setCartProducts(newCart);
    }

    // DELETE PRODUCT OF CART
    const deleteProductOfCart = (id) => {
        const productIndex = cartProducts.findIndex(product => product.id === id);
        const quantity = cartProducts[productIndex].quantity
        const newCart = cartProducts.filter(product => product.id != id);
        setCounter(counter - quantity);
        setCartProducts(newCart);
    }

    // ADD QUANTITY OF ITEM IN CART
    const plusQuantity = (id) => {
        const productIndex = cartProducts.findIndex(product => product.id === id);
        let newCart = [...cartProducts];
        newCart[productIndex].quantity++;
        newCart[productIndex].subtotal = newCart[productIndex].price * newCart[productIndex].quantity
        setCounter(counter + 1);
        setCartProducts(newCart);
    }

    // DECREASE QUANTITY OF ITEM IN CART
    const lessQuantity = (id) => {
        const productIndex = cartProducts.findIndex(product => product.id === id);
        let newCart = cartProducts
        if (newCart[productIndex].quantity > 1) {
            newCart[productIndex].quantity--;
            newCart[productIndex].subtotal = newCart[productIndex].price * newCart[productIndex].quantity
            setCounter(counter - 1);
            setCartProducts(newCart);
        } else {
            alert("La cantidad de este item es 1, debes eliminarlo si ya no lo deseas");
        }
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
            deleteProductOfCart,
            plusQuantity,
            lessQuantity,
            isCartOpen,
            setIsCartOpen,
            openShoppingCart,
            closeShoppingCart,
        }}>
            {children}
        </Context.Provider>
        
    )
}