import { Wrapper } from "@app-components";
import AmountOutput from "./amount-output";

type Props = {
    bill: TipI
    isValid: boolean
    resetBill: (bool: boolean) => void
}

export function TipOutput(props: Props) {
    const { bill, isValid, resetBill } = props
    return (
        <Wrapper className="px-6 pt-[37px] pb-6 bg-[#00474B] flex flex-col justify-between gap-[32px] rounded-[15px] md:min-w-[413px]">
            <Wrapper className="flex flex-col gap-[20px]">
                <AmountOutput
                    title="Tip Amount"
                    isValid={isValid}
                    amount={bill.tipPerPerson}
                />

                <AmountOutput
                    title="Total"
                    isValid={isValid}
                    amount={bill.total}
                />
            </Wrapper>

            <button onClick={() => resetBill(true)} className="h-12 bg-[#26C2AE] text-[#00474B] font-bold text-[20px] rounded-[5px]">
                Reset
            </button>
        </Wrapper>
    )
}