import path from 'path'
import fs from 'fs'
import pp from 'preprocess'
const { app } = require('electron').remote

// 通用模板
const indexTplPath = './template/index.tpl' 
// 文件生成路径
const makeFilePath = path.join(app.getPath('temp'), 'generator-act-temp')

let makeFile = (replaceObj, tplPath) => {
    if (!tplPath) {
        tplPath = indexTplPath
    }
    // pp.preprocessFile(src, dest, context, callback, options);
    pp.preprocessFile(tplPath, path.join(makeFilePath, 'index.html'), replaceObj, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.info('success')
        }
    })
}

export {
    makeFile
}