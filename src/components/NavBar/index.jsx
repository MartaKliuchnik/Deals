import React from 'react'
import { Link } from 'react-router-dom';
import s from './style.module.sass'

export default function NavBar() {
    return (
        <nav className={['wrapper', s.nav_bar].join(' ')}>
            <Link to='/add'>Добавить</Link>
            <Link to='/view'>Посмотреть</Link>
        </nav>
    )
}
