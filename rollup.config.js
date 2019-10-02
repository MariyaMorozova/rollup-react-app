import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {    
    input: 'src/main.ts',
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
        typescript(),
        json(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        serve('dist')
    ]
};