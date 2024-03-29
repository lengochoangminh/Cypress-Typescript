/// <reference types="cypress" />

// enable logging
module.exports = (on) => {
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
        table(message) {
            console.table(message)
            return null
        }
    })
}