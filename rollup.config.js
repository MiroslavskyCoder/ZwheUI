import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';  
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
  input: Object.fromEntries(
		globSync('src/**/*.{ts,tsx}').map(file => [
			// This removes `src/` as well as the file extension from each
			// file, so e.g. src/nested/foo.js becomes nested/foo
			path.relative(
				'src',
				file.slice(0, file.length - path.extname(file).length)
			),
			// This expands the relative paths to absolute paths, so e.g.
			// src/nested/foo becomes /project/src/nested/foo.js
			fileURLToPath(new URL(file, import.meta.url))
		])
	),
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true, 
      entryFileNames: '[name].cjs.js',
    },
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      entryFileNames: '[name].es.js',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
      clean: true,
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
