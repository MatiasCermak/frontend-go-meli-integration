import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { PublishItemForm } from './PublishItemForm';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid grey',
    boxShadow: 24,
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    p: 4,
};

const PublishItemModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button color="inherit" sx={{ margin: "1rem" }} onClick={handleOpen}>Publish new Item</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please fill the form below
                    </Typography>
                    <PublishItemForm />
                </Box>
            </Modal>
        </>);
};

export default PublishItemModal;
