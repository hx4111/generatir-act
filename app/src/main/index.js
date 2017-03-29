'use strict'

import path from 'path'
import fs from 'fs'
import { app, BrowserWindow } from 'electron'
import protocols from 'electron-protocols'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 1000,
    width: 1600
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}

app.on('ready', createWindow)

// regist file protocol 'apptemp'
let tempImgPath = path.join(app.getPath('temp'), 'generator-act-temp', 'images')
if (fs.existsSync(tempImgPath)) {
  let dirList = fs.readdirSync(tempImgPath)
  dirList.forEach((fileName) => {
      fs.unlinkSync(path.join(tempImgPath, fileName))
  })
} else {
  fs.mkdirSync(tempImgPath)
}
protocols.register('apptempimg', protocols.basepath(tempImgPath));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
