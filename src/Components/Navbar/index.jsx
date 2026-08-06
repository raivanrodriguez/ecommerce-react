
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { AppContext } from '../../Context';

import NavbarItem from "../navbaritem";




const sideMenu = [
	
	{ name: 'MyAccount', path: '/my-account' },
	{ name: 'SignIn', path: '/sign-in' },
	{ name: 'Cart', path: '/cart' }
];

const Navbar = () => {
    const { categories, shoppingCart } = useContext(AppContext);
	const context = useContext(AppContext)
	const totalItems = context.shoppingCart.reduce(
    (acc, product) => acc + product.quantity,
    0
);
	
	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavbarItem to='/'>
						Home
					</NavbarItem>
				</li>
		{categories.map(category => (
  <li key={category.id}>
   <NavbarItem
    to="/infopro"
    onClick={() => context.setIdent(category.id)}
>
    {category.name}
</NavbarItem>
  </li>
))}
		
				
			</ul>
			<ul className="flex items-center gap-3">
				<li>
					sfdaafsasfaf@mail.com
				</li>
				{
					sideMenu.map((item, index) => {
						return (
							<li key={index}>
								<NavbarItem to={item.path}>
									{item.name}
								</NavbarItem>
							</li>
						);
					})
				}
				<li className="flex items-center justify-center">
					<ShoppingBagIcon className='h-6 w-6' />
					<div>
					
						{totalItems}
					
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
