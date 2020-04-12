import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '15ch',
      },
    },
    box: {
        alignItems: "center",
        width: '100%',
        margin: theme.spacing(1),
        flexDirection: "column"
    },
    boxLine: {
        justifyContent: "space-evenly",
        width: "100%",
        margin: theme.spacing(1),
        flexDirection: "row",
        flexWrap: "wrap"
    },
    selectMenu: {
        flexGrow: "0.5"
    },
    button: {
        margin: theme.spacing(1),
      },

  }));

export default useStyles