import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonStyles = 'primary' | 'secondary' | 'tertiary' | 'secondary-transparent';
type ButtonSizes = 'm' | 's' | 'xs';

export type ButtonProps = {
  styled?: ButtonStyles;
  size?: ButtonSizes;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

/**
 * Button component
 *
 * @component
 *
 * @param {Object} props - The props object
 * @param {string} [props.styled='primary'] - The style type of the button
 * @param {string} [props.size='m'] - The size of the button
 * @param {...*} [props.rest] - Additional props to be spread onto the button element
 *
 * @returns {JSX.Element} - The rendered button component
 */
const Button: FC<ButtonProps> = ({styled = 'primary', size = 'm', ...rest}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        styles[styled],
        styles[size],
        {[styles.disabled]: rest.disabled}
      )}
    />
  );
};

export default Button;