const EventEmitter = require("events")
const eventemitter = new EventEmitter() 

const countHandler = (count) => console.log(count)

eventemitter.on("count", countHandler)
eventemitter.on("count", (count) => console.log(`Count = ${count}`))

eventemitter.emit("count", "1")

eventemitter.removeListener("count", countHandler)

eventemitter.emit("count", 10)
eventemitter.emit("close")