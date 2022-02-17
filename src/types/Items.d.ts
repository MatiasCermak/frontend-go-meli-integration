export type Payload = {
    "Items": Item[],
    "Sales": Sale[]
}

export type Sale = {
    "Id": number,
    "Title": string,
    "Date": string,
    "Price": number,
    "PriceTotal": number
} 

export type Item = {
    "Item": ItemAttributes,
    "Questn": Question[]
}

export type ItemAttributes  = {
    "Id": number,
    "Title": string,
    "Price": number,
    "Quantity": number,
    "SoldQuantity": number,
    "Picture": string 
}

export type Question = {
    "date_created": string,
    "item_id": string,
    "seller_id": number,
    "status": string,
    "text": string,
    "id": number,
    "deleted_from_listing": boolean,
    "ItemCarrierDefiniteId": number
}