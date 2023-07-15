import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "./style.css";

const API = "https://fakestoreapi.com/products/categories";

const activeStyle = "underline underline-offset-4 text-yellow-500 text-lg";

const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

// **************************COMPONENT**************************
const NavBar = () => {
  const context = useContext(Context);
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const Item = (object) => {
    return (
      <li key={object} className="text-md italic">
        <NavLink
          to={`/${object.replace(/\'|\s+/g, "")}`}
          onClick={() => context.setCategory(object)}
          className={isActive}
          id="category"
        >
          {object}
        </NavLink>
      </li>
    );
  };

  const strSignOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(strSignOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li className="text-md italic">
          <NavLink
            to="/sign-in"
            className={isActive}
            id="category"
          >
            Sign In
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-yellow-500 font-semibold italic">{context.account.email}</li>
          <li className="text-md italic">
            <NavLink to="/my-orders" className={isActive} id="category">
              My Orders
            </NavLink>
          </li>
          <li className="text-md italic">
            <NavLink to="/my-account" className={isActive} id="category">
              My Account
            </NavLink>
          </li>
          <li className="text-md italic">
            <NavLink
              to="/sign-in"
              onClick={() => context.handleSignOut()}
              className={isActive}
              id="category"
            >
              Sign Out
            </NavLink>
          </li>
          <li className="flex items-center">
            <ShoppingCartIcon
              className="w-6 h-6"
              strokeWidth={1.5}
              onClick={() => context.setIsCartOpen(!context.isCartOpen)}
            />
            <div>{context.counter}</div>
          </li>
        </>
      );
    }
  };
  

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-blue-600 text-white">
      <ul className="flex items-center gap-5">
        <li className="font-extrabold text-lg">
          <NavLink to="/" onClick={() => context.setCategory(null)}>
            shopi
          </NavLink>
        </li>
        <li className="text-md italic">
          <NavLink
            to="/"
            onClick={() => context.setCategory(null)}
            className={isActive}
            id="category"
          >
            all
          </NavLink>
        </li>
        {categories?.map((category) => Item(category))}
      </ul>
      <ul className="flex items-center gap-5">
      {renderView()}
      </ul>
    </nav>
  );
};

export { NavBar };
