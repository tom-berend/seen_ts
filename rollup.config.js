import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: 'demo.ts',
    plugins: [
        typescript({module: 'CommonJS'}),
        resolve(),
        commonjs({
            include: 'node_modules/**',
        })
    ],
    output: {
        file: 'dist/seen_ts.js',
        name: 'seen_ts.js',
        format: 'iife',
        globals: {
            alive: 'index'
        },
    }
}