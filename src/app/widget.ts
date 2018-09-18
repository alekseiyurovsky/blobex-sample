import {Section} from "./section"

export class Widget {
    id: number;
    name: string;
    type: string;
    items: Array<Section>;

    constructor(
        id: number,
        name: string,
        type: string,
        items: Array<Section>
    ){
        this.id = id;
        this.name = name;
        this.type = type;
        this.items = items;
    }

}