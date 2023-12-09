import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonStyles = 'primary' | 'secondary';

export type ButtonProps = {
  styled?: ButtonStyles;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonProps> = ({styled = 'primary', ...rest}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        styles[styled]
      )}
    />
  );
};

export default Button;