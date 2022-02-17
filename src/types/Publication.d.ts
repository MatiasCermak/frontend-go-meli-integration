export interface Publication {
    description: string;
    ItemPub:     ItemPub;
}

export interface ItemPub {
    title:              string;
    category_id:        string;
    price:              number;
    currency_id:        string;
    available_quantity: number;
    buying_mode:        string;
    condition:          string;
    listing_type_id:    string;
    sale_terms:         Attribute[];
    pictures:           Picture[];
    attributes:         Attribute[];
}

export interface Attribute {
    id:         string;
    value_name: string;
}

export interface Picture {
    source: string;
}
