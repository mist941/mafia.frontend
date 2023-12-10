import React, {FC} from 'react';
import Typography from '../Typography/Typography';

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({label}) => {
  return <Typography.Paragraph size='xs'>{label}</Typography.Paragraph>;
};

export default Label;