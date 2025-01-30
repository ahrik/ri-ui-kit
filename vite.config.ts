import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Для добавления типов в package.json
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RiUiKit',
      formats: ['es', 'umd'],
      fileName: format => `ri-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
