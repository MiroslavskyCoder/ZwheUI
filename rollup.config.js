import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; 
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
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
      extract: 'styles.css',
      minimize: true,
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'react-router-dom'],
};
