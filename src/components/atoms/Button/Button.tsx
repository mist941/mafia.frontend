import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonStyles = 'primary' | 'secondary' | 'tertiary' | 'secondary-transparent';
type ButtonSizes = 'm' | 's' | 'xs';

export type ButtonProps = {
  styled?: ButtonStyles;
  size?: ButtonSizes;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonProps> = ({styled = 'primary', size = 'm', ...rest}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        styles[styled],
        styles[size]
      )}
    />
  );
};

export default Button;