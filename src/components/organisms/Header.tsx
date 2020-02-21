import React, { FunctionComponent } from 'react';

import './styles/Header.scss';

const Header: FunctionComponent = () => {
	return(
		<header className="header">
			<nav className="header_nav">
				<a className="header_item--selected" href="#">Mi Cuenta</a>
				<a className="header_item" href="#">Mis Movimientos</a>
			</nav>
		</header>
	)
};

export default Header;