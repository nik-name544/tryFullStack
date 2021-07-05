import React from 'react'
import { ITrack } from '../types/track'
import { Card, IconButton, Grid } from '@material-ui/core'
import c from './TrackItem.module.scss'
import { PlayArrow, Pause, Delete } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useAction } from '../hooks/useAction'

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter()
    const { playTrack, pauseTrack, setActive } = useAction()
    const play = (e) => {
        e.stopPropagation()
        setActive(track)
        playTrack()
    }

    return (
        <Card className={c.track} onClick={() => router.push("/tracks/" + track._id)}>
            <IconButton onClick={play}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img src={"http://localhost:5000/" + track.picture} alt={track.name} height={70} className={c.itemImg} />
            <Grid
                container
                direction="column"
                display="flex"
                style={{ width: 200, margin: "0 20px" }}
                justifyContent="space-between"
            >
                <div className={c.trackName}>{track.name}</div>
                <div className={c.artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:50</div>}
            <IconButton className={c.delBtn} onClick={e => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    )
}
export default TrackItem