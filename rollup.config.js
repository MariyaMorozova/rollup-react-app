import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import terser from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const env = process.env.NODE_ENV;

export default {    
    input: 'src/index.js',
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
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
        commonjs(),        
        babel({
            exclude: 'node_modules/**'
        }),        
        json(),
        env === 'production' && terser(),
        serve('dist')
    ]
};