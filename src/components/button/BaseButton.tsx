import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { BUTTON_SIZES, ButtonSize } from '../types';

import styles from './baseButton.module.scss';

const cx = classNamesBind.bind(styles);

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
    <button className={classNames(cx('baseButton'), className)} style={style || buttonStyles} {...restProps}>
      {children}
    </button>
  );
};
