import {
    Grid,
    Card,
    TextField,
    Button,
    Typography,
    Icon
} from '@material-ui/core';

import {
    YouTube,
    Facebook,
    Twitter
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    messageForm: {
        margin: 50,
        width: "80%"
    },
    messageButton: {
        width: "100%"
    },
    companyInformation: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    footer: {
        padding: theme.spacing(6),
        backgroundColor: "#282828",
        color: "white"
    }

}));


export default function Footer() {

    const { messageForm, messageButton, companyInformation, footer } = useStyles();

    return (

        <footer className={footer}>

            <Grid container>

                <Grid item lg={6} md={12}>

                    <Card>

                        <form>

                            <TextField label="Get in touch" className={messageForm} />

                        </form>

                    </Card>

                    <Button variant="contained" color="primary" className={messageButton}>
                        Send Message
                    </Button>

                </Grid>

                <Grid item lg={6} md={12} className={companyInformation}>

                    <Typography variant="h5">
                        Landing App
                    </Typography>

                    <Typography>
                        Building award-winning, affordable online courses since 2020.
                    </Typography>

                    <Grid item>

                        <Icon>
                            <YouTube />
                        </Icon>

                        <Icon>
                            <Facebook />
                        </Icon>

                        <Icon>
                            <Twitter />
                        </Icon>

                    </Grid>

                </Grid>

            </Grid>

        </footer>

    );

}