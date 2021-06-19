import {
    Container,
    Typography,
    Icon
} from '@material-ui/core';

import {
    ThumbUp,
    Build,
    VerifiedUser,
    Face,
    VideoLibrary,
    CardMembership,
    Public,
    School,
    Loyalty
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    gridItem: {
        padding: 50
    }

}));

export default function GridItem(props) {

    const { gridItem } = useStyles();

    return (

        <Container align="left" className={gridItem}>

            <Icon>
                {props.icon}
            </Icon>

            <Typography variant="h5">
                {props.title}
            </Typography>

            <Typography>
                {props.description}
            </Typography>

        </Container>
    );
}