import {PromptService} from './core/prompt/prompt.service';

export class App {
    async run() {
        const res = await (new PromptService()).input<number>('Chislo', 'number');
        console.log(res)
    }
}

const app = new App();
app.run();
// stam