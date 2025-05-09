import initCommand from './commands/init.js';
import { boot } from '../../bin/cli.js';
import { state } from '../../bin/cli.js';

const commandRegistry = {
    init: (...args) => {
        process.stdin.removeAllListeners('keypress'); // Completely disable keypress listener
        state.mode = 'edit'; // Set state.mode to 'edit' for the init command
        initCommand(...args);
    },
    editor: boot,
};

export default commandRegistry;