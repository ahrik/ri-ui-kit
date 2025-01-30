import { CSSProperties } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';
import { BUTTON_SIZES } from '../types';

import styles from './iconButton.module.scss';

type Props = BaseButtonProps & {
  isPrimary?: boolean;
};

export const IconButton = ({ size = 'medium', isPrimary, className, ...restProps }: Props) => {
  const buttonSize = BUTTON_SIZES[size];

  const buttonStyles: CSSProperties = {
    height: buttonSize,
    width: buttonSize,
  };

  return (
    <BaseButton
      {...restProps}
      className={clsx(styles.iconButton, isPrimary && styles.iconButtonPrimary, className)}
      style={buttonStyles}
    />
  );
};
