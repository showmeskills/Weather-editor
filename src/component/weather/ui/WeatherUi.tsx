import {
    AppBar,
    Toolbar,
    Grid,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Input,
    Radio,
    Paper
} from "@material-ui/core"
import {PropsWithChildren} from "react";
import {useStyles} from "./style/WeatherStyle";
import { WeatherInfo } from "@/models/WeatherInfo";
interface WeatherUiProps{
    showWind:boolean;
    title:string;
    deg:number;
    showDegOrFahrenheit:boolean;
    weatherInfo:WeatherInfo;
    weather:string;
    handleChangeTitle(e:React.ChangeEvent<HTMLInputElement>):void;
    handleChangeShowWind():void;
    handleChangeDegToFah():void;
}


const WeatherUi = (props:PropsWithChildren<WeatherUiProps>) => {
    const classes = useStyles();
    const {
        showWind,
        title,
        deg,
        showDegOrFahrenheit,
        weatherInfo,
        handleChangeTitle,
        handleChangeShowWind,
        handleChangeDegToFah,
        weather
    } = props;
    return (
        <>
            <AppBar
                position="static"
                className={classes.AppBar}
            >
                <Toolbar></Toolbar>
            </AppBar>
            <section className={classes.GridSection}>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xl={2} lg={2}></Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        xl={4}

                    >
                        <Typography variant="h5">Title</Typography>
                        <FormControl fullWidth className="">
                            <Input
                                id="title"
                                value={title}
                                onChange={handleChangeTitle}
                            />
                        </FormControl>
                        <Typography variant="h5">Temperature</Typography>
                        <RadioGroup row aria-label="position" name="position"
                            value={showDegOrFahrenheit}
                            onChange={handleChangeDegToFah}
                        >
                            <FormControlLabel value={true} control={<Radio color="primary" />} label="℃" />
                            <FormControlLabel value={false} control={<Radio color="primary" />} label="℉" />
                        </RadioGroup>
                        <Typography variant="h5">Wind</Typography>
                        <RadioGroup row aria-label="position" name="position"
                            value={showWind}
                            onChange={handleChangeShowWind}
                        >
                            <FormControlLabel value={true} control={<Radio color="primary" />} label="on" />
                            <FormControlLabel value={false} control={<Radio color="primary" />} label="off" />
                        </RadioGroup>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        xl={4}
                    >
                        <Paper elevation={3} className={classes.paperPadding}>
                            {
                                title ?
                                    <Typography variant="h6">{title}</Typography>
                                    :
                                    <Typography variant="h6">non-title</Typography>
                            }
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Typography variant="h6"
                                        style={{width:"140px",height:"170px",lineHeight:"170px"}}
                                    >{weather} pic -0-!!</Typography>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Typography variant="h6">{weatherInfo.name}</Typography>
                                    {
                                        showDegOrFahrenheit ?
                                            <Typography variant="h3">{deg}℃</Typography>
                                            :
                                            <Typography variant="h3">{(deg * 1.8 + 32).toFixed(1)}℉</Typography>
                                    }
                                    {

                                        showWind ?
                                            (<div>
                                                <strong>Wind</strong><span style={{ marginLeft: "10px" }}>NE {weatherInfo.wind.speed}km/h</span>
                                            </div>)
                                            :
                                            (
                                                <div>
                                                    <strong>Wind</strong><strong style={{ marginLeft: "10px" }}>off</strong>
                                                </div>
                                            )
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xl={2} lg={2}></Grid>
                </Grid>
            </section>
        </>
    )
}

export default WeatherUi