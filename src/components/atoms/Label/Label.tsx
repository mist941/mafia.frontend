import React, {FC} from 'react';
import Typography from '../Typography/Typography';

type LabelProps = {
  label: string;
}

const Label: FC<LabelProps> = ({label}) => {
  return <Typography.Paragraph size='s' color='light'>{label}</Typography.Paragraph>;
};

export default Label;