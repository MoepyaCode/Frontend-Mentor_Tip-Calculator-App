import { Container } from '@app-components'
import { TipForm } from './tip-form/'
import { TipOutput } from './tip-output/'

export function TipCalculator() {
    return (
        <Container className='flex flex-col gap-8 p-8 bg-white rounded-t-[25px] w-full min-h-[789px] max-w-[920px] md:flex-row md:min-h-min md:rounded-b-[25px]'>
            <TipForm />
            <TipOutput />
        </Container>
    )
}
