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
    tsconfig: 'tsconfig.build.json', 
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
    extract: 'src/styles.css',  
    minimize: true,
  })
];

export default [{ 
  input: Object.fromEntries(
    globSync('src/**/*.{ts,tsx}').map(file => [ 
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
      ), 
      fileURLToPath(new URL(file, import.meta.url))
    ])
  ),
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true, 
      entryFileNames: '[name].cjs.js',
      sourcemap: "inline",
    },
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true, 
      entryFileNames: '[name].es.js',
      sourcemap: "inline",
    },
  ],
  plugins: plugins, 
  external: ['react', 'react-dom', 'react-router-dom'],
}, { 
  input: 'src/index.ts', 
  output: [
    {
      dir: 'dist',
      format: 'umd',
      name: 'ZWHEUI', 
      entryFileNames: '[name].umd.js',
      sourcemap: "inline",
    },
    {
      dir: 'dist',
      format: 'umd',
      name: 'ZWHEUI',
      entryFileNames: '[name].umd.min.js',
      sourcemap: "inline",
      plugins: [terser()], 
    }
  ],
  plugins: plugins,
  external: ['react', 'react-dom', 'react-router-dom'],
}];