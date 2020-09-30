import React from 'react'
import {NavLink} from "react-router-dom"

// HOC - High Order Component - Composant d'ordre supérieur
// C'est un composant qui prend en paramètre un autre composant
const Layout = (props) => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li><NavLink to="/" exact activeClassName="active-link">Popular</NavLink></li>
						<li><NavLink to="/battle" activeClassName="active-link">Battle</NavLink></li>
						<li><NavLink to="/counter" activeClassName="active-link">Counter</NavLink></li>
						<li><NavLink to="/cities" activeClassName="active-link">Cities</NavLink></li>
					</ul>
				</nav>
			</header>
			<main>
				{props.children}
			</main>
			<footer>Créer par Fabio - Avec React</footer>
		</>
	)
}

export default Layout
