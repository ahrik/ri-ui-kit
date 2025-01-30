import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { BUTTON_SIZES, ButtonSize } from '../types';

import styles from './baseButton.module.scss';

export type BaseButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSize;
    className?: string;
  };

export const BaseButton = ({ children, size = 'medium', className, style, ...restProps }: BaseButtonProps) => {
  const buttonStyles: CSSProperties = {
    height: BUTTON_SIZES[size],
  };

  return (
    <button className={clsx(styles.baseButton, className)} style={style || buttonStyles} {...restProps}>
      {children}
    </button>
  );
};
