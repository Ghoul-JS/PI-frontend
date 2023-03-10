import React from 'react'
import {Link} from "react-router-dom"
import style from './LadingPage.module.css'
 
export default function LadingPage() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>¡Welcome PLAYER 1!</h1>
            <button className={style.startButton}>
                <Link to='/videogames'>PRESS START</Link>
            </button>
            <p className={style.txtP}>By JOJOse</p>
        </div>
    )
}