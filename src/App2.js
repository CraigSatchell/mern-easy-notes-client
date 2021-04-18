import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Container, IconButton, Typography } from '@material-ui/core'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/Contact'
import Notes from './components/Notes'
import Search from './components/Search'
import Nav from './components/Nav'

import './style.css'
import { Menu as MenuIcon } from '@material-ui/icons'

const App2 = () => {
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className='logo' variant="h6">
                            <a href='./'>EasyNotes</a>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Nav />
                <Container maxWidth='sm'>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/notes' component={Notes} />
                        <Route path='/search' component={Search} />
                        <Route path='/contactus' component={ContactUs} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Container>
            </Router>
        </div>
    )
}

export default App2
