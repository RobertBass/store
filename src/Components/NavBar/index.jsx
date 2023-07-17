import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "./style.css";

const activeStyle = "underline underline-offset-4 text-yellow-500 text-lg";

const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

// **************************COMPONENT**************************
const NavBar = () => {
  const context = useContext(Context);

  const userLogout = () => (
    <li className="text-md italic">
      <NavLink to="/sign-in" className={isActive} id="category">
        Sign In
      </NavLink>
    </li>
  );

  const userLogin = () => (
    <>
      <li className="text-yellow-500 font-semibold italic">
        {context.account.email}
      </li>
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

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-blue-600 text-white">
      <ul className="flex items-center gap-5">
        <li className="font-extrabold text-lg">
          <NavLink to={`${context.isUserSignOut ? '/sign-in' : '/'}`} onClick={() => context.setCategory(null)}>
            shopi
          </NavLink>
        </li>
        <li className="text-md italic">
          <NavLink
            to={`${context.isUserSignOut ? '/sign-in' : '/'}`}
            onClick={() => context.setCategory(null)}
            className={isActive}
            id="category"
          >
            all
          </NavLink>
        </li>
        {context.categories?.map((category) => context.Item(category))}
      </ul>
      <ul className="flex items-center gap-5">
        {context.renderViewCategories(userLogin(), userLogout())}
      </ul>
    </nav>
  );
};

export { NavBar };
