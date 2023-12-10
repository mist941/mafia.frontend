import React, {FC} from 'react';
import Input, {InputProps} from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Error from '../../atoms/Error/Error';
import styles from './InputField.module.scss';

type InputFieldProps = {
  label?: string;
  error?: string;
} & InputProps;

const InputField: FC<InputFieldProps> = ({label, error, ...rest}) => {
  return (
    <div className={styles.inputField}>
      {label && <Label label={label}/>}
      <Input {...rest}/>
      {error && <Error error={error}/>}
    </div>
  );
};

export default InputField;