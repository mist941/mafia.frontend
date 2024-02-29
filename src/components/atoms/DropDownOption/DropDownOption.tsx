import React, {FC} from 'react';
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
};

const DropDownOption: FC<DropDownOptionProps> = ({name}) => {
  return (
    <li className={styles.option}>
      <Typography.Paragraph size='s'>
        {name}
      </Typography.Paragraph>
    </li>
  );
};

export default DropDownOption;