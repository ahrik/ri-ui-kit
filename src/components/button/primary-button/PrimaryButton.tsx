import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';

import styles from './primaryButton.module.scss';

type Props = BaseButtonProps & {};

export const PrimaryButton = (props: Props) => {
  return <BaseButton {...props} className={styles.primaryButton} />;
};
