import { Container, Divider } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import QuestionList from "./QuestionList"

const QuestionListContainer = () => {
    const { itemList } = useContext(AppContext);
    return (
        <Container sx={{ borderRadius: 2, boxShadow: 4, marginY: "5rem", padding: "1rem", border: 1, borderBlockWidth: "0.01rem", borderColor: "grey.500", width: "95%" }} disableGutters={true}>
            <h2>Questions</h2>
            <Divider />
            <QuestionList questions={itemList?.flatMap((elem) => elem.Questn.filter(elem => elem.status == "UNANSWERED"))} />
        </Container >
    )
}

export default QuestionListContainer
