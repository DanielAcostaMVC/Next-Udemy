
import { ActiveLink } from "./ActiveLink"
import React from "react"
import styles from "./Navbar.module.css"


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export function Navbar (){

    const activeLink = (
        menuItems.map(m => {
           return <ActiveLink key={m.href} text={m.text} href={m.href}></ActiveLink>
        })
    )

    return (
        <nav className={ styles['menu-contenedor']} >
            { activeLink }
        </nav>
    )
}