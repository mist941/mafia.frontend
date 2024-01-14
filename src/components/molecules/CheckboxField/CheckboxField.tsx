import React, {FC} from 'react';
import styles from './CheckboxField.module.scss';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Label from '../../atoms/Label/Label';
import {InputProps} from '../../atoms/Input/Input';
import {TypographyColors} from '../../atoms/Typography/Typography';

type CheckboxFieldProps = {
  label?: string;
} & InputProps;

const CheckboxField: FC<CheckboxFieldProps> = ({label, ...rest}) => {
  let labelColor: TypographyColors = 'light';
  if (rest.disabled) labelColor = 'disable';

  return (
    <div className={styles.checkboxField}>
      <Checkbox {...rest}/>
      {label && <Label label={label} color={labelColor}/>}
    </div>
  );
};

export default CheckboxField;