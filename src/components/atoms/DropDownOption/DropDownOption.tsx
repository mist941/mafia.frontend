import React, {FC} from 'react';
import styles from './DropDownOption.module.scss';
import {Id} from '../../../types/common';

export type DropDownOptionType = {
  id: Id;
  name: string;
}

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