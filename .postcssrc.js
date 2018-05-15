// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-px2vw')({
            vwUnit: 75
        }),
        require('autoprefixer')({browsers: ['iOS>7', 'Android>4']})
    ]
};
