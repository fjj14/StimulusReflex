// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.
const channels = require.context('.', true, /_channel\.js$/)
 channels.keys().forEach(channels)