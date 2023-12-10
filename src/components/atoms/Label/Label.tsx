import React, {FC} from 'react';
import styles from './Label.module.scss';

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({label}) => {
  return <p className={styles.label}>{label}</p>;
};

export default Label;