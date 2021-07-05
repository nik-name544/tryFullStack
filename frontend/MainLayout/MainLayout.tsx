import React from 'react'
import { NavBar } from '../components/Navbar'
import { Container } from '@material-ui/core'
import Player from '../components/Player'
import Head from 'next/head'

interface MainLayoutProps {
    title?: string

}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "musikalnaja gavna"}</title>
            </Head>
            <NavBar />
            <Container style={{ margin: "90px 0" }}>
                {children}
            </Container>
            <Player />
        </>
    )
}