import React, {FC} from 'react';
import styles from './DropDownOption.module.scss';
import {DropDownOptionType} from '../../molecules/SearchDropDown/SearchDropDown';

type DropDownOptionProps = DropDownOptionType & {
  onSelect: (option: DropDownOptionType) => void;
  button?: string;
};

const DropDownOption: FC<DropDownOptionProps> = () => {
  return (
    <div className={styles.option}>
      Option
    </div>
  );
};

export default DropDownOption;