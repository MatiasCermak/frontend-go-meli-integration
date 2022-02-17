import { Button } from "@mui/material"
import Header from "../components/header/Header"
import ItemListContainer from "../components/itemList/ItemListContainer"
import QuestionListContainer from "../components/questionList/QuestionListContainer"
import SalesListContainer from "../components/salesList/SalesListContainer"

const MainPage = () => {
    return (
        <main>
            <ItemListContainer />
            <QuestionListContainer />
            <SalesListContainer />
        </main>
    )
}

export default MainPage
