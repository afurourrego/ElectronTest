const electron = require('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;
let addWindow;

// Listen for app ready
app.on('ready', function() {
  // create new window
  mainWindow = new BrowserWindow({
    title: 'ElectronTest'
  });

  // load html into window
  mainWindow.loadURL(`file://${__dirname}/mainWindow.html`);

  // quit app when closed
  mainWindow.on('closed', function() {
    app.quit();
  });

  // build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle create add window
function createAddWindow() {
  // create new window
  addWindow = new BrowserWindow({
    height: 200,
    width: 300,
    title: 'Add new item',
    alwaysOnTop: true,
    minimizable: false,
    maximizable: false,
    resizable: false,
  });

  // load html into window
  addWindow.loadURL(`file://${__dirname}/addWindow.html`);

  // garbage collection handle
  addWindow.on('close', function() {
    addWindow = null;
  });
}

// create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add item',
        accelerator: process.platform == 'darwin' ? 'Command+N' : 'Ctrl+N',
        click() {
          createAddWindow();
        }
      },
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