import React from "react";
import { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, useMediaQuery, useTheme, Typography, Button } from '@mui/material';
import DrawerComponent from "./DrawerComponent";

function Header() {
    const [value, setValue] = useState();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>

                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                                    Users Info
                                </Typography>
                                <DrawerComponent />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ marginLeft: "auto" }}
                                    textColor="inherit"
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="primary">

                                    <Tab label="Home" sx={{ marginRight: "2rem" }} />
                                    <Tab label="Login" sx={{ marginRight: "2rem" }} />
                                    <Tab label="Sign Up" sx={{ marginRight: "2rem" }} />

                                </Tabs>


                                <Button sx={{ marginLeft: "auto" }} variant='contained'> Button </Button>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;