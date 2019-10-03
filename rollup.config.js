import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import terser from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

// Convert CJS modules to ES6, so they can be included in a bundle
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import postcssPresetEnv from 'postcss-preset-env'

const env = process.env.NODE_ENV;

export default {
    input: 'src/index.js',
    output: {
        name: 'MyBundle',
        file: 'build/dist/bundle.js',
        format: 'iife',
        globals: {
            lodash: '_'
        }
    },
    plugins: [
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.json'],
        }),
        json(),
        commonjs({
            include: ['node_modules/**'],
            exclude: ['node_modules/process-es6/**'],
            namedExports: {
              'node_modules/react/index.js': [
                'Children',
                'Component',
                'PropTypes',
                'createElement',
              ],
              'node_modules/react-dom/index.js': ['render'],
            },
          }),
        postcss({
            modules: true,
            plugins: [
              postcssModules({
                generateScopedName: '[local]',
              }),
              postcssPresetEnv({
                stage: 0,
              }),
            ],
          }),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
        env === 'production' && terser(),
        serve('build')
    ]
};