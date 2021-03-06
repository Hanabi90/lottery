module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['fixed_layout'],
            minPixelValue: 1,
            mediaQuery: true,
            propList: ['*']
        },
        // 'postcss-pxtorem':{
        //     rootValue: 100,
        //     minPixelValue: 2,
        //     propWhiteList: []
        //   }
    }
}
