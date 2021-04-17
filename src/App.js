import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, AppBar, Toolbar, Button, Card, CardContent, Grid, IconButton, Typography, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import axios from 'axios'

// setup axios for Restful API calls to Notes database
const api = axios.create({
  baseURL: `http://localhost:3001/notes`
})



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
}));


function App() {
  const [notes, setNotes] = useState([])

  // make API call
  useEffect(() => {
    api.get('/').then(res => setNotes(res.data))
  }, [])
  console.log('NOTES:',notes)

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
    </>
  );
}

export default App;
