import { createContext, useState, useEffect } from "react";
import { totalOrder } from "../utils";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  
  // GET ITEMS FROM API
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  

  // PRODUCT DETAIL
  const [isActive, setIsActive] = useState(false);
  const [detail, setDetail] = useState({});
  const openProductDetail = () => setIsActive(true);
  const closeProductDetail = () => setIsActive(false);

  const showProduct = (product) => {
    closeShoppingCart();
    openProductDetail();
    setDetail(product);
  };

  // SHOPPING CART
  const [counter, setCounter] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [order, setOrder] = useState([]);

  // ADD PRODUCTS TO CART
  const addProductToCart = (event, item) => {
    event.stopPropagation();
    closeProductDetail();
    closeShoppingCart();
    setCounter(counter + 1);
    const productIndex = cartProducts.findIndex(
      (product) => product.id === item.id
    );
    let newCart = [];
    if (productIndex >= 0) {
      newCart = [...cartProducts];
      newCart[productIndex].quantity++;
      newCart[productIndex].subtotal =
        newCart[productIndex].price * newCart[productIndex].quantity;
    } else {
      newCart = [
        ...cartProducts,
        { ...item, quantity: 1, subtotal: item.price },
      ];
    }
    setCartProducts(newCart);
  };

  // DELETE PRODUCT OF CART
  const deleteProductOfCart = (id) => {
    const productIndex = cartProducts.findIndex((product) => product.id === id);
    const quantity = cartProducts[productIndex].quantity;
    const newCart = cartProducts.filter((product) => product.id != id);
    setCounter(counter - quantity);
    setCartProducts(newCart);
  };

  // ADD QUANTITY OF ITEM IN CART
  const plusQuantity = (id) => {
    const productIndex = cartProducts.findIndex((product) => product.id === id);
    let newCart = [...cartProducts];
    newCart[productIndex].quantity++;
    newCart[productIndex].subtotal =
      newCart[productIndex].price * newCart[productIndex].quantity;
    setCounter(counter + 1);
    setCartProducts(newCart);
  };

  // DECREASE QUANTITY OF ITEM IN CART
  const lessQuantity = (id) => {
    const productIndex = cartProducts.findIndex((product) => product.id === id);
    let newCart = cartProducts;
    if (newCart[productIndex].quantity > 1) {
      newCart[productIndex].quantity--;
      newCart[productIndex].subtotal =
        newCart[productIndex].price * newCart[productIndex].quantity;
      setCounter(counter - 1);
      setCartProducts(newCart);
    } else {
      alert(
        "La cantidad de este item es 1, debes eliminarlo si ya no lo deseas"
      );
    }
  };

  // CHECKOUT
  const checkout = () => {
    if (cartProducts.length > 0) {
      const date = new Date();
      const orderToAdd = {
        date: date.toLocaleDateString(),
        products: cartProducts,
        quantity: counter,
        total: totalOrder(cartProducts),
      };

      setOrder([...order, orderToAdd]);
      setCartProducts([]);
      setCounter(0);
      setSearchValue(null);
      setCategory(null);
      alert("Tu orden ha sido procesada satisfactoriamente");
      closeShoppingCart();
      
    } else {
      alert("No tienes productos en el Carrito de Compras");
      closeShoppingCart();
    }
  };

  const openShoppingCart = () => {
    setIsCartOpen(true);
    closeProductDetail();
  };
  const closeShoppingCart = () => setIsCartOpen(false);

    // FILTER PRODUCTS BY NAME AND CATEGORY
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState();

    const filterItems = (items, search) => {
      return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }

    const filterCategories = (items, category) => {
      return items?.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
  
    const filterBy = (searchType, items, searchValue, category) => {
      if (searchType === 'BY_TITLE') {
        return filterItems(items, searchValue)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filterCategories(items, category)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filterCategories(items, category).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }
  
    useEffect(() => {
      if (searchValue && category) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, category))
      if (searchValue && !category) setFilteredItems(filterBy('BY_TITLE', items, searchValue, category))
      if (!searchValue && category) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, category))
      if (!searchValue && !category) setFilteredItems(filterBy(null, items, searchValue, category))
    }, [items, searchValue, category])

    const cleanFilters = () => {
      setSearchValue(null);
      setCategory(null);
    }



  return (
    <Context.Provider
      value={{
        items,
        setItems,
        filteredItems,
        setFilteredItems,
        filterItems,
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
        order,
        setOrder,
        addProductToCart,
        deleteProductOfCart,
        plusQuantity,
        lessQuantity,
        isCartOpen,
        setIsCartOpen,
        checkout,
        openShoppingCart,
        closeShoppingCart,
        setSearchValue,
        searchValue,
        category,
        setCategory,
        cleanFilters
      }}
    >
      {children}
    </Context.Provider>
  );
};
