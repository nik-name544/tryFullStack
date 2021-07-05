import React, { useState } from 'react'
import { NavBar } from '../../components/Navbar'
import c from './tracks.module.scss'
import { MainLayout } from '../../MainLayout/MainLayout'
import { Grid, Card, Button, Box, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAction } from '../../hooks/useAction'
import { wrapper, NextThunkDispatch } from '../../store'
import { fetchTracks, searchTracks } from '../../store/actions-creators/track'
import { useDispatch } from 'react-redux'

const Tracks = () => {
    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<String>("")
    const [timer, setTimer] = useState(null)
    const dispatch = useDispatch() as NextThunkDispatch
    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )
    }
    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }
    return (
        <>
            <MainLayout title={"trekichi"}>
                <Grid container justifyContent='center'>
                    <Card style={{ width: 900 }}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>tracks</h1>
                                <Button onClick={() => router.push('/tracks/create')}>
                                    Dwnld
                                </Button>
                            </Grid>
                        </Box>
                        <TextField
                            fullWidth
                            value={query}
                            onChange={search}
                        />
                        <TrackList tracks={tracks} />
                    </Card>
                </Grid>
            </MainLayout>
        </>
    )
}

export default Tracks


export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})