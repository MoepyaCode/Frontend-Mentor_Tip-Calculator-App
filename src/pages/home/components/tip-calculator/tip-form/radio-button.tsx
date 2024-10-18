import { ElementRef, useEffect, useRef } from "react";

type Props = {
    value: string;
    isDisabled: boolean;
}

export default function RadioButton(props: Props) {
    const { value, isDisabled } = props;
    const ref = useRef<ElementRef<'input'>>(null);

    useEffect(() => {
        if (ref.current?.checked && isDisabled) {
            ref.current.checked = false;
        }
    }, [ref, isDisabled])

    return (
        <label className={`w-[146.63px] md:w-[117px] h-[48px]  grid place-items-center rounded-[5px] ${isDisabled ? 'bg-[#00474B]' : 'bg-[#00474B] has-[:checked]:bg-[#26C2AE]'} transition duration-300 ease-in-out cursor-pointer`} htmlFor={value}>
            <input ref={ref} disabled={isDisabled} className="appearance-none" type="radio" name="tip" id={value} value={value} />
            <span className="relative bottom-1 select-option text-white">{value}</span>
        </label>
    )
}
