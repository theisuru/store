export class Item {
    name: string;
    price: number;
    description: string;
}

export class Shelf {
    name: string;
    description: string;
    items: Item[];
}
