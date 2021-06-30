import { createMuiTheme, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  constainer: {
    width: '100%',
    margin: "auto",
    [theme.breakpoints.only("xl")]: {
      width: "64%",
    },
    [theme.breakpoints.only("lg")]: {
      width: "88%",
    },
    [theme.breakpoints.only("md")]: {
      width: "92%",
    },
    [theme.breakpoints.between("xs", 'sm')]: {
      width: "100%",
    },
  },
}))



export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          "& #root": {
            width: "100%",
            overflow: "hidden",
          }
        },
      },
    },
  },
  palette: {
    type: "light"
  },
  shape: {
    borderRadius: 0,
  },
});