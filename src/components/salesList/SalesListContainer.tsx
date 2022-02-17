import { Container, Divider } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import SalesList from "./SalesList"

export type SaleType = {
    product: string,
    id: number,
    quantity: number
}


const SalesListContainer = () => {
    const { salesList } = useContext(AppContext);
    return (
        <Container sx={{ borderRadius: 2, boxShadow: 4, marginY: "5rem", padding: "1rem", border: 1, borderBlockWidth: "0.01rem", borderColor: "grey.500", width: "95%" }} disableGutters={true}>
            <h2>Sales</h2>
            <Divider />
            <SalesList sales={salesList} />
        </Container >
    )
}

export default SalesListContainer
