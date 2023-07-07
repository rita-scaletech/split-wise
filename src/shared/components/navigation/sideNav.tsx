import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDE_NAV_OPTIONS } from 'shared/constants/constants';
import { ISideNavOpt } from './nav.interface';
import { SideNavIcon } from '../icons/icons';

import Logo from 'assets/images/logo.png';

const SideNav = () => {
	const [sidebarOpen, setSideBarOpen] = useState(true);
	const location = useLocation();
	const activeMenu = location.pathname.split('/')[1];

	return (
		<nav className='navbar-default' role='navigation'>
			<div className={`navbar-static-side flex flex--column height--full-viewport ${sidebarOpen && 'collapsed'}`}>
				<NavLink className='logo-image' to='/dashboard'>
					<img src={Logo} alt='log' />
				</NavLink>
				<div className='collapse-icon cursor--pointer' onClick={() => setSideBarOpen(!sidebarOpen)}>
					<SideNavIcon />
				</div>
				<div className='cursor--pointer flex flex--column icons'>
					{SIDE_NAV_OPTIONS.map(({ SvgIcon, urlLink, title }: ISideNavOpt, index: number) => {
						return (
							<NavLink
								to={urlLink}
								key={index}
								className={`nav-link ${activeMenu === urlLink && 'active-menu'}`}
							>
								<div className='nav-link-content flex width--full align-items--center bg--twilight-blue '>
									<div className='svg-icon'>{<SvgIcon />}</div>
									<p className='menu-label font-size--lg d--none no-margin'>{title}</p>
								</div>
							</NavLink>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default SideNav;
