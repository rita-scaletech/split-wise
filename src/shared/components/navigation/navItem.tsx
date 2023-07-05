import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IOwnProps {
	renderSideNav: () => void;
	menu: any;
	isOpen: boolean;
	toggleIsOpen: (name: string) => void;
	hideSidebar: () => void;
}

/**
 * getPathElements - split any given navigation path at every `/` and return the array
 */
const getPathElements = (path: string) => {
	return path.split('/').filter((str) => str !== '');
};

const getActiveClass = (currentPathStr: string, actualPathStr: string): string => {
	// for base path, it's compulsary to have both path as `/`, in order to show `active` status
	if (actualPathStr === '/') {
		if (currentPathStr === actualPathStr) {
			return 'active';
		}
		return '';
	}
	const actualPath = getPathElements(actualPathStr);
	const currentPath = getPathElements(currentPathStr);
	// if the first level path matches for actual path, and current path, return `active`
	if (actualPath[0] === currentPath[0]) {
		return 'active';
	}
	return '';
};

const getSubActiveClass = (currentPathStr: string, actualPathStr: string): string => {
	const actualPath = getPathElements(actualPathStr);
	const currentPath = getPathElements(currentPathStr);
	if (
		(currentPathStr.includes('/organizations/list') || currentPathStr.includes('/organizations/payment-status')) &&
		actualPathStr.includes('/organizations/license')
	) {
		return 'active';
	}
	// for sub menu to be active, first and second level path must match
	if (actualPath[0] === currentPath[0] && actualPath[1] === currentPath[1]) {
		return 'active';
	}
	return '';
};

const icons: { [key: string]: string } = {
	['users']: 'bx-user',
	['dashboardTitle']: 'bxs-dashboard',
	['permissions']: 'key',
	['role']: 'bxs-id-card',
	['tools']: 'bx-cog'
};

const NavItem: React.FC<IOwnProps> = (props) => {
	const location = useLocation();

	const className = getActiveClass(location.pathname, props.menu.reactRoute);

	const handleNavClick = () => {
		props.renderSideNav();
		props.toggleIsOpen(props.menu.name);
		if (!props.menu.children) {
			props.hideSidebar();
		}
	};
	return (
		<li className={className} onClick={handleNavClick}>
			<Link to={location.pathname}>
				<i className={`bx ${icons[props.menu.permissionName]}`} />
				<span className='float--right'>
					<i className={`${!!className || props.isOpen ? 'bx bxs-chevron-down' : 'bx bxs-chevron-right'}`} />
				</span>
			</Link>

			<div className={`${className === 'active' && 'height--auto'}`}>
				{/* <ul className='nav nav-second-level collapse in'>
					{props.menu.children.map((child) => (
						<li key={child.url} className={getSubActiveClass(location.pathname, child.url)}>
							<Link to={child.url} className='nav-label' onClick={props.hideSidebar}>
								<Translate text={child.name} />
							</Link>
						</li>
					))}
				</ul> */}
			</div>
		</li>
	);
};

export default NavItem;
