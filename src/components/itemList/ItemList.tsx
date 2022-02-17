import { List } from "@mui/material";
import Item from "./Item";
import { ItemAttributes } from "../../types/Items"


type ItemListProps = {
    items: ItemAttributes[] | undefined
}

const ItemList = ({ items }: ItemListProps) => {
    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
        >
            {items?.map(item => <Item item={item} />)}
        </List>
    )
}

export default ItemList
