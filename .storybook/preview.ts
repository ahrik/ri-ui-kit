import '../src/styles/theme.css';

import type { Decorator, Preview } from '@storybook/react';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  return Story(context.args);
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme switcher',
      default: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'light-premium', 'dark', 'dark-premium'],
        showName: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
