import React, {FC} from 'react';
import {ReactComponent as LogoIcon} from '../../../assets/icons/logo.svg';
import styles from './Logo.module.scss';
import classNames from 'classnames';

type LogoSizes = 'large' | 'medium';

type LogoProps = {
  size?: LogoSizes;
}

/**
 * Represents a logo component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.size - The size of the logo. Defaults to 'large'.
 * @returns {JSX.Element} - The logo component.
 */
const Logo: FC<LogoProps> = ({size = 'large'}) => {
  return (
    <div className={classNames(styles.logo, styles[size])}>
      <LogoIcon/>
    </div>
  );
};

export default Logo;