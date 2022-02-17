import { Container, Divider } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const { itemList } = useContext(AppContext);
    return (
        <Container sx={{ borderRadius: 2, boxShadow: 4, marginY: "5rem", padding: "1rem", border: 1, borderBlockWidth: "0.01rem", borderColor: "grey.500", width: "95%" }} disableGutters={true} >
            <h2>Items</h2>
            <Divider />
            <ItemList items={itemList?.map((elem) => elem.Item)} />
        </Container >
    )
}

export default ItemListContainer
