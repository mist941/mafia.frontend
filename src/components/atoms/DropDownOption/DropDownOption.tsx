import React, {FC, ReactElement} from 'react';
import styles from './DropDownOption.module.scss';
import {Id} from '../../../types/common';
import Typography from '../Typography/Typography';

export type DropDownOptionType = {
  id: Id;
  name: string;
}

type DropDownOptionProps = DropDownOptionType & {
  onSelect: (option: DropDownOptionType) => void;
  button?: string;
  icon?: ReactElement;
};

const DropDownOption: FC<DropDownOptionProps> = (
  {
    id,
    name,
    icon,
    onSelect
  }
) => {

  const select = () => {
    onSelect({id, name});
  }

  return (
    <li className={styles.option} onClick={select}>
      <div className={styles.leftSide}>
        {icon}
        <Typography.Paragraph size='s'>
          {name}
        </Typography.Paragraph>
      </div>
    </li>
  );
};

export default DropDownOption;