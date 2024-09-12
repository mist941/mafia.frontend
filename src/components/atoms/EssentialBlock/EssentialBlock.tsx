import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react';
import styles from './EssentialBlock.module.scss';
import classNames from 'classnames';

type EssentialBlockProps = {
  children?: ReactNode;
  padding?: string;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const DEFAULT_PADDING = '16px';

const EssentialBlock: FC<EssentialBlockProps> = (
  {
    children,
    padding = DEFAULT_PADDING,
    ...rest
  }
) => {
  return (
    <div
      {...rest}
      style={{padding, ...rest.style}}
      className={classNames(styles.essentialBlock, rest.className)}
    >
      {children}
    </div>
  );
};

export default EssentialBlock;