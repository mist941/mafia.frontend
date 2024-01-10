import {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import styles from './Typography.module.scss';
import classNames from 'classnames';

type ParagraphSizes = 'xl' | 'l' | 'm' | 's' | 'xs';
type TypographyColors = 'base' | 'light' | 'success' | 'error' | 'secondary' | 'disable';
type TypographyWeight = 'regular' | 'medium' | 'bold';

type HeadingProps = {
  color?: TypographyColors;
  weight?: TypographyWeight;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

type ParagraphProps = {
  size?: ParagraphSizes;
  color?: TypographyColors;
  weight?: TypographyWeight;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Heading1: FC<HeadingProps> = (
  {
    children,
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <h1
    {...rest}
    className={classNames(
      styles.h1,
      styles[color],
      styles[weight],
    )}
  >
    {children}
  </h1>
);

const Heading2: FC<HeadingProps> = (
  {
    children,
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <h2
    {...rest}
    className={classNames(
      styles.h2,
      styles[color],
      styles[weight],
    )}
  >
    {children}
  </h2>
);

const Heading3: FC<HeadingProps> = (
  {
    children,
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <h3
    {...rest}
    className={classNames(
      styles.h3,
      styles[color],
      styles[weight],
    )}
  >
    {children}
  </h3>
);

const Heading4: FC<HeadingProps> = (
  {
    children,
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <h4
    {...rest}
    className={classNames(
      styles.h4,
      styles[color],
      styles[weight],
    )}
  >
    {children}
  </h4>
);

const Heading5: FC<HeadingProps> = (
  {
    children,
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <h5
    {...rest}
    className={classNames(
      styles.h5,
      styles[color],
      styles[weight],
    )}
  >
    {children}
  </h5>
);

const Paragraph: FC<ParagraphProps> = (
  {
    children,
    size = 'xl',
    color = 'base',
    weight = 'regular',
    ...rest
  }
) => (
  <p
    {...rest}
    className={classNames(
      styles.p,
      styles[size],
      styles[color],
      styles[weight],
      rest.className
    )}
  >
    {children}
  </p>
);

/**
 * Represents a collection of typography styles.
 * @typedef {Object} Typography
 * @property {string} Heading1 - The style for heading level 1.
 * @property {string} Heading2 - The style for heading level 2.
 * @property {string} Heading3 - The style for heading level 3.
 * @property {string} Heading4 - The style for heading level 4.
 * @property {string} Heading5 - The style for heading level 5.
 * @property {string} Paragraph - The style for a paragraph.
 */
const Typography = {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Paragraph
};

export default Typography;