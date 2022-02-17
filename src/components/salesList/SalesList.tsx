import { List } from "@mui/material";
import { Sale } from "../../types/Items";
import Sales from "./Sales";

type SalesListPropType = {
    sales: Sale[] | undefined
}

const SalesList = ({ sales }: SalesListPropType) => {
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
            {sales?.map(sale => <Sales sale={sale} />)}
        </List>
    )
}

export default SalesList
