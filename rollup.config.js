import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const plugins = [
  peerDepsExternal(),
  resolve({ extensions }),
  commonjs(),
  typescript({
    tsconfig: 'tsconfig.build.json', // Указывает на специальный tsconfig для сборки
    clean: true,
  }),
  babel({
    extensions,
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  postcss({
    config: {
      path: './postcss.config.js',
    },
    extract: 'src/styles.css', // Извлекает стили в один файл
    minimize: true,
  })
];

export default [{
  // Эта конфигурация для создания отдельных файлов для каждого компонента (cjs и esm)
  input: Object.fromEntries(
    globSync('src/**/*.{ts,tsx}').map(file => [
      // Убираем 'src/' и расширение файла, например, src/nested/foo.js -> nested/foo
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
      ),
      // Преобразуем относительные пути в абсолютные
      fileURLToPath(new URL(file, import.meta.url))
    ])
  ),
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true, // Сохраняет структуру модулей
      entryFileNames: '[name].cjs.js',
    },
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true, // Сохраняет структуру модулей
      entryFileNames: '[name].es.js',
    },
  ],
  plugins: plugins,
  // 'react', 'react-dom', 'react-router-dom' будут доступны через peerDependencies
  external: ['react', 'react-dom', 'react-router-dom'],
}, {
  // Эта конфигурация для создания UMD бандлов (один файл)
  input: 'src/index.ts', // Главная точка входа
  output: [
    {
      dir: 'dist',
      format: 'umd',
      name: 'ZWHEUI', // Глобальное имя при использовании UMD
      entryFileNames: '[name].umd.js',
    },
    {
      dir: 'dist',
      format: 'umd',
      name: 'ZWHEUI',
      entryFileNames: '[name].umd.min.js',
      plugins: [terser()], // Минификация для продакшена
    }
  ],
  plugins: plugins,
  external: ['react', 'react-dom', 'react-router-dom'],
}];