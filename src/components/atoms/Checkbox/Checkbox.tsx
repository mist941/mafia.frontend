import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import {ReactComponent as CheckedIcon} from '../../../assets/icons/checked.svg';

export type CheckboxProps =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

/**
 * Checkbox component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Whether the checkbox is disabled.
 * @param {boolean} props.checked - Whether the checkbox is checked.
 * @returns {ReactElement} - The rendered checkbox element.
 */
const Checkbox: FC<CheckboxProps> = ({...rest}) => {
  return (
    <div className={classNames(
      styles.checkboxWrap,
      {
        [styles.disabled]: rest.disabled,
        [styles.checked]: rest.checked
      },
    )}>
      <input
        {...rest}
        type='checkbox'
      />
      <div className={styles.check}>
        {rest.checked && <CheckedIcon/>}
      </div>
    </div>
  );
};

export default Checkbox;