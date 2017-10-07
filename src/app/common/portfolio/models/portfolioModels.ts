import { Custom } from './../../shared/models/baseModels';

export class ItemPicture {
    url: string;
    describe: string;
    settings?: Array<Custom>;

    constructor(url: string, describe: string, settings?: Array<Custom>) {
        this.url = url;
        this.describe = describe;
        this.settings = settings;
    }
}