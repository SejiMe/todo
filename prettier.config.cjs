/** @type {import("prettier").Config} */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    singleAttributePerLine: true,
    singleQuote: true,
    bracketSpacing: true,
    printWidth: 70,
    trailingComma: 'es5',
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
