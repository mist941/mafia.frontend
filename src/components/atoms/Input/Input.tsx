import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';

export type InputProps =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<InputProps> = ({...rest}) => {
  return (
    <input
      {...rest}
      className={styles.input}
    />
  );
};

export default Input;