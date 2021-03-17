const electron = require('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

// Listen for app ready
app.on('ready', function() {
  // create new window
  mainWindow = new BrowserWindow({});

  // load html into window
  mainWindow.loadURL(`file://${__dirname}/mainWindow.html`);

  // build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu
  Menu.setApplicationMenu(mainMenu);
});

// create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
]