import React, {FC} from 'react';
import styles from './Error.module.scss';

interface ErrorProps {
  error: string;
}

const Error: FC<ErrorProps> = ({error}) => {
  return <p className={styles.error}>{error}</p>;
};

export default Error;