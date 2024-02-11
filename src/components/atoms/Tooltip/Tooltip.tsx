import React, {FC, ReactElement} from 'react';
import styles from './Tooltip.module.scss';
import Typography from '../Typography/Typography';
import {ReactComponent as TooltipPointer} from '../../../assets/icons/tooltipe-pointer.svg';

export type TooltipProps = {
  children: ReactElement;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({children, text}) => {


  return (
    <div className={styles.tooltipWrap}>
      {children}
      {text && (
        <div className={styles.tooltip}>
          <Typography.Paragraph size='m'>
            {text}
          </Typography.Paragraph>
          <TooltipPointer className={styles.tooltipPointer}/>
        </div>
      )}
    </div>
  );
};

export default Tooltip;