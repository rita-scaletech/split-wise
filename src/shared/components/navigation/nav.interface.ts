import { FC } from 'react';
import { IIconProps } from '../icons/icons';

export interface ISideNavOpt {
	SvgIcon: FC<IIconProps>;
	urlLink: string;
	title: string;
}
