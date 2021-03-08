const path = require('path')

module.exports={
    entry:'./src/main.js',
    output:{
        //动态的获取路径__dirname ,当前文件所在路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}