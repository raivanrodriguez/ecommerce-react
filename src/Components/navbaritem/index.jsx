import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbaritem = ({ children, ...props }) => {

	const activeStyle = 'underline underline-offset-4';

	return( 
		<NavLink 
			{...props}
			className={({ isActive }) => isActive ? activeStyle : undefined}
		>
			{children}
		</NavLink>);
}

export default Navbaritem;