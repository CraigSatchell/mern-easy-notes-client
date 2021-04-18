import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './style'
import './style.css'

import Notes from './components/Notes'

function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <header className="App-header">
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              EasyNotes
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container className={classes.notes}>
          <Typography>
            <Notes />
          </Typography>
        </Container>
      </main>
    </>
  );
}

export default App;
