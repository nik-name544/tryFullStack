import React, { useState } from 'react'
import { ITrack } from '../../types/track'
import { MainLayout } from '../../MainLayout/MainLayout'
import { Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import c from './tracks.module.scss'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useInput } from '../../hooks/useInput'

const TrackPage = ({ serverTrack }) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const userName = useInput('')
    const text = useInput('')

    const addComment = async () => {
        try {
            const res = await axios.post("http://localhost:5000/tracks/comment", {
                username: userName.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({ ...track, comments: [...track.comments, res.data] })

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <MainLayout title={"musikalnaja gavna ===" + track.name + " " + track.artist}>
            <Button onClick={() => router.push("/tracks")} variant="outlined" style={{ fontSize: 32 }}>
                to list
            </Button>
            <Grid container className={c.pageWrapper}>
                <img src={"http://localhost:5000/" + track.picture} alt={track.name} className={c.trackPageImg} />
                <div className={c.trackPageInfo}>
                    <h1>name:{track.name}</h1>
                    <h1>artist:{track.artist}</h1>
                    <h1>listens:{track.listens}</h1>
                </div>
            </Grid>
            <h1>
                track text
            </h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="name"
                    fullWidth
                    {...userName}
                />
                <TextField
                    label="comment"
                    fullWidth
                    multiline
                    rows={4}
                    {...text}
                />
                <Button onClick={addComment}>
                    send
                </Button>
            </Grid>
            <div>
                {track.comments.map((comment) => {
                    return (<div className={c.comment}>
                        <div>username:{comment.username}</div>
                        <div>text:{comment.text}</div>
                    </div>)
                })}
            </div>
        </MainLayout>
    )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await axios.get("http://localhost:5000/tracks/" + params.id)
    return {
        props: {
            serverTrack: res.data
        }
    }
}