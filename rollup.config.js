import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';

export default {    
    input: 'src/main.js',
    output: {
        name: 'MyBundle',
        file: 'dist/bundle.js',
        format: 'iife',
        globals: {
            lodash: '_'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),        
        json(),
        serve('dist')
    ]
};