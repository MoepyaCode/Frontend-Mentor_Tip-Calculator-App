type Props = {
    title: string;
}

export default function InputHeader(props: Props) {
    return (
        <h2 className="input-heading text-">{props.title}</h2>
    )
}
