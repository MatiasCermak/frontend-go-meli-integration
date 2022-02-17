import { List } from "@mui/material"
import Question from "./Question";
import { Question as QuestionType } from "../../types/Items";

type QuestionListPropTypes = {
    questions: QuestionType[] | undefined
}


const QuestionList = ({ questions }: QuestionListPropTypes) => {
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
            {questions?.map(question => <Question question={question} />)}
        </List>
    )
}

export default QuestionList
