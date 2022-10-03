import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to='/add'>Добавить</Link>
            <Link to='/view'>Посмотреть</Link>
        </nav>
    )
}
