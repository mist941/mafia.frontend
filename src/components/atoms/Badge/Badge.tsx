import React, {FC} from 'react';
import styles from './Badge.module.scss';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import {SystemPresetColors} from '../../../types/common';

type BadgeTypes = 'default' | 'full-colored';

type BadgeSizes = 'l' | 'm' | 's';

type BadgeProps = {
  text: string;
  color: SystemPresetColors;
  size?: BadgeSizes;
  type?: BadgeTypes;
}

const Badge: FC<BadgeProps> = (
  {
    text,
    color,
    size = 'm',
    type = 'default'
  }
) => {
  return (
    <div
      className={classNames(
        styles.badge,
        styles[color],
        styles[size],
        styles[type]
      )}
    >
      <Typography.Paragraph
        className={classNames(
          styles.badgeText,
          styles[color],
          styles[type]
        )}
        size={size}
      >
        {text}
      </Typography.Paragraph>
    </div>
  );
};

export default Badge;