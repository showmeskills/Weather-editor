
import {
    makeStyles,
    Theme
} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) => ({
    AppBar: {
        height: "10px",
    },
    GridSection: {
        border: "1px solid #bdbdbd",
        marginTop: "10px",
        backgroundColor: "#f5f5f5",
        padding: '100px 80px'

    },
    paperPadding: {
        padding: theme.spacing(3),
    }
}))