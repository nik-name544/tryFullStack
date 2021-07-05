import React from 'react'
import c from './TrackItem.module.scss'

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e) => void
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange }) => {
    return (
        <div className={c.trackProgress}>
            <input type="range" min={0} max={right} value={left} onChange={onChange} />
            <div className={c.trackProgressTime}>{left} / {right}</div>
        </div>
    )
}
export default TrackProgress