const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

// Listen for app ready
app.on('ready', function() {
  // create new window
  mainWindow = new BrowserWindow({});

  // load html into window
  mainWindow.loadURL(`file://${__dirname}/mainWindow.html`);
});