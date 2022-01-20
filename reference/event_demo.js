const EventEmitter = require('events')


// Create Class
class MyEmitter extends EventEmitter { }


// Init Object
const my_emitter = new MyEmitter();


// Event Listener
my_emitter.on('event', () => console.log("Event Fired!"))


// Init Event
my_emitter.emit('event')