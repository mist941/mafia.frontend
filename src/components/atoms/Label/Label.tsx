import React, {FC} from 'react';
import Typography, {TypographyColors} from '../Typography/Typography';

type LabelProps = {
  label: string;
  color?: TypographyColors;
}

/**
 * Represents a label component.
 * @param {Object} props - The props for the label component.
 * @param {string} props.label - The text to be displayed as the label.
 * @returns {JSX.Element} - The label component.
 */
const Label: FC<LabelProps> = ({label, color = 'light'}) => {
  return <Typography.Paragraph size='s' color={color}>{label}</Typography.Paragraph>;
};

export default Label;