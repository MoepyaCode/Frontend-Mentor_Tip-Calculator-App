import { Wrapper } from '@app-components'

type Props = {
    title: string
    isValid: boolean
    amount: number
}

export default function AmountOutput(props: Props) {
    const { title, amount, isValid } = props

    return (
        <Wrapper className='flex justify-between items-center'>
            <Wrapper>
                <h3 className='font-bold text-white'>{title}</h3>
                <p className='font-bold text-[13px] text-[#7F9D9F]'>/ person</p>
            </Wrapper>

            <span className='font-bold text-[32px] -tracking-[0.67px] text-[#26C2AE]'>
                {isValid ? `$${amount}` : '$0.00'}
            </span>
        </Wrapper>
    )
}
