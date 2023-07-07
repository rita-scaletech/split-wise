import { CSSProperties } from 'react';

export const REACT_SELECT_STYLE = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		padding: '5px 10px',
		borderBottom: '1px solid #e7e7e75e',
		fontSize: '14px',
		backgroundColor: state.isSelected ? 'rgba(255,255,255, 1);' : state.isFocused ? 'rgba(24, 25, 26, 0.2)' : '',
		':active': {
			backgroundColor: 'rgba(255,255,255, 1);'
		},
		':hover': {
			backgroundColor: 'rgba(255, 255, 255, 1)'
		},
		':focus': {
			backgroundColor: 'rgba(255,255,255, 1);',
			outline: 0
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 0,
		position: 'absolute',
		top: '38px',
		left: '0px',
		border: 'none',
		boxShadow: 'none',
		background: '#ffffff',
		borderRadius: '5px'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#ffffff',
		maxHeight: '130px',
		border: '1px solid #e0e0e1',
		color: '#000000',
		borderRadius: '5px'
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		cursor: state.isDisabled ? 'not-allowed' : 'pointer'
	}),
	indicatorSeparator: () => ({
		width: '0'
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.9 : 1;
		const transition = 'opacity 300ms';
		const color = '#000000';
		return { ...base, opacity: opacity, transition: transition, color };
	},
	control: () => ({
		display: 'flex',
		height: '35px',
		border: '1px solid #e0e0e1',
		borderRadius: '5px',
		color: '#000000',
		backgroundColor: '#ffffff !important'
	}),
	container: () => ({
		width: '100%',
		position: 'relative',
		backgroundColor: '#FFFFFF'
	}),
	placeholder: (base: CSSProperties) => ({
		...base,
		color: '#877994',
		fontSize: '15px'
	}),
	multiValue: (base: CSSProperties) => ({
		...base,
		backgroundColor: ' hsl(0deg 2.71% 56.62% / 46%)',
		borderRadius: '5px',
		margin: '2px',
		justifyContent: 'center'
	}),
	multiValueGeneric: (base: CSSProperties) => ({
		...base,
		color: '#000000'
	}),
	valueContainer: (base: CSSProperties) => ({
		...base,
		padding: '2px 15px'
	})
};
