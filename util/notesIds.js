// use sequential ids to generate unique ids
const sequentialIds = require('sequential-ids')
const generator= new  sequentialIds.Generator({
    digits: 5,
    restore: "00000"
})

generator.start()

module.exports = generator