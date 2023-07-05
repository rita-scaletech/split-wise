import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDE_NAV_OPTIONS } from 'shared/constants/constants';
import { ISideNavOpt } from './nav.interface';
import { SideNavIcon } from '../icons/icons';

const SideNav = () => {
	const [sidebarOpen, setSideBarOpen] = useState(false);
	const location = useLocation();
	const activeMenu = location.pathname.split('/')[1];

	return (
		<nav className='navbar-default' role='navigation'>
			<div
				className={`navbar-static-side d--flex flex--column height--full-viewport ${
					sidebarOpen && 'collapsed'
				}`}
			>
				<NavLink className='ml--10' to='/dashboard'>
					Split Wise
				</NavLink>
				<div className='collapse-icon' onClick={() => setSideBarOpen(!sidebarOpen)}>
					<SideNavIcon className='cursor-pointer' />
				</div>
				<div className='cursor-pointer d--flex flex--column icons'>
					{SIDE_NAV_OPTIONS.map(({ SvgIcon, urlLink, title }: ISideNavOpt, index: number) => {
						return (
							<NavLink
								to={urlLink}
								key={index}
								className={`nav-link ${activeMenu === urlLink && 'active-menu'}`}
							>
								<div className='nav-link-content d--flex full--width align-items--center bg--twilight-blue '>
									<div>{<SvgIcon />}</div>
									<p className='menu-label font--18px d--none no-margin'>{title}</p>
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
