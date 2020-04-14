import React, {useEffect} from 'react'
import { Button, Icon, Progress, Header,  Segment, Placeholder } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { Styles } from './styles'
import DeskNombreCuenta from './DeskNombreCuenta'
import DeskMonedas from './DeskMonedas'
import PeriodosCuentas from './PeriodosCuentas'
import * as actions from '../../../store/actions/monedas'
import { crearCuenta } from '../../../store/actions/crearCuentas'

const DesktopFromCuenta = () => {
    const cuentaPorCrear = useSelector(store => store.crearCuenta)
    const [progress, setProgress] = React.useState(33)
    const [step, setStep] = React.useState(1)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actions.fetchMonedas())
    }, [])

    const handleNext = () => {
        setProgress(progress < 67? progress + 33: progress)
        setStep(step <= 4? step + 1: step)
        if(step == 4) dispatch(crearCuenta(cuentaPorCrear))
    }
    const handlePrev = () => {
        setProgress(progress > 33 ? progress - 33: progress)
        setStep(step > 1? step - 1: step)
    }

    const renderSwitch = (param) => {
        switch(param){
            case 1:
                return <DeskNombreCuenta/>
            case 2:
                return <DeskMonedas/>
            case 3:
                return <PeriodosCuentas/>
            default:
                return (<Segment>
                      <Placeholder>
                    <Placeholder.Header>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    </Placeholder>           
                  </Segment>)
            }
        }
    
    return ( 
        <div style={{width:"75%"}}>
            <Header as="h2" attached="top">
            Crear una cuenta
            </Header>
            <Segment attached>
            <Progress percent={progress} indicating/>
            <form class="ui form" style={Styles.form}>
                {renderSwitch(step)}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <Button primary style={Styles.prevButton} onClick={evt => {evt.preventDefault() 
                    handlePrev()}}icon labelPosition='left'>Anterior
                    <Icon name='left arrow' />
                </Button>
                <Button primary style={Styles.nextButton} onClick={evt => {evt.preventDefault() 
                    handleNext()}}icon labelPosition='right'>{step == 3?"Crear Cuenta":"Siguiente"}
                    <Icon name='right arrow' />
                </Button>
                </div>
            </form>
            </Segment>
        </div>
    )
}

export default DesktopFromCuenta