import { Wrapper } from "@app-components";
import InputHeader from "./input-header";
import RadioButton from "./radio-button";
import { useState } from "react";

export default function TipOptions() {
    const [disableRadio, setDisableRadio] = useState(false);

    return (
        <Wrapper className="flex flex-col gap-4">
            <InputHeader title="Select Tip %" />

            <Wrapper className="flex flex-wrap gap-4 justify-between">
                <RadioButton isDisabled={disableRadio} value="5%" />
                <RadioButton isDisabled={disableRadio} value="10%" />
                <RadioButton isDisabled={disableRadio} value="15%" />
                <RadioButton isDisabled={disableRadio} value="25%" />
                <RadioButton isDisabled={disableRadio} value="50%" />

                <input className="input-text w-[146.63px] md:w-[117px] h-[48px] placeholder:text-center bg-[#F3F9FA] border-2 border-[#F3F9FA] focus:border-[#26C2AE] transition duration-300 ease-in-out rounded-[5px] pr-[13px] text-end text-[#00474B] outline-none  " type="number" name="tip" id="tip" placeholder='Custom' />
            </Wrapper>
        </Wrapper>
    )
}
