import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    notes: {
      marginTop: theme.spacing(12),
      padding: theme.spacing(4),
      background: '#f2f2f2',
    },
    notesList: {
        listStyle: 'none',
    },
  }));

export default useStyles