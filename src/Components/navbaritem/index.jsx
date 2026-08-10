import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbaritem = ({ children, ...props }) => {

	const activeStyle = ' underline-offset-4 navbar-link';

	return( 
		<NavLink 
			{...props}
			className={({ isActive }) => isActive ? activeStyle : undefined}
		>
			{children}
		</NavLink>);
}

export default Navbaritem;