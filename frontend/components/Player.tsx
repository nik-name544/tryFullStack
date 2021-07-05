import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { ITrack } from '../types/track'
import c from './TrackItem.module.scss'
import TrackProgress from './TrackProgress'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'


let audio

const Player = () => {
    const track: ITrack = { _id: '1', name: "track 1", artist: "some1", text: "some text1", listens: 5, audio: "https://song.link/cXK8Cbv4WGwTW", picture: "https://restaurantmomo.com/wp-content/uploads/2020/01/footer-bg.jpg", comments: [] }
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActive } = useAction()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = "http://localhost:5000/" + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null
    }

    return (
        <div className={c.player}>
            <IconButton onClick={play}>
                {pause ? <Pause /> : <PlayArrow />}
            </IconButton>

            <Grid
                container
                direction="column"
                display="flex"
                style={{ width: 200, margin: "0 20px" }}
                justifyContent="space-between"
            >
                <div className={c.trackName}>{active?.name}</div>
                <div className={c.artist}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp style={{ marginLeft: "auto" }} />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    )
}
// 1,57,11
export default Player
