import React from 'react';
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = (argument) => {
	return (
		<div>
			<ul className="navstyle">
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about">
						About
					</Link>
				</li>
				<li>
					<Link to="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Menu;