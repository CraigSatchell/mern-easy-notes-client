import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import useStyles from '../style'
import '../style.css'

const api = axios.create({
    baseURL: `http://localhost:3001/notes`
})


const Notes = () => {
    const [notes, setNotes] = useState([])

    // make API call
    useEffect(() => {
        api.get('/').then(res => setNotes(res.data))
    }, [])

    const classes = useStyles

    return (
        <div>
            <Container className={classes.notes}>
                <h2 className='pageTitle'>Notes</h2>
                <ul className='noteList'>
                {notes.map((note) => {
                    return <li c><a href='./'>{note.title}</a></li>
                })}
                </ul>
            </Container>

        </div>
    )
}

export default Notes
