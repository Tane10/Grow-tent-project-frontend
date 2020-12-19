import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

export default function LoginComponent() {
    return (
        <Grid container alignContent="center" justify="center" alignItems="center" >
            <form>
                <Grid item>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => {console.log("login")}}> Login </Button>
                </Grid>

            </form>
        </Grid>
    )
}