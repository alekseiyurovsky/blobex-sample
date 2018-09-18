export class SectionInput {
    type: string;
    label: string;
    value: string | number;
    required: boolean;
    symbol: string;
    precision: number;
    
    constructor(
        type: string,
        label: string,
        value: string | number,
        required?: boolean,
        symbol?: string,
        precision?: number
    ){
        this.type = type;
        this.label = label;
        this.value = value;
        this.required = required;
        this.symbol = symbol || '';
        this.precision = precision || 0;
    }
}