import {spawn} from 'child_process';
import inquirer from 'inquirer';

(async function convert() {
    const {result: width} = await inquirer.prompt([{
        type: 'number',
        name: 'result',
        message: 'Width'
    }])

    const {result: height} = await inquirer.prompt([{
        type: 'number',
        name: 'result',
        message: 'Height'
    }])

    const {result: path} = await inquirer.prompt([{
        type: 'number',
        name: 'result',
        message: 'Path'
    }])

    const {result: name} = await inquirer.prompt([{
        type: 'number',
        name: 'result',
        message: 'Name'
    }])
})();
