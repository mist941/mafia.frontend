import React, {FC} from 'react';
import Typography from '../Typography/Typography';

type ErrorProps = {
  error: string;
}

/**
 * Functional component that displays an error message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.error - The error message to display.
 *
 * @returns {ReactElement} The rendered error message component.
 */
const Error: FC<ErrorProps> = ({error}) => {
  return <Typography.Paragraph size='s' color='error'>{error}</Typography.Paragraph>;
};

export default Error;