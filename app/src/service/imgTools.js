import gm from 'gm'
import path from 'path'
import fs from 'fs'
import 'babel-polyfill'
import crypto from 'crypto'

const { dialog, app } = require('electron').remote

const config = {
    cropHeight: 600
}

let tempImgFolder = path.join(app.getPath('temp'), 'generator-act-temp')
if (tempImgFolder) {
    if (!fs.existsSync(tempImgFolder)) {
        fs.mkdirSync(tempImgFolder)
    }
    tempImgFolder = path.join(tempImgFolder, 'images')
    if (fs.existsSync(tempImgFolder)) {
        let dirList = fs.readdirSync(tempImgFolder)
        dirList.forEach((fileName) => {
            fs.unlinkSync(path.join(tempImgFolder, fileName))
        })
    } else {
        fs.mkdirSync(tempImgFolder)
    }
}
let tempIndexImg = path.join(tempImgFolder, 'index.jpg')
const ImgTools = {}

ImgTools.chooseImg = () => {
    let imgPath = dialog.showOpenDialog({
        properties: ['openFile']
    })
    if (imgPath) {
        return copyImg(imgPath[0]).then(() => cropImgs(tempIndexImg))
    }
    return null
}

let copyImg = imgPath => { 
    return new Promise((resolve, reject) => {
        if (tempImgFolder) {
            let tempImgPath = tempImgFolder // 创建临时文件夹
            if (imgPath) {
                console.info(path.join(tempImgPath, 'index.jpg'))
                let fileReadStream = fs.createReadStream(imgPath)
                let fileWriteStream = fs.createWriteStream(tempIndexImg)  
                fileReadStream.pipe(fileWriteStream)
                fileWriteStream.on('close', () => {
                    console.info('copy success')
                    resolve()
                })
            }
        } else {
            console.info('tempImgFolder error')
            reject()
        }
    })
}

let cropImgs = (imgPath) => {
    let indexBaseImgPath = path.dirname(imgPath)
    let indexImgPath = indexBaseImgPath + '/index.jpg'

    return new Promise((resolve, reject) => {
        gm(imgPath)
        .resize(640)
        .autoOrient()
        .write(indexImgPath, err => {
            if (err) {
                console.info('gm reszie error: ' + err)
                reject(err)
            } else {
                gm(imgPath)
                .size((err, size) => {
                    if (err) {
                        console.info('gm size err: ' + err)
                        reject(err)
                    } else {
                        let imgWidth = size.width,
                            imgHeight = size.height,
                            cropWidth = imgWidth, 
                            cropHeight = config.cropHeight,
                            cropCnt = Math.ceil(imgHeight / cropHeight)

                        let dataObj = {
                            cropWidth,
                            cropHeight,
                            imgPath,
                            baseImgPath: indexBaseImgPath
                        }
                        let promiseArr = [];

                        for (let i = 0; i < cropCnt; i++) {
                            dataObj.index = i;
                            promiseArr.push(cropImg(dataObj));
                        }
                        Promise.all(promiseArr).then((imgArray) => {
                            resolve(imgArray)
                        }).catch((reason) => {
                            console.info(reason)
                        })
                    }
                })
            }
        })
    })
}

let cropImg = ({ baseImgPath, imgPath, cropWidth, cropHeight, index }) => {
    return new Promise((resolve, reject) => {
        let cropImgPath = path.join(baseImgPath, 'index_' + index + '.jpg')

        gm(imgPath)
        .crop(cropWidth, cropHeight, 0, index * cropHeight)
        .write(cropImgPath, function(err) {
            if (err) {
                console.info('gm crop img err: ' + index)
                reject(err)
            } else {
                // hash
                let hashName = crypto.createHash('md5')
                    .update(fs.readFileSync(cropImgPath))
                    .digest('hex') + '.jpg'
                let newImgPath = path.join(baseImgPath, hashName)
                // rename
                fs.renameSync(cropImgPath, newImgPath)
                resolve(hashName)
            }
        })
    })
}

export {
    ImgTools
}