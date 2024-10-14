import { Wrapper } from "@app-components";
import AmountOutput from "./amount-output";

export function TipOutput() {



    return (
        <Wrapper className="px-6 pt-[37px] pb-6 bg-[#00474B] flex flex-col justify-between gap-[32px] rounded-[15px] md:min-w-[413px]">
            <Wrapper className="flex flex-col gap-[20px]">
                <AmountOutput
                    title="Tip Amount"
                />

                <AmountOutput
                    title="Total"
                />
            </Wrapper>

            <button className="h-12 bg-[#26C2AE] text-[#00474B] font-bold text-[20px] rounded-[5px]">
                Reset
            </button>
        </Wrapper>
    )
}