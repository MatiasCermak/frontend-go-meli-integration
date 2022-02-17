import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid grey',
    boxShadow: 24,
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    p: 4,
};


type QuestionPropTypes = {
    questionid: number
}

const QuestionAnswerModal = ({ questionid }: QuestionPropTypes) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const { answerQuestion } = useContext(AppContext);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (ev: ChangeEvent) => {
        let target = ev.target as HTMLInputElement;
        setText(target.value);
    };
    const handleClick = () => {
        answerQuestion({ question_id: questionid, text: text });
    }

    return (
        <>
            <Button variant="contained" sx={{ margin: "1rem" }} onClick={handleOpen}>Answer</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please enter your answer in the box below
                    </Typography>
                    <TextField
                        id="outlined-textarea"
                        label="Response"
                        placeholder="Your response"
                        sx={{
                            height: "100%",
                            margin: "1rem",
                        }}
                        multiline
                        onChange={handleChange}
                    />
                    <Button variant="contained" onClick={handleClick}>Send</Button>
                </Box>
            </Modal>
        </>);
};

export default QuestionAnswerModal;
