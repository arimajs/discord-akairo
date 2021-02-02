/* eslint-disable no-console */

const { Listener } = require('../..');

class InvalidMessageListener extends Listener {
    constructor() {
        super('messageInvalid', {
            emitter: 'commandHandler',
            event: 'messageInvalid',
            category: 'commandHandler'
        });
    }

    exec(msg) {
        console.log('invalid: ', msg.content);
    }
}

module.exports = InvalidMessageListener;
