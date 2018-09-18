import {SectionInput} from "./section-input"

export class Section {
    type: string;
    header: string;
    columns: number;
    items: Array<SectionInput>;

    constructor(
        type: string,
        header: string,
        columns: number,
        items: Array<SectionInput>
    ){
        this.type = type;
        this.header = header;
        this.columns = columns;
        this.items = items;
    }
}
