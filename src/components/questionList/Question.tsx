import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Question as QuestionType } from "../../types/Items";
import QuestionAnswerModal from './QuestionAnswerModal';

type QuestionPropTypes = {
    question: QuestionType
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Question = ({ question }: QuestionPropTypes) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{question.text}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Item ID: {question.item_id} | Creation Date: {question.date_created}
                    </Typography>
                    <QuestionAnswerModal questionid={question.id} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Question
