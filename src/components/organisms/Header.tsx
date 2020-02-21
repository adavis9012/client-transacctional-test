import React, { FunctionComponent } from 'react';

import './styles/Header.scss';
import {Link} from "react-router-dom";

const Header: FunctionComponent = () => {
	return(
		<header className="header">
			<nav className="header_nav">
				<Link className="header_item--selected" to="/" >Mi Cuenta</Link>
				<Link className="header_item" to="#">Mis Movimientos</Link>
			</nav>
		</header>
	)
};

export default Header;