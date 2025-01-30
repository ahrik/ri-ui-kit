import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint2';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
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
