const path = require('path')


module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'widget'),
        libraryTarget: 'amd'
    },
    module:{
        rules:[   //загрузчик для jsx
        {
            test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    
    
}