const { BABEL_ENV } = process.env
const cjs = BABEL_ENV === 'commonjs'

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                },
                bugfixes: true,
                modules: false,
                loose: true,
            },
        ],
    ],
    plugins: [
        '@babel/transform-react-jsx',
        cjs && ['@babel/transform-modules-commonjs'],
        [
            '@babel/transform-runtime',
            {
                useESModules: !cjs,
                version: require('./package.json').dependencies[
                    '@babel/runtime'
                ].replace(/^[^0-9]*/, ''),
            },
        ],
    ].filter(Boolean),
    assumptions: {
        enumerableModuleMeta: true,
    },
}
