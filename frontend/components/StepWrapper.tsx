import { Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'
import c from './TrackItem.module.scss'

interface StepWrapperProps {
    activeStep: number

}

const steps = ["info about track", "upd cover", "upd track"]

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, i) => {
                    return (<Step
                        key={i}
                        completed={activeStep > i}
                    >
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>)
                })}
            </Stepper>
            <Grid container justifyContent="center" className={c.stepWrapper}>
                <Card className={c.stepWrapper__item}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}

export default StepWrapper