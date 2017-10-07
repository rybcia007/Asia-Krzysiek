import { Custom } from './../../shared/models/baseModels';

export class ItemPicture {
    url: string;
    describe: string;

    constructor(url: string, describe: string) {
        this.url = url;
        this.describe = describe;
    }
}