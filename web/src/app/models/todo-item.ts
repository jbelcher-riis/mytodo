export class TodoItem {
    id: number;
    description: string = "";
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}