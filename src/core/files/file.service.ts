import { promises } from 'fs';
import {dirname, join, isAbsolute} from 'path';

export class FileService {

    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true;
            
        } catch (error) {
            return false;
        }
    }

    public getFilePath(path: string, name: string, ext: string) {
        if(!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    async deleteFileIfExist(path: string) {
        if(await this.isExist(path)) {
            promises.unlink(path);
        }
    }
}