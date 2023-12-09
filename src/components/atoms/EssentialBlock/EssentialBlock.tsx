import React, {FC, ReactNode} from 'react';
import styles from './EssentialBlock.module.scss';

interface EssentialBlockProps {
  children?: ReactNode;
  padding?: string;
}

const EssentialBlock: FC<EssentialBlockProps> = ({children, padding = 0}) => {
  return (
    <section
      style={{padding}}
      className={styles.essentialBlock}
    >
      {children}
    </section>
  );
};

export default EssentialBlock;