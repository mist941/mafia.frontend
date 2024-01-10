import React, {FC} from 'react';
import Typography from '../Typography/Typography';

type LabelProps = {
  label: string;
}

/**
 * Represents a label component.
 * @param {Object} props - The props for the label component.
 * @param {string} props.label - The text to be displayed as the label.
 * @returns {JSX.Element} - The label component.
 */
const Label: FC<LabelProps> = ({label}) => {
  return <Typography.Paragraph size='s' color='light'>{label}</Typography.Paragraph>;
};

export default Label;