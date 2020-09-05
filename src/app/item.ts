export class Item {
    name: string;
    price: string;
    description: string;
    image: string;
    location: string;
    rating: Rating;
}

export class Shelf {
    name: string;
    description: string;
    items: Item[];
}

export class Page {
    items: Item[];
    term: string;
    filters: Filter[];
    skip: number;
    limit: number;
    total: number;

    constructor(items: Item[]) {
        this.items = items;
    }
}

export class Filter {
    type: string;
    value: string;

    constructor(type: string, value: string) {
        this.type = type;
        this.value = value;
    }
}

export class Rating {
    stars: number;
    count: number;
}

export class Facet {
    name: string;
    records: FacetRecord[];
}

export class FacetRecord {
    name: string;
    count: number;
}
