require('babel-register')
require('babel-polyfill')

// jsdom creates a document for us
global.document = require('jsdom').jsdom('<body><div id="app"</div></body>')

// document creates a window
global.window = document.defaultView

global.navigator = window.navigator


