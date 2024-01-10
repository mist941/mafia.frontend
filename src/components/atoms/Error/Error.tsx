import React, {FC} from 'react';
import styles from './Error.module.scss';

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
  return <p className={styles.error}>{error}</p>;
};

export default Error;