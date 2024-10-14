
type Props = {
    value: string;
    isDisabled: boolean;
}

export default function RadioButton(props: Props) {
    const { value, isDisabled } = props;
    return (
        <label className="w-[146.63px] md:w-[117px] h-[48px] bg-[#00474B] grid place-items-center rounded-[5px] has-[:checked]:bg-[#26C2AE] transition duration-300 ease-in-out" htmlFor={value}>
            <input disabled={isDisabled} className="appearance-none" type="radio" name="tip" id={value} value={value} />
            <span className="relative bottom-1 select-option text-white">{value}</span>
        </label>
    )
}
