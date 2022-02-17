import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const Footer = () => {
    return (
        <footer>
            <AppBar position="static" color="primary">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            © 2022 Matias Cermak
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </footer>
    )
}

export default Footer
