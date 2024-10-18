import { Wrapper } from "@app-components";

type Props = {
    title: string;
    error?: ErrorI
}

export default function InputHeader(props: Props) {
    const { title, error } = props
    return (
        <Wrapper className="flex items-center justify-between input-heading">
            <h2>{title}</h2>
            {error?.isError && <span className="text-[#E17457]">{error.message}</span>}
        </Wrapper>
    )
}
