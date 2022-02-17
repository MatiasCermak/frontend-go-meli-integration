import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext"
import PublishItemModal from "../publishItemModal/PublishItemModal";

const Header = () => {
  const { performAuthentication, isAuthenticated, setIsAuthenticated } = useContext(AppContext);

  return (
    <header>
      <AppBar position="sticky" ><Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" >
          <Link to="/" >
            Meli Integration
          </Link>
        </Typography>
        <div>
          {isAuthenticated ? <> <PublishItemModal /> <Button color="inherit" onClick={() => {
            setIsAuthenticated(false);
          }}>Logout</Button> </> : <Button color="inherit" onClick={() => {
            performAuthentication();
          }}>Login</Button>}
        </div>
      </Toolbar></AppBar>
    </header>
  )
}

export default Header
