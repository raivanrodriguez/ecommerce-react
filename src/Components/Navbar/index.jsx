
import {
    ShoppingBagIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/solid';

import { useState, useContext } from 'react';
import { AppContext } from '../../Context';

import NavbarItem from "../navbaritem";
import { Link } from "react-router-dom";


const sideMenu = [
    { name: 'MyAccount', path: '/my-account' },
    { name: 'SignIn', path: '/sign-in' },
    { name: 'Cart', path: '/cart' }
];


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const context = useContext(AppContext);

    const { categories, shoppingCart, setIdent } = context;

    const totalItems = shoppingCart.reduce(
        (acc, product) => acc + product.quantity,
        0
    );


    return (

        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">

            {/* IZQUIERDA - ESCRITORIO */}

            <ul className="hidden md:flex items-center gap-3">

                <li className="font-semibold text-lg">

                    <NavbarItem to="/">
                        Home
                    </NavbarItem>

                </li>


                {categories.map(category => (

                    <li key={category.id}>

                        <Link
                            to="/infopro"
                            onClick={() => setIdent(category.id)}
							className="navbar-link"
                        >
                            {category.name}
                        </Link>

                    </li>

                ))}

            </ul>


            {/* DERECHA - ESCRITORIO */}

            <ul className="hidden md:flex items-center gap-3">

                <li>
                    MyMail@mail.com
                </li>


                {sideMenu.map((item) => (

                    <li key={item.path}>

                        <NavbarItem to={item.path}>
                            {item.name}
                        </NavbarItem>

                    </li>

                ))}


                <li className="flex items-center justify-center">

                    <NavbarItem to="/cart">

                        <div className="flex items-center">

                            <ShoppingBagIcon className="h-6 w-6" />

                            <span>
                                {totalItems}
                            </span>

                        </div>

                    </NavbarItem>

                </li>

            </ul>


            {/* BOTÓN MOBILE */}

            <div className="md:hidden flex items-center gap-3">

                <NavbarItem to="/cart">

                    <div className="flex items-center">

                        <ShoppingBagIcon className="h-6 w-6" />

                        <span>
                            {totalItems}
                        </span>

                    </div>

                </NavbarItem>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-1"
                >

                    {menuOpen ? (

                        <XMarkIcon className="h-7 w-7" />

                    ) : (

                        <Bars3Icon className="h-7 w-7" />

                    )}

                </button>

            </div>


            {/* MENÚ MOBILE */}

            {menuOpen && (

                <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">

                    <ul className="flex flex-col gap-4 px-8 py-5">


                        {/* HOME */}

                        <li>

                            <NavbarItem
                                to="/"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </NavbarItem>

                        </li>


                        {/* CATEGORÍAS */}

                        {categories.map(category => (

                            <li key={category.id}>

                                <Link
                                    to="/infopro"
                                    onClick={() => {
                                        setIdent(category.id);
                                        setMenuOpen(false);
										
                                    }}
									className="navbar-link"
                                >
                                    {category.name}
                                </Link>

                            </li>

                        ))}


                        {/* MY ACCOUNT / SIGN IN / CART */}

                        {sideMenu.map(item => (

                            <li key={item.path}>

                                <NavbarItem
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </NavbarItem>

                            </li>

                        ))}

                    </ul>

                </div>

            )}

        </nav>
    );
};


export default Navbar;