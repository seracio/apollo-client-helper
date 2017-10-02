const fs = require('fs');
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    sourceMap: false,
    external: ['apollo-client', 'apollo-cache-inmemory', 'apollo-link-http'],
    plugins: [
        commonjs(),
        resolve(),
        buble({
            objectAssign: 'Object.assign'
        })
    ]
};
