import React, {FC, ReactNode} from 'react';
import styles from './EssentialBlock.module.scss';
import classNames from 'classnames';

type EssentialBlockProps = {
  children?: ReactNode;
  padding?: string;
  className?: string;
}

const EssentialBlock: FC<EssentialBlockProps> = (
  {
    children,
    padding = 0,
    className
  }
) => {
  return (
    <section
      style={{padding}}
      className={classNames(styles.essentialBlock, className)}
    >
      {children}
    </section>
  );
};

export default EssentialBlock;