import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import { peerDependencies } from './package.json'

const extensions = ['.js', '.jsx', '.json']

const IS_DEV = process.env.NODE_ENV === 'development'

const config = {
    input: 'package/src/index.js',
    output: {
        format: 'umd',
        name: 'ReactEasyUseStore',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    external: Object.keys(peerDependencies || {}),
    plugins: [
        resolve({
            extensions,
        }),
        babel({
            include: 'package/**/*',
            exclude: '**/node_modules/**',
            babelHelpers: 'runtime',
            extensions,
        }),
        commonjs(),
    ],
}

if (!IS_DEV) {
    config.plugins.push(
        terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
            },
        })
    )
}

export default config