import { Wrapper } from "@app-components";
import InputHeader from "./input-header";

type Props = {
    title: string;
    name: string;
    icon: string;
    error?: ErrorI
}

export default function TextInput(props: Props) {
    const { title, name, icon, error } = props;
    return (
        <Wrapper className="flex flex-col gap-[6px]">
            <InputHeader title={title} error={error} />
            <label className={`bg-[#F3F9FA] border-2 ${error?.isError ? 'border-[#E17052]' : 'border-[#F3F9FA]'}  flex items-center justify-between gap-2 px-[18px] rounded-[5px] overflow-hidden transition-colors duration-300 ease-in-out`}  htmlFor={name}>
                <img className="object-contain" src={icon} alt={`${title} icon`} />
                <input className="min-h-[48px] input-text text-[#00474B] bg-transparent border-none outline-none text-end w-full" type="number" name={name} id={name} placeholder="0" />
            </label>

        </Wrapper>
    )
}
