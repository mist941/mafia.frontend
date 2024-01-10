import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';

export type InputProps =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

/**
 * Represents a functional component that renders an input element with specified props.
 *
 * @param {InputProps} rest - Additional props to be passed to the input element.
 * @returns {JSX.Element} - The rendered input element.
 */
const Input: FC<InputProps> = ({...rest}) => {
  return (
    <input
      {...rest}
      className={styles.input}
    />
  );
};

export default Input;