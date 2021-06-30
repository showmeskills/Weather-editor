import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
        },
        top: {
            color: '#1a90ff',
            animationDuration: '550ms',
            position: 'absolute',
            top:0,
            left: 0,
            bottom: 0,
            right:0,
            margin:"auto",
        },
        circle: {
            strokeLinecap: 'round',
        },
    }),
);