const { Command } = require('../../src');

class ConditionalCommand extends Command {
    constructor() {
        super('condition');
    }

    condition(message) {
        return message.content === 'make me condition';
    }

    exec(message) {
        return message.reply('made you condition');
    }
}

module.exports = ConditionalCommand;
