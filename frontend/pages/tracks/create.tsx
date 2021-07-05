import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'
import { MainLayout } from '../../MainLayout/MainLayout'
import c from './tracks.module.scss'
import { useInput } from '../../hooks/useInput'
import axios from 'axios'
import { useRouter } from 'next/router'

const Create = () => {
    const [img, setImg] = useState(null)
    const [track, setTrack] = useState(null)
    const [num, setNum] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDisabled1, setIsDisabled1] = useState(false)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    let StepContent = ({ className, label }) => {
        return (
            <Grid container direction="column" className={className[0]}>
                <TextField label={label[0]} className={className[1]} {...name} />
                <TextField label={label[1]} className={className[1]}  {...artist} />
                <TextField label={label[2]} className={className[1]} multiline rows={3}  {...text} />
            </Grid>
        )
    }
    let StepContentFile = ({ accept, setFile, text }) => {
        return (
            <FileUpload setFile={setFile} accept={accept}>
                <Button>
                    {text}
                </Button>
            </FileUpload>
        )
    }
    let sendData = () => {
        console.log(track)
        const formData = new FormData()
        formData.append("name", name.value)
        formData.append("artist", artist.value)
        formData.append("text", text.value)
        formData.append("picture", img)
        formData.append("audio", track)
        axios.post("http://localhost:5000/tracks", formData).then(res => router.push('/tracks')).catch(e => console.log(e))
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={num}>
                {
                    num === 0 ?
                        <StepContent className={[`${c.stepContent}`, `${c.stepContent__item}`]} label={["track name", "author name", "text"]} /> :
                        num === 1 ?
                            <StepContentFile accept={"image/*"} setFile={setImg} text={"upld cover"} /> :
                            num === 2 ?
                                <StepContentFile accept={"audio/*"} setFile={setTrack} text={"upld track"} /> :
                                sendData
                    // ""
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button
                    disabled={isDisabled}
                    onClick={
                        () => {
                            num > 0 ?
                                (setNum(num - 1), setIsDisabled(false)) :
                                (setNum(num), setIsDisabled(true), setIsDisabled1(false))
                        }
                    }
                >back
                </Button>
                <Button
                    disabled={isDisabled1}
                    onClick={
                        () => {
                            num <= 2 ?
                                (setNum(num + 1), setIsDisabled(false)) :
                                (setNum(num), setIsDisabled1(true), setIsDisabled(false))
                        }
                    }
                >
                    next
                </Button>
            </Grid>
        </MainLayout>
    )
}

export default Create


// import React, { useState } from 'react'; 
// import StepWrapper from "../../components/StepWrapper";
// import { Button, Grid, TextField } from "@material-ui/core";
// import FileUpload from "../../components/FileUpload";
// import { useInput } from "../../hooks/useInput";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { MainLayout } from '../../MainLayout/MainLayout';

// const Create = () => {
//     const [activeStep, setActiveStep] = useState(0)
//     const [picture, setPicture] = useState(null)
//     const [audio, setAudio] = useState(null)
//     const name = useInput('')
//     const artist = useInput('')
//     const text = useInput('')
//     const router = useRouter()

//     const next = () => {
//         if (activeStep !== 2) {
//             setActiveStep(prev => prev + 1)
//         } else {
//             const formData = new FormData()
//             formData.append('name', name.value)
//             formData.append('text', text.value)
//             formData.append('artist', artist.value)
//             formData.append('picture', picture)
//             formData.append('audio', audio)
//             axios.post('http://localhost:5000/tracks', formData)
//                 .then(resp => router.push('/tracks'))
//                 .catch(e => console.log(e))
//         }
//     }

//     const back = () => {
//         setActiveStep(prev => prev - 1);
//     }

//     return (
//         <MainLayout>
//             <StepWrapper activeStep={activeStep}>
//                 {activeStep === 0 &&
//                     <Grid container direction={"column"} style={{ padding: 20 }}>
//                         <TextField
//                             {...name}
//                             style={{ marginTop: 10 }}
//                             label={"Название трека"}
//                         />
//                         <TextField
//                             {...artist}
//                             style={{ marginTop: 10 }}
//                             label={"Имя исполнителя"}
//                         />
//                         <TextField
//                             {...text}
//                             style={{ marginTop: 10 }}
//                             label={"Слова к треку"}
//                             multiline
//                             rows={3}
//                         />
//                     </Grid>
//                 }
//                 {activeStep === 1 &&
//                     <FileUpload setFile={setPicture} accept="image/*">
//                         <Button>Загрузить изображение</Button>
//                     </FileUpload>
//                 }
//                 {activeStep === 2 &&
//                     <FileUpload setFile={setAudio} accept="audio/*">
//                         <Button>Загрузить аудио</Button>
//                     </FileUpload>
//                 }
//             </StepWrapper>
//             <Grid container justifyContent='space-between'>
//                 <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
//                 <Button onClick={next}>Далее</Button>
//             </Grid>
//         </MainLayout>
//     );
// };

// export default Create;