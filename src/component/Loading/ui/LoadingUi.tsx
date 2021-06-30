import { CircularProgress } from "@material-ui/core"
import {useStyles} from "./style/LoadingStyle";
const LoadingUi = () => {
    const classes = useStyles();
    return (
        <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
                circle: classes.circle,
            }}
            size={40}
            thickness={4}
        />
    )
}

export default LoadingUi