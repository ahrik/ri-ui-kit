export const BUTTON_SIZES = {
  medium: 44,
  small: 34,
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES;
