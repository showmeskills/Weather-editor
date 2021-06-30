import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { theme, useStyles } from "@/assets/style/global";
import { Weather, Loading } from "@/component";
import {useCityInfo,useGeolocation} from "@/utils/useGeolocation"

function App() {
  const classes = useStyles();
  const {geoLocationError} = useGeolocation();
  const {weather,error} = useCityInfo();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.constainer}>
        {weather&& <Weather weatherInfo={weather}/>}
        {!weather&&<Loading />}
        {geoLocationError&&alert(geoLocationError)}
        {error&&alert(error)}
      </div>
    </ThemeProvider>
  );
}

export default App;
