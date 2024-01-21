import React, {FC, ReactNode} from 'react';
import styles from './EssentialBlock.module.scss';
import classNames from 'classnames';

type EssentialBlockProps = {
  children?: ReactNode;
  padding?: string;
  className?: string;
}

const DEFAULT_PADDING = '16px';

/**
 * A functional component that represents an essential block.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children to be rendered inside the essential block.
 * @param {number} [props.padding=16px] - The padding value for the essential block.
 * @param {string} [props.className] - The additional class name for the essential block.
 * @returns {ReactElement} The rendered essential block.
 */
const EssentialBlock: FC<EssentialBlockProps> = (
  {
    children,
    padding = DEFAULT_PADDING,
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